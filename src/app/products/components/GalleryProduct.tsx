"use client";

interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface GalleryProps {
  gallery?: {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
  };
}

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryProduct({ gallery }: GalleryProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getDisplayedImage = (imageSet: ImageSet) => {
    if (windowWidth < 500) {
      return imageSet.mobile;
    } else if (windowWidth < 950) {
      return imageSet.tablet;
    } else {
      return imageSet.desktop;
    }
  };

  if (!gallery) {
    return null;
  }

  return (
    <div className="flex flex-col h-full tab:grid tab:grid-cols-2 gap-10 px-10 pt-20 pb-10">
      <div className="col-span-1">
        <Image
          className="h-[300px] w-full object-cover rounded-xl"
          src={getDisplayedImage(gallery.first)}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-1 row-start-2 row-end-3">
        <Image
        className="h-[300px] w-full object-cover rounded-xl"
          src={getDisplayedImage(gallery.second)}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="row-start-1 row-end-3">
        <Image
          className="w-full h-full object-cover rounded-xl"
          src={getDisplayedImage(gallery.third)}
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
