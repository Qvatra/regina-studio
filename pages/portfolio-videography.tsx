import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import cloudinary from "../utils/cloudinary";

interface VideoProps {
  id: number;
  title: string;
  public_id: string;
  format: string;
  description?: string;
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
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="relative break-inside-avoid bg-gray-50 mb-8"
            >
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
              {video.title && (
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                  {video.description && (
                    <p className="mt-2 text-gray-600">{video.description}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {videos.length === 0 && (
          <div className="text-center text-gray-600 py-12">
            <p>No videos available at the moment.</p>
          </div>
        )}
      </main>
    </>
  );
};

export default VideographyPortfolio;

export async function getStaticProps() {
  try {
    const results = await cloudinary.v2.search
      .expression("folder:videography/*")
      .sort_by("public_id", "desc")
      .max_results(40)
      .execute();

    const videos: VideoProps[] = results.resources.map((video, index) => ({
      id: index,
      title: video.context?.custom?.caption || '',
      description: video.context?.custom?.description || '',
      public_id: video.public_id,
      format: video.format,
    }));

    return {
      props: {
        videos,
      },
      revalidate: 3600, // Revalidate every hour
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