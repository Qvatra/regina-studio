import { Language, languages } from "../../../../config/languages";
import VideographyPortfolioPageClient from "./_VideographyPortfolioPageClient";
import { getVideographyPortfolioSchema } from "../../../../content/schema";
import { fetchVideographyPortfolioData } from "../../../../utils/fetchVideographyData";

interface VideographyPortfolioPage {
  params: Promise<{
    lang: Language;
  }>;
}

export default async function VideographyPortfolioPage({ params }: VideographyPortfolioPage) {
  const { lang } = await params;
  const data = await fetchVideographyPortfolioData();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getVideographyPortfolioSchema(lang)) }}
      />
      <VideographyPortfolioPageClient lang={lang} data={data} />;
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }));
}