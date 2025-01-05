import type { NextPage } from "next";
import { google } from "googleapis";
import { GetStaticProps, GetStaticPaths } from 'next';
import { useEffect } from 'react';
import { MobileLayout, TabletLayout, DesktopLayout } from '../../../components/videography/layouts';
import { LayoutProps, VideoProps, LayoutProp } from '../../../types/videography';
import ScrollToTop from '../../../components/ScrollToTop';
import StyledLink from '../../../components/StyledLink';
import { portfolioContent } from "../../../content/portfolio";
import { Language } from "../../../content/about";
import Head from "next/head";

interface VideographyPortfolioPageProps extends LayoutProps {
  lang: Language;
}

interface GroupConfig {
  verticalVideos: VideoProps[];
  horizontalVideos: VideoProps[];
  colCount?: number;
}

const VideographyPortfolio: NextPage<VideographyPortfolioPageProps> = ({ oneCol, twoCols, threeCols, lang }) => {
  const content = portfolioContent[lang];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
      document.cookie = `preferredLanguage=${lang}; path=/; max-age=31536000`;
    }
  }, [lang]);

  return (
    <>
      <Head>
        <title>{content.videoTitle}</title>
        <meta name="description" content={content.videoMetaDescription} />
        {Object.keys(portfolioContent).map((l) => (
          l !== lang && (
            <link 
              key={l}
              rel="alternate" 
              hrefLang={l} 
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${l}/portfolio/videography`}
            />
          )
        ))}
        <link 
          rel="canonical" 
          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/portfolio/videography`}
        />
      </Head>
      <main className="mx-auto max-w-7xl p-4 bg-white space-y-8">
        <section>
          <MobileLayout {...oneCol} />
          <TabletLayout {...twoCols} />
          <DesktopLayout {...threeCols} />
        </section>
      </main>
      <ScrollToTop />
      <StyledLink 
        href={`/${lang}/services`} 
        text={content.bookSession} 
      />
    </>
  );
};

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
  const verticalPairs = verticalVideos
    .slice(verticalVideos.length % 2)
    .reduce<VideoProps[][]>((acc, video, index) => {
      if (index % 2 === 0) {
        acc.push([video, verticalVideos[index + 1]]);
      }
      return acc;
    }, []);

  const triosToUse = Math.min(verticalPairs.length, horizontalVideos.length);

  return {
    groups: Array.from({ length: triosToUse }, (_, i) => ({
      vertical: verticalPairs[i],
      horizontal: [horizontalVideos[i]],
    })),
    remainingVerticalVideos: verticalVideos.length % 2 ? [verticalVideos[0]] : [],
    remainingHorizontalVideos: horizontalVideos.slice(triosToUse)
  };
};

const fetchYouTubeVideos = async () => {
  const youtube = google.youtube({
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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(portfolioContent).map(lang => ({
      params: { lang }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as Language;
  
  if (!Object.keys(portfolioContent).includes(lang)) {
    return {
      notFound: true
    };
  }

  try {
    const allVideos = await fetchYouTubeVideos();
    const videos = {
      verticalVideos: allVideos.filter(v => v.isVertical),
      horizontalVideos: allVideos.filter(v => !v.isVertical)
    };

    return {
      props: {
        oneCol: createTrios(videos),
        twoCols: createPairs({ ...videos, colCount: 2 }),
        threeCols: createPairs({ ...videos, colCount: 3 }),
        lang
      },
      revalidate: 3600
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    const emptyLayout: LayoutProp = { 
      groups: [], 
      remainingVerticalVideos: [], 
      remainingHorizontalVideos: [] 
    };
    return {
      props: {
        oneCol: emptyLayout,
        twoCols: emptyLayout,
        threeCols: emptyLayout,
        lang
      },
      revalidate: 3600
    };
  }
};

export default VideographyPortfolio; 