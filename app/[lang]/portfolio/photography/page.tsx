import { languages } from "../../../../config/languages";
import PhotographyPortfolioPageClient from "./_PhotographyPortfolioPageClient";
import cloudinary from "../../../../utils/cloudinary";
import getBase64ImageUrl from "../../../../utils/generateBlurPlaceholder";
import { ImageProps } from "../../../../utils/types";
import { getPhotographyPortfolioSchema } from "../../../../content/schema";

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }));
}

async function fetchPhotographyPortfolioData() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_IMAGE_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  const placeholders = await Promise.all(results.resources.map(i => getBase64ImageUrl(i)));

  const reducedResults: ImageProps[] = results.resources.map((i, index) => ({
    id: index,
    height: i.height,
    width: i.width,
    public_id: i.public_id,
    format: i.format,
    blurDataUrl: placeholders[index],
  }));

  return reducedResults;
}

export default async function PhotographyPortfolioPage({ params }: { params: { lang: string } }) {
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
