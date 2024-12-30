import type { NextPage } from "next";
import { google } from "googleapis";
import PageHead from '../components/videography/PageHead'
import { MobileLayout, TabletLayout, DesktopLayout } from '../components/videography/layouts'
import { LayoutProps, VideoProps, VideoPair, YouTubeVideo } from '../types/videography'

const VideographyPortfolio: NextPage<LayoutProps> = ({ oneCol, twoCols, threeCols }) => (
  <>
    <PageHead />
    <main className="mx-auto max-w-7xl p-4 bg-white space-y-8">
      <section>
        <MobileLayout {...oneCol} />
        <TabletLayout {...twoCols} />
        <DesktopLayout {...threeCols} />
      </section>
    </main>
  </>
);

export async function getStaticProps() {
  try {
    const youtube = google.youtube({
      version: 'v3',
      auth: process.env.YOUTUBE_API_KEY
    });

    // Get channel uploads playlist
    const channelResponse = await youtube.channels.list({
      part: ['contentDetails'],
      id: [process.env.YOUTUBE_CHANNEL_ID]
    });

    const uploadsPlaylistId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

    // Get all videos from the uploads playlist
    const playlistResponse = await youtube.playlistItems.list({
      part: ['snippet', 'contentDetails'],
      playlistId: uploadsPlaylistId,
      maxResults: 50
    });

    // Process and separate videos by type
    const allVideos = playlistResponse.data.items?.map(item => ({
      id: item.contentDetails?.videoId || '',
      title: item.snippet?.title || '',
      isVertical: ['shorts', 'vertical'].some(keyword => 
        item.snippet?.description?.toLowerCase().includes(keyword) || false
      )
    })) || [];

    const verticalVideos = allVideos.filter(v => v.isVertical);
    const horizontalVideos = allVideos.filter(v => !v.isVertical);
    const totalPairs = Math.min(verticalVideos.length, horizontalVideos.length);

    const createLayoutArrays = (colCount: number) => {
      // Calculate how many pairs we need to fill the columns
      const pairsToUse = Math.floor(totalPairs / colCount) * colCount;
      
      // Create pairs array that will fill the columns of the layout
      const pairs: VideoPair[] = Array.from({ length: pairsToUse }, (_, i) => ({
        vertical: verticalVideos[i],
        horizontal: horizontalVideos[i]
      }));

      const remainingVideos: VideoProps[] = [
        ...verticalVideos.slice(pairsToUse),
        ...horizontalVideos.slice(pairsToUse)
      ];

      return { pairs, remainingVideos };
    };

    return {
      props: {
        oneCol: createLayoutArrays(1),
        twoCols: createLayoutArrays(2),
        threeCols: createLayoutArrays(3)
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    return {
      props: {
        oneCol: { pairs: [], remainingVideos: [] },
        twoCols: { pairs: [], remainingVideos: [] },
        threeCols: { pairs: [], remainingVideos: [] }
      },
      revalidate: 3600
    };
  }
}

export default VideographyPortfolio; 