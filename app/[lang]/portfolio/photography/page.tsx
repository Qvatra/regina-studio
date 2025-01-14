import { Language } from "../../../../config/languages";
import { fetchPhotographyPortfolioData } from "../../../../utils/photosFetcher";
import PhotographyPortfolioPageClient from "./_PhotographyPortfolioPageClient";

export default async function PhotographyPortfolioPage({ params }: { params: { lang: Language } }) {
  const { lang } = await params;
  const images = await fetchPhotographyPortfolioData(); // Fetch images on the server

  console.log('images', images);

  return <PhotographyPortfolioPageClient lang={lang} images={images} />;
} 
