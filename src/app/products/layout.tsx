import Products from "@/components/Products";
import AboutSection from "@/components/home/AboutSection";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        {children}
        <Products/>
        <AboutSection/>
      </div>
    </>
  );
}
