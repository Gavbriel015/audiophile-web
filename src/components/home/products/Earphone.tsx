import Link from "next/link";

export default function Earphone() {
  return (
    <>
      <div className="flex flex-col mob:flex-row w-full h-[400px] gap-4">
        <div className="basis-1/2 earphones-bg w-full h-full rounded-xl"></div>
        <div className="bg-[#f1f1f1] basis-1/2 rounded-xl flex flex-col justify-center items-start desk:items-center gap-5 pl-8">
          <h1 className="font-bold text-4xl uppercase text-black">
            XY1 Earphones
          </h1>
          <Link href={"/products/earphones/yx1-earphones"}>
            <button className="border-black border-2  py-4 px-8 text-black uppercase font-bold ">
              See Product
            </button>
            </Link>
        </div>
      </div>
    </>
  );
}
