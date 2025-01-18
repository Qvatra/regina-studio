import { google } from "googleapis";
import { LayoutProp, VideoProps } from "../types/videography";

interface GroupConfig {
  verticalVideos: VideoProps[];
  horizontalVideos: VideoProps[];
  colCount?: number;
}

const createPairs = ({ verticalVideos, horizontalVideos, colCount = 2 }: GroupConfig): LayoutProp => {
  const totalPairs = Math.min(verticalVideos.length, horizontalVideos.length);
  const pairsToUse = Math.floor(totalPairs / colCount) * colCount;

  return { 
    groups: Array.from({ length: pairsToUse }, (_, i) => ({
      vertical: [verticalVideos[i]],
      horizontal: [horizontalVideos[i]]
    })), 
    remainingVerticalVideos: verticalVideos.slice(pairsToUse),
    remainingHorizontalVideos: horizontalVideos.slice(pairsToUse)
  };
};

const createTrios = ({ verticalVideos, horizontalVideos }: GroupConfig): LayoutProp => {
  const verticalPairs: [VideoProps, VideoProps][] = [];
  for (let i = 0; i < verticalVideos.length - 1; i += 2) {
    verticalPairs.push([verticalVideos[i], verticalVideos[i + 1]]);
  }

  const triosToUse = Math.min(verticalPairs.length, horizontalVideos.length);

  return {
    groups: Array.from({ length: triosToUse }, (_, i) => ({
      vertical: verticalPairs[i],
      horizontal: [horizontalVideos[i]],
    })),
    remainingVerticalVideos: verticalVideos.slice(triosToUse * 2),
    remainingHorizontalVideos: horizontalVideos.slice(triosToUse),
  };
};

const fetchYouTubeVideos = async () => {
  const youtube: any = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
  });

  const { data: { items: [{ contentDetails }] } } = await youtube.channels.list({
    part: ['contentDetails'],
    id: [process.env.YOUTUBE_CHANNEL_ID]
  });

  const { data: { items = [] } } = await youtube.playlistItems.list({
    part: ['snippet', 'contentDetails'],
    playlistId: contentDetails.relatedPlaylists.uploads,
    maxResults: 50
  });

  return items.map(item => ({
    id: item.contentDetails?.videoId || '',
    title: item.snippet?.title || '',
    isVertical: ['shorts', 'vertical'].some(keyword => 
      item.snippet?.description?.toLowerCase().includes(keyword) || false
    )
  }));
};

export async function fetchVideographyPortfolioData() {
  try {
    const allVideos = await fetchYouTubeVideos();
    const videos = {
      verticalVideos: allVideos.filter(v => v.isVertical),
      horizontalVideos: allVideos.filter(v => !v.isVertical)
    };

    return {
      oneCol: createTrios(videos),
      twoCols: createPairs({ ...videos, colCount: 2 }),
      threeCols: createPairs({ ...videos, colCount: 3 }),
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    const emptyLayout: LayoutProp = { 
      groups: [], 
      remainingVerticalVideos: [], 
      remainingHorizontalVideos: [] 
    };
    return {
      oneCol: emptyLayout,
      twoCols: emptyLayout,
      threeCols: emptyLayout,
    };
  }
} 