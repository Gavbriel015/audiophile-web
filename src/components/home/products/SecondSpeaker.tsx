import Link from "next/link";

export default function SecondSpeaker() {
  return (
    <div className="secondspeaker-bg relative w-full h-[370px] py-6 flex">
      <div className="flex flex-col justify-center items-start gap-6 pl-10 desk:pl-44">
        <h1 className="font-bold text-4xl uppercase text-black">ZX7 SPEAKER</h1>
        <Link href={"/products/speakers/zx7-speaker"}>
          <button className="border-black border-2  py-4 px-8 text-black uppercase font-bold ">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
}
