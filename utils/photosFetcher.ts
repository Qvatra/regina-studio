import cloudinary from 'cloudinary';
import getBase64ImageUrl from './generateBlurPlaceholder';
import { ImageProps } from './types';

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function fetchPhotographyPortfolioData() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_IMAGE_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  const reducedResults = results.resources.map((result, i) => ({
    id: i,
    height: result.height,
    width: result.width,
    public_id: result.public_id,
    format: result.format,
  }));

  const blurImagePromises = reducedResults.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = await imagesWithBlurDataUrls[i];
  }

  return reducedResults;
} 