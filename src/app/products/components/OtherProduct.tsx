import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ImageProps {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  slug: string;
  name: string;
  image: ImageProps;
  categoryOthers?: string;
}

interface OtherProps {
  others?: Product[] ;
}

export default function OtherProduct({ others }: OtherProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  const router = useRouter();

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

  const getDisplayedImage = (image: ImageProps) => {
    if (windowWidth < 500) {
      return image.mobile;
    } else if (windowWidth < 950) {
      return image.tablet;
    } else {
      return image.desktop;
    }
  };

  if (!others) {
    return null;
  }

  return (
    <div className="w-full px-10">
      <h1 className="font-bold uppercase text-4xl text-center">
        You may also like
      </h1>
      <div className="flex flex-col desk:flex-row justify-center gap-10 mt-6">
        {others.map((product, index) => (
          <div className="bg-[#F1F1F1] flex flex-col items-center pb-6" key={index}>
            <Image
              className="max-w-[250px]"              src={getDisplayedImage(product.image)}
              alt={product.name}
              width={500}
              height={500}
            />
            <div className="flex flex-col items-center gap-6">
              <h2 className="uppercase font-semibold text-xl pt-4">
                {product.name}
              </h2>
            
              <Link href={`/products/${product.categoryOthers}/${product.slug}`}>
                <button className="bg-[#d87d4a] btnhover px-6 py-3 text-white font-bold uppercase">
                  See product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
