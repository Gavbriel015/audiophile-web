import Earphone from "./products/Earphone";
import SecondSpeaker from "./products/SecondSpeaker";
import Speaker from "./products/Speaker";

export default function ProductSection() {
  return (
    <div className="max-w-[1400px] mb-10 mx-auto overflow-x-hidden ">
      <div className="m-4 flex flex-col gap-10">
        <Speaker />
        <SecondSpeaker/>
        <Earphone/>
      </div>
    </div>
  );
}
