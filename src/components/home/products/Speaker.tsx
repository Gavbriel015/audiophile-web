import Image from "next/image";

import Circles from "@/../public/assets/home/desktop/pattern-circles.svg";
import SpeakerImage from "@/../public/assets/home/mobile/image-speaker-zx9.png";

import Link from "next/link";

export default function Speaker() {
  return (
    <div>
      <div className="relative bg-[#D87D4A] w-full h-auto py-6 flex justify-center items-center overflow-hidden px-10">
        <Image
          className="absolute left-1/2 transform -translate-y-20 -translate-x-1/2 w-[600px] h-[600px] desk:w-full desk:h-[1000px] desk:max-w-[1000px] object-cover desk:left-60 desk:translate-y-72 desk:hidden"
          src={Circles}
          alt="pattern circles"
          width={500}
          height={500}
        />
        <div className=" flex flex-col items-center justify-center text-center p-4 gap-10 mt-6 desk:flex-row desk:z-50">
          <div className="basis-1/2">
            <Image
              className="desk:w-[300px] desk:h-[auto] z-40"
              src={SpeakerImage}
              alt="speaker zx9"
              width={150}
              height={150}
            />
          </div>

          <div className="basis-1/2 flex flex-col gap-4 items-center  desk:text-left desk:items-start">
            <h1 className="desk:text-5xl font-bold text-4xl uppercase text-white">
              ZX9 SPEAKER
            </h1>
            <p className="text-gray-200 tab:px-10 desk:px-0 desk:w-1/2">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href={"/products/speakers/zx9-speaker"}>
              <button className="bg-black py-4 px-8 text-white uppercase z-50">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
