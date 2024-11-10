import ProductCard from "@/components/ProductCard";
import getFilteredProducts from "@/app/utils/getFilteredProducts";

export default function EarphonesPage() {
  const filteredProducts = getFilteredProducts("earphones");

  console.log(filteredProducts);

  return (
    <section className="bg-[#191919] w-full">
      <div className="max-w-[1400px] m-auto h-[150px] flex justify-center items-center">
        <h1 className="text-center text-white text-4xl font-semibold uppercase">
          {filteredProducts[0].category?.name}
        </h1>
      </div>
      <div className="bg-white mt-10 pt-10">
        <div className=" max-w-[1400px] m-auto">
          <div className="flex flex-col-reverse gap-10">
            {filteredProducts.map((product) => (
              <div className="animate-fade-in animate-duration-[1000]" key={product.id}>
                <ProductCard
                  name={product.name ?? ""}
                  description={product.description ?? ""}
                  image={{
                    desktop: product.category?.image?.desktop ?? "",
                    tablet: product.category?.image?.tablet ?? "",
                    mobile: product.category?.image?.mobile ?? "",
                  }}
                  newProduct={product.new ?? false}
                  slug={product.slug ?? ""}
                  category={product.category?.name ?? ""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
