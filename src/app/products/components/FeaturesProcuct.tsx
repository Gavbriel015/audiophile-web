interface IncludeItem {
  item: string;
  quantity: number;
}

interface FeaturesProductProps {
  features?: string;
  includes?: IncludeItem[];
}

export default function FeaturesProduct({
  features,
  includes,
}: FeaturesProductProps) {
  return (
    <div className="flex flex-col sm:flex-row px-10 justify-between w-full gap-10 sm:gap-0 mt-10">
      <div className="w-full sm:w-1/2">
        <h1 className="font-semibold text-3xl pb-6">FEATURES</h1>
        <p className="text-gray-500">{features}</p>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col items-start sm:items-center">
        <h1 className="font-semibold text-3xl pb-6">IN THE BOX</h1>
        <div className="flex flex-col gap-2">
          {includes?.map((include, index) => (
            <div className="flex gap-4 text-lg" key={index}>
              <p className="text-orange-500 font-semibold">
                {include.quantity}x
              </p>
              <p className="text-gray-500">{include.item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
