import Image from "next/image";
import AboutImage from "@/../public/assets/shared/desktop/image-best-gear.jpg"

export default function AboutSection() {
  return (
    <section className="flex flex-col-reverse desk:flex-row desk:gap-6 w-full max-w-[1400px] m-auto h-[600px] p-4 mt-32 mb-14 tab:mb-4 desk:mb-24">
      <div className="basis-1/2 flex flex-col items-center desk:justify-center desk:items-start">
        <h1 className="text-4xl text-center desk:text-left desk:px-24 text-black uppercase font-bold mb-4 mt-4">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
        </h1>
        <p className="text-gray-400 desk:text-left text-center desk:px-24">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="basis-1/2 about-bg w-full h-full rounded-xl"></div>
    </section>
  );
}
