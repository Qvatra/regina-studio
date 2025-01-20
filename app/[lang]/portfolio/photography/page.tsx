import { Language, languages } from "@/config/languages";
import PhotographyPortfolioPageClient from "./_PhotographyPortfolioPageClient";
import { fetchPhotographyPortfolioData } from "@/utils/fetchPhotographyData";

interface PhotographyPortfolioPageProps {
  params: Promise<{
    lang: Language;
  }>;
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