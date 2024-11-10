"use client";

import getFilteredProducts from "@/app/utils/getFilteredProducts";
import ProductCardWithCart from "@/components/ProductCardWithCart";
import { usePathname } from "next/navigation";
import FeaturesProduct from "../../components/FeaturesProcuct";
import GalleryProduct from "../../components/GalleryProduct";
import OtherProduct from "../../components/OtherProduct";

export default function ProductPage() {
  const pathName = usePathname();

  const arrayPath = pathName.split("/");
  const [, , categoryProduct, slug] = arrayPath;
  const filteredProduct = getFilteredProducts(categoryProduct);

  const slugFiltered = filteredProduct.filter(
    (product) => product.slug === slug
  );
  console.log(slugFiltered);

  const {
    name,
    category,
    description,
    new: isNew,
    price,
    id,
    cartImage,
    features,
    includes,
    gallery,
    others
  } = slugFiltered[0];

  if(!category) return null;

  return (
    <section className="max-w-[1400px] m-auto">
      <div className="mb-4">
        <ProductCardWithCart
          image={{
            desktop: category?.image?.desktop ?? "",
            tablet: category?.image?.tablet ?? "",
            mobile: category?.image?.mobile ?? "",
          }}
          newProduct={isNew ?? false}
          name={name ?? ""}
          description={description ?? ""}
          price={price ?? 1}
          id={id ?? 1}
          cartImage={cartImage ?? ""}
        />
      </div>

      <FeaturesProduct features={features} includes={includes} />
      <GalleryProduct gallery={gallery}/>
      <OtherProduct others={others} />
    </section>
  );
}
