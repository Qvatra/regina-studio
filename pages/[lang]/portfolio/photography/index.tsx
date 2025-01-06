import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Modal from "../../../../components/Modal";
import cloudinary from "../../../../utils/cloudinary";
import getBase64ImageUrl from "../../../../utils/generateBlurPlaceholder";
import type { ImageProps } from "../../../../utils/types";
import { useLastViewedPhoto } from "../../../../utils/useLastViewedPhoto";
import ScrollToTop from '../../../../components/ScrollToTop';
import StyledLink from '../../../../components/StyledLink';
import { portfolioContent } from "../../../../content/portfolio";
import { Language } from "../../../../config/languages";
import { GetStaticPaths } from 'next';
import { getPhotographyPortfolioSchema } from '../../../../content/schema';

const PhotographyPortfolio: NextPage<{ images: ImageProps[]; lang: Language }> = ({ images, lang }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Head>
        <title>Photography Portfolio | Studio Regina</title>
        <meta 
          name="description" 
          content="Browse through our collection of professional photography work including weddings, portraits, events, commercial photography, and creative shoots." 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPhotographyPortfolioSchema(lang)) }}
        />
      </Head>
      <main className="mx-auto max-w-7xl p-4">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
              router.push(`/${lang}/portfolio/photography`, undefined, { shallow: true });
            }}
          />
        )}
        <div className="columns-2 md:columns-3">
          {images.map(({ id, public_id, format, blurDataUrl }, index) => (
            <Link
              key={id}
              href={{
                pathname: `/${lang}/portfolio/photography`,
                query: { photoId: id },
              }}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="overflow-hidden after:content group relative mb-5 block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0"
            >
              <Image
                alt="Studio Regina Photography Portfolio - Professional Photography Work"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 30vw, 405px"
                priority={index < 6}
                loading={index < 6 ? 'eager' : 'lazy'}
              />
            </Link>
          ))}
        </div>
      </main>
      <ScrollToTop />
      <StyledLink 
        href={`/${lang}/services`} 
        text={portfolioContent[lang].bookSession} 
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(portfolioContent).map((lang) => ({
    params: { lang },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PhotographyPortfolio;

export async function getStaticProps({ params }: { params: { lang: Language } }) {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_IMAGE_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
      lang: params.lang,
    },
  };
} 