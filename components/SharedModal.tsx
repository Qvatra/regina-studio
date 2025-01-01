import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { variants } from "../utils/animationVariants";
import downloadPhoto from "../utils/downloadPhoto";
import { range } from "../utils/range";
import type { ImageProps, SharedModalProps } from "../utils/types";

export default function SharedModal({
  index,
  images,
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {
  const [loaded, setLoaded] = useState(false);

  let filteredImages = images?.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.id),
  );

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });

  let currentImage = images ? images[index] : currentPhoto;

  return (
    <MotionConfig
      transition={{
        x: { type: "tween", duration: 0.4 },
        opacity: { duration: 0.4 }
      }}
    >
      <div
        className="relative z-50 flex w-full items-center justify-center h-screen"
        {...handlers}
      >
        {/* Main image */}
        <div className="w-full h-full flex items-center justify-center p-4 pb-20">
          <div className="relative w-full h-full flex items-center justify-center max-h-[calc(100vh-120px)] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformOrigin: 'center' }}
              >
                <Image
                  src={`https://res.cloudinary.com/${
                    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                  }/image/upload/c_scale,${navigation ? "w_1280" : "w_1920"}/${
                    currentImage.public_id
                  }.${currentImage.format}`}
                  width={navigation ? 1280 : 1920}
                  height={navigation ? 853 : 1280}
                  priority
                  alt={`Studio Regina Portfolio - Professional Photography (Full View)`}
                  onLoad={() => setLoaded(true)}
                  className="max-h-[calc(100vh-120px)] w-auto object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        {loaded && (
          <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
            <div className="relative w-full h-full">
              {/* Navigation arrows */}
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-white/90 p-3 text-gray-800 shadow-md backdrop-blur-lg transition hover:bg-white focus:outline-none"
                      onClick={() => changePhotoId(index - 1)}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                  )}
                  {index + 1 < images.length && (
                    <button
                      className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-white/90 p-3 text-gray-800 shadow-md backdrop-blur-lg transition hover:bg-white focus:outline-none"
                      onClick={() => changePhotoId(index + 1)}
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  )}
                </>
              )}

              {/* Top controls */}
              <div className="absolute top-[24px] right-0 flex items-center gap-2 p-3 text-white">
                {navigation ? (
                  <a
                    href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`}
                    className="rounded-full bg-white/90 p-2 text-gray-800 shadow-md backdrop-blur-lg transition hover:bg-white"
                    target="_blank"
                    title="Open fullsize version"
                    rel="noreferrer"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                ) : null}
                <button
                  onClick={() =>
                    downloadPhoto(
                      `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`,
                      `${index}.jpg`,
                    )
                  }
                  className="rounded-full bg-white/90 p-2 text-gray-800 shadow-md backdrop-blur-lg transition hover:bg-white"
                  title="Download fullsize version"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Close button */}
              <div className="absolute top-[24px] left-0 flex items-center gap-2 p-3 text-white">
                <button
                  onClick={() => closeModal()}
                  className="rounded-full bg-white/90 p-2 text-gray-800 shadow-md backdrop-blur-lg transition hover:bg-white"
                >
                  {navigation ? (
                    <XMarkIcon className="h-5 w-5" />
                  ) : (
                    <ArrowUturnLeftIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Bottom Nav bar */}
        {navigation && (
          <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
            <motion.div
              initial={false}
              className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
            >
              <AnimatePresence initial={false}>
                {filteredImages.map(({ public_id, format, id }) => (
                  <motion.button
                    initial={{
                      width: "0%",
                      x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                    }}
                    animate={{
                      scale: id === index ? 1.25 : 1,
                      width: "100%",
                      x: `${Math.max(index * -100, 15 * -100)}%`,
                    }}
                    exit={{ width: "0%" }}
                    onClick={() => changePhotoId(id)}
                    key={id}
                    className={`${
                      id === index
                        ? "z-20 shadow shadow-black/50"
                        : "z-10"
                    } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                  >
                    <Image
                      alt={`Thumbnail for ${id === index ? 'current' : 'navigation'} image in portfolio`}
                      width={180}
                      height={120}
                      className={`${
                        id === index
                          ? "brightness-110 hover:brightness-110"
                          : "brightness-50 contrast-125 hover:brightness-75"
                      } h-full transform object-cover transition`}
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${public_id}.${format}`}
                    />
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </MotionConfig>
  );
}
