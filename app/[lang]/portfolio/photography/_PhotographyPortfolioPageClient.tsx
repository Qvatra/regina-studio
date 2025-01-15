"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ImageProps } from "../../../../utils/types";
import Modal from "../../../../components/Modal";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLastViewedPhoto } from "../../../../utils/useLastViewedPhoto";
import { portfolioContent } from "../../../../content/portfolio";
import ScrollToTop from "../../../../components/ScrollToTop";
import StyledLink from "../../../../components/StyledLink";

export default function PhotographyPortfolioPageClient({ lang, images }: { lang: string, images: ImageProps[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const photoId = searchParams?.get('photoId');

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  
  useEffect(() => {
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <main className="mx-auto max-w-7xl p-4">
      {photoId && (
        <Modal
          images={images}
          onPhotoIdChange={(newId) => router.push(`/${lang}/portfolio/photography?photoId=${newId}`)}
          onClose={() => {
            setLastViewedPhoto(photoId as any);
            router.push(`/${lang}/portfolio/photography`);
          }}
        />
      )}
      <div className="columns-2 md:columns-3">
        {images.map(({ id, public_id, format, blurDataUrl }, index) => (
          <Link
            key={id}
            href={`/${lang}/portfolio/photography?photoId=${id}`}
            shallow
            ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
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
      <ScrollToTop />
      <StyledLink 
        href={`/${lang}/services/photography`} 
        text={portfolioContent[lang].bookSession} 
      />
    </main>
  );
} 