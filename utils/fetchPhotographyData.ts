import cloudinary from "./cloudinary";
import getBase64ImageUrl from "./generateBlurPlaceholder";
import { ImageProps } from "./types";

export async function fetchPhotographyPortfolioData(): Promise<ImageProps[]> {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_IMAGE_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  const placeholders = await Promise.all(results.resources.map(i => getBase64ImageUrl(i)));

  return results.resources.map((i, index) => ({
    id: index,
    height: i.height,
    width: i.width,
    public_id: i.public_id,
    format: i.format,
    blurDataUrl: placeholders[index],
  }));
} 