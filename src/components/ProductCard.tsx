"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  newProduct: boolean;
  category: string;
  slug: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

export default function ProductCard({
  name,
  description,
  newProduct,
  image,
  category,
  slug,
}: ProductCardProps) {
  
  const router = useRouter();

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

  let displayedImage = image.desktop;
  if (windowWidth < 500) {
    displayedImage = image.mobile;
  } else if (windowWidth < 950) {
    displayedImage = image.tablet;
  }

  return (
    <div className="flex flex-col desk:flex-row items-center gap-10 m-4 desk:m-0">
      <Image
        className="tab:w-full basis-1/2 w-full desk:w-1/4 object-cover m-12"
        src={displayedImage}
        alt={name}
        width={1000}
        height={1000}
      />
      <div className="basis-1/2 flex flex-col gap-4 items-center text-center desk:text-left desk:items-start px-6 desk:px-32">
        {newProduct && (
          <p className="uppercase text-[#d87d4a] tracking-[5px] ">
            New Product
          </p>
        )}
        <h1 className="text-4xl font-bold uppercase">{name}</h1>
        <p className="text-gray-400">{description}</p>
        {/* <Link href={productLink}> */}
          <button onClick={() => router.push(`${category}/${slug}`) } className="bg-[#d87d4a] btnhover px-6 py-3 text-white font-bold uppercase">
            See product
          </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
