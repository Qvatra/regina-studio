import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import useKeypress from "react-use-keypress";
import type { ImageProps } from "@/utils/types";
import SharedModal from "./SharedModal";

export default function Modal({ 
  images, 
  onClose, 
  onPhotoIdChange 
}: { images: ImageProps[]; onClose?: () => void; onPhotoIdChange: (id: number) => void; }) {
  const overlayRef = useRef<any>();

  const searchParams = useSearchParams();
  const photoId = searchParams?.get('photoId');
  const index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    if (onClose) {
      onClose();
    }
  }

  function changePhotoId(newVal: number) {
    setDirection(newVal > index ? 1 : -1);
    setCurIndex(newVal);
    onPhotoIdChange(newVal);
  }

  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
    }
  });

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center"
    >
      <Dialog.Overlay
        ref={overlayRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
