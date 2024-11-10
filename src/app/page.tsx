import Products from "@/components/Products";
import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ProductSection from "@/components/home/ProductSection";



export default function Home() {
  return (
    <>
      <HeroSection />
      <Products />
      <ProductSection />
      <AboutSection/>
      
    </>
  );
}
