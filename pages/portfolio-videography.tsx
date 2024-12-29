import type { NextPage } from "next";
import Head from "next/head";
import { google } from 'googleapis';

interface VideoProps {
  id: string;
  title: string;
  isVertical: boolean;
}

const VideographyPortfolio: NextPage = ({ videos }: { videos: VideoProps[] }) => {
  return (
    <>
      <Head>
        <title>Videography Portfolio | Studio Regina</title>
        <meta 
          name="description" 
          content="Watch our collection of professional video work including wedding films, commercials, events, and creative productions." 
        />
      </Head>
      <main className="mx-auto max-w-7xl p-4 bg-white">
        <div className="columns-1 sm:columns-2 md:columns-3">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative break-inside-avoid mb-4"
            >
              <div className={`relative overflow-hidden ${
                video.isVertical 
                  ? 'w-full aspect-[9/16] mx-auto' 
                  : 'aspect-video'
              }`}>
                <iframe
                  className='w-full h-full'
                  src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&showinfo=0&rel=0&controls=1&color=white&iv_load_policy=3`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

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
    const allVideos = playlistResponse.data.items.map(item => ({
      id: item.contentDetails.videoId,
      title: item.snippet.title,
      isVertical: ['shorts', 'vertical'].some(keyword => item.snippet.description.toLowerCase().includes(keyword))
    }));

    const verticalVideos = allVideos.filter(v => v.isVertical);
    const horizontalVideos = allVideos.filter(v => !v.isVertical);

    // Mix videos in a pattern: 2 vertical, 1 horizontal
    const mixedVideos: VideoProps[] = [];
    let vIndex = 0;
    let hIndex = 0;

    while (vIndex < verticalVideos.length || hIndex < horizontalVideos.length) {
      // Add two vertical videos if available
      if (vIndex < verticalVideos.length) {
        mixedVideos.push(verticalVideos[vIndex++]);
      }
      // Add one horizontal video if available
      if (hIndex < horizontalVideos.length) {
        mixedVideos.push(horizontalVideos[hIndex++]);
      }
    }

    return {
      props: {
        videos: mixedVideos
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    return {
      props: { videos: [] },
      revalidate: 3600
    };
  }
}

export default VideographyPortfolio; 