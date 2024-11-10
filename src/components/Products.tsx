import data from "@/../public/data.json";
import NavbarProduct from "./NavbarProduct";

export default function Products() {
  const { navbarproducts } = data[0];

  return (
    <div className="animate-fade-in animate-duration-[1000] hidden desk:flex max-w-[1400px] m-auto px-20">
      <div className="flex flex-col w-full items-center p-5 gap-1 tab:flex-row">
        {navbarproducts?.map((product) => (
          <NavbarProduct
            hoverEffect="hover:transform hover:scale-105 transition ease-in duration-100"
            key={product.name}
            name={product.name}
            image={product.img}
          />
        ))}
      </div>
    </div>
  );
}
