import { Language, languages } from "@/config/languages";
import VideographyPortfolioPageClient from "./_VideographyPortfolioPageClient";
import { fetchVideographyPortfolioData } from "@/utils/fetchVideographyData";
import { Metadata } from "next/types";
import { portfolioContent } from "@/content/portfolio";

interface VideographyPortfolioPage {
  params: Promise<{
    lang: Language;
  }>;
}

export async function generateMetadata({ params }: VideographyPortfolioPage): Promise<Metadata> {
  const { lang } = await params;
  const content = portfolioContent[lang];

  return {
    title: content.videoTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.videoTitle,
      description: content.metaDescription,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/portfolio/videography`,
      locale: lang,
      alternateLocale: Object.keys(languages).filter(l => l !== lang)
    }
  };
}

export default async function VideographyPortfolioPage({ params }: VideographyPortfolioPage) {
  const { lang } = await params;
  const data = await fetchVideographyPortfolioData();
  
  return (
    <VideographyPortfolioPageClient lang={lang} data={data} />
  )
}

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }));
}