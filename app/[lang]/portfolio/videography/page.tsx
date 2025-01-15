import { languages } from "../../../../config/languages";
import VideographyPortfolioPageClient from "./_VideographyPortfolioPageClient";
import { getVideographyPortfolioSchema } from "../../../../content/schema";
import { fetchVideographyPortfolioData } from "../../../../utils/fetchVideographyData";

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }));
}

export default async function PhotographyPortfolioPage({ params }: { params: { lang: string } }) {
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
