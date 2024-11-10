import ProductCard from "@/components/ProductCard";
import getFilteredProducts from "@/app/utils/getFilteredProducts";

export default function HeadphonesPage() {
  const headphonesProducts = getFilteredProducts("headphones");


  console.log(headphonesProducts);

  return (
    <section className="bg-[#191919] w-full">
      <div className="max-w-[1400px] m-auto h-[150px] flex justify-center items-center">
        <h1 className="text-center text-white text-4xl font-semibold uppercase">
          {headphonesProducts[0].category?.name}
        </h1>
      </div>
      <div className="bg-white mt-10 pt-10">
        <div className=" max-w-[1400px] m-auto">
          <div className="flex flex-col-reverse gap-10">
            {headphonesProducts.map((headphone) => (
              <div className="animate-fade-in animate-duration-[1000]" key={headphone.id}>
                <ProductCard
                  name={headphone.name ?? ""}
                  description={headphone.description ?? ""}
                  image={{
                    desktop: headphone.category?.image?.desktop ?? "",
                    tablet: headphone.category?.image?.tablet ?? "",
                    mobile: headphone.category?.image?.mobile ?? "",
                  }}
                  newProduct={headphone.new ?? false}
                  category={headphone.category?.name ?? ""}
                  slug={headphone.slug ?? ""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
