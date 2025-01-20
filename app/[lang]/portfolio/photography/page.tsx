import { Language, languages } from "@/config/languages";
import PhotographyPortfolioPageClient from "./_PhotographyPortfolioPageClient";
import { fetchPhotographyPortfolioData } from "@/utils/fetchPhotographyData";
import { getPhotographyPortfolioSchema } from "@/content/schema";

interface PhotographyPortfolioPageProps {
  params: Promise<{
    lang: Language;
  }>;
}

export default async function PhotographyPortfolioPage({ params }: PhotographyPortfolioPageProps) {
  const { lang } = await params;
  const images = await fetchPhotographyPortfolioData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPhotographyPortfolioSchema(lang)) }}
      />
      <PhotographyPortfolioPageClient lang={lang} images={images} />;
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }));
}