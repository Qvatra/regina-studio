"use client";

import Link from "next/link";
import Modal from "../../../../components/Modal";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { ImageProps } from "../../../../utils/types";
import { useLastViewedPhoto } from "../../../../utils/useLastViewedPhoto";
import { Language } from "../../../../config/languages";

export default function PhotographyPortfolioPageClient({ lang, images }: { lang: Language, images: ImageProps[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const photoId = searchParams.get('photoId');
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

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
  );
} 