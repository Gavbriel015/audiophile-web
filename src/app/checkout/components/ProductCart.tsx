import Image from "next/image";

Image;

export default function ProductCart({ imageProduct, price, name, quantity, onDelete } : {imageProduct: string, price: number, name: string, quantity: number, onDelete: () => void }) {
  return (
    <div className="flex items-center justify-between bg-white p-3">
      <div className="flex items-center gap-4">
        <Image
          className="rounded-xl"
          src={imageProduct}
          alt="product cart"
          width={70}
          height={70}
        />
        <div>
          <h2 className="font-bold">{name}</h2>
          <p className="text-gray-400">${price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
      <p className="text-gray-400">x{quantity}</p>
      <p  onClick={onDelete} className="text-[#d87c49] font-bold p-3 py-1 text-lg hover:bg-gray-200 rounded-full cursor-pointer">X</p>
      </div>
    </div>
  );
}
