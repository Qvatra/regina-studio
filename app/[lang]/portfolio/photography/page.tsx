import { Language, languages } from "@/config/languages";
import PhotographyPortfolioPageClient from "./_PhotographyPortfolioPageClient";
import { fetchPhotographyPortfolioData } from "@/utils/fetchPhotographyData";
import { portfolioContent } from "@/content/portfolio";
import { Metadata } from "next";

interface PhotographyPortfolioPageProps {
  params: Promise<{
    lang: Language;
  }>;
}

export async function generateMetadata({ params }: PhotographyPortfolioPageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = portfolioContent[lang];

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}/portfolio/photography`,
      locale: lang,
      alternateLocale: Object.keys(languages).filter(l => l !== lang)
    }
  };
}

export default async function PhotographyPortfolioPage({ params }: PhotographyPortfolioPageProps) {
  const { lang } = await params;
  const images = await fetchPhotographyPortfolioData();

  return (
    <PhotographyPortfolioPageClient lang={lang} images={images} />
  )
}

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }));
}