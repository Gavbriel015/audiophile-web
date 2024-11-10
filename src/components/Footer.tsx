import logo from "@/../public/assets/shared/desktop/logo.svg";
import iconFacebook from "@/../public/assets/shared/desktop/icon-facebook.svg";
import iconInstagram from "@/../public/assets/shared/desktop/icon-instagram.svg";
import iconTwitter from "@/../public/assets/shared/desktop/icon-twitter.svg";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#191919] w-full min-h-[350px] pb-2">
      <div className="max-w-[1400px] m-auto px-5 pb-5 ">
        <div className="bg-orange-400 w-20 h-1 m-auto tab:m-0"></div>
        <div className="flex flex-col desk:flex-row desk:items-center desk:justify-between items-center tab:items-start tab:justify-start justify-between py-14 tab:text-xl desk:text-lg">
          <Image src={logo} alt="logo" width={150} height={100} />
          <nav className="flex flex-col tab:flex-row text-center pt-4 gap-4 text-gray-300 uppercase font-semibold">
            <a href="/">Home</a>
            <a href="/products/headphones">Headphones</a>
            <a href="/products/speakers">Speakers</a>
            <a href="/products/earphones">Earphones</a>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="pb-4 flex flex-col">
            <p className="text-center tab:text-left tab:w-full desk:w-1/2  text-gray-400 pb-10">
              Audiophile is an all in one stop to fulfill your audio needs.
              We`re a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <div className="flex justify-center tab:justify-between items-center w-full">
              <p className="text-gray-400">
                Copyright 2024. All rights reserved
              </p>
              <div className="hidden tab:flex items-center gap-4">
                <Image
                  src={iconFacebook}
                  alt="logofb"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
                <Image src={iconTwitter} alt="logofb" width={30} height={30} className="cursor-pointer" />
                <Image
                  src={iconInstagram}
                  alt="logofb"
                  width={30}
                  height={30}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="tab:hidden flex items-center gap-4 pt-12 tab:pr-14">
            <Image
              src={iconFacebook}
              alt="logofb"
              width={30}
              height={30}
              className=""
            />
            <Image src={iconTwitter} alt="logoTw" width={30} height={30} />
            <Image src={iconInstagram} alt="logoIg" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
