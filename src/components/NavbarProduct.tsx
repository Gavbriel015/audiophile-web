"use client"

import Image from "next/image";
import iconArrow from "@/../public/assets/shared/desktop/icon-arrow-right.svg";
import { useRouter } from "next/navigation";

export default function NavbarProduct({
  name,
  image,
  hoverEffect,
}: {
  name: string;
  image: string;
  hoverEffect: string;
}) {

  const router = useRouter();

  return (
    <div onClick={() => router.push(`/products/${name.toLowerCase()}`)}
      className={`${hoverEffect} cursor-pointer bg-[#f1f1f1] h-[270px] w-full flex flex-col items-center justify-center m-3 gap-1`}
    >
      <Image
        className="w-[250] h-[170px]"
        src={image}
        alt="name"
        width={180}
        height={180}
      />
      <h1 className="uppercase font-semibold">{name}</h1>

      <div className="flex gap-3 items-center">
        <p className="text-gray-500 uppercase">Shop</p>
        <Image src={iconArrow} alt="name" width={10} height={10} />
      </div>
    </div>
  );
}
