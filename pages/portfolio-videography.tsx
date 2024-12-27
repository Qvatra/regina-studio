import type { NextPage } from "next";
import Head from "next/head";
import cloudinary from "../utils/cloudinary";

interface VideoProps {
  id: number;
  title: string;
  public_id?: string;
  format?: string;
  description?: string;
  youtubeId?: string;
  type: 'cloudinary' | 'youtube';
  isShort?: boolean;
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
              className="relative break-inside-avoid bg-gray-50 mb-4"
            >
              {video.type === 'youtube' ? (
                <div className={`relative ${video.isShort ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div>
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_scale,w_720/${video.public_id}.jpg`}
                  >
                    <source
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/c_scale,w_720/${video.public_id}.${video.format}`}
                      type={`video/${video.format}`}
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  try {
    const cloudinaryResults = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_VIDEO_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(40)
      .execute();

    // YouTube videos including shorts
    const youtubeVideos = [
      {
        id: 1000,
        title: "Wedding Film",
        youtubeId: "VsjGCc1BLwI",
        type: 'youtube' as const,
        isShort: false
      },
      {
        id: 1001,
        title: "Behind the Scenes",
        youtubeId: "A5sDEPuVovU",
        type: 'youtube' as const,
        isShort: true
      },
    ];

    const videos: VideoProps[] = [
      ...youtubeVideos,
      ...cloudinaryResults.resources.map((video, index) => ({
        id: index,
        title: video.context?.custom?.caption || '',
        description: video.context?.custom?.description || '',
        public_id: video.public_id,
        format: video.format,
        type: 'cloudinary' as const
      })),

    ];

    return {
      props: {
        videos,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    return {
      props: {
        videos: [],
      },
      revalidate: 3600,
    };
  }
}

export default VideographyPortfolio; 