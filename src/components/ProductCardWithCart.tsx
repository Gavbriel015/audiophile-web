"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  newProduct: boolean;
  price: number;
  id: number;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  cartImage: string;
}

interface ProductCartProps {
  id: number;
  quantity: number;
  cartImage: string;
  name: string;
  price: number;
}

export default function ProductCardWithCart({
  name,
  description,
  newProduct,
  image,
  cartImage,
  price,
  id,
}: ProductCardProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  const [productCounter, setProductCounter] = useState(0);

  const incrementCounter = () => {
    setProductCounter(productCounter + 1);
  };
  const decrementCounter = () => {
    if (productCounter <= 0) {
      setProductCounter(0);
    } else {
      setProductCounter(productCounter - 1);
    }
  };

  const addToCart = ({
    id,
    quantity,
    cartImage,
    name,
    price,
  }: ProductCartProps): void => {
    const cart = localStorage.getItem("cart");
    let productsInCart: ProductCartProps[] = cart ? JSON.parse(cart) : [];

    const productIndex = productsInCart.findIndex((item) => item.id === id);

    if (productIndex > -1) {
      productsInCart[productIndex].quantity += quantity;
      
    } else {
      productsInCart.push({ id, quantity, cartImage, name, price });

    }

    localStorage.setItem("cart", JSON.stringify(productsInCart));
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let displayedImage = image.desktop;
  if (windowWidth < 500) {
    displayedImage = image.mobile;
  } else if (windowWidth < 950) {
    displayedImage = image.tablet;
  }

  return (
    <div className="flex flex-col desk:flex-row items-center gap-10 m-4 desk:m-0">
      <Image
        className="tab:w-full basis-1/2 w-full desk:w-1/4 desk:min-w-[400px] object-cover m-12"
        src={displayedImage}
        alt={name}
        width={1000}
        height={1000}
      />
      <div className="basis-1/2 flex flex-col gap-4 items-center text-center desk:text-left desk:items-start px-6 desk:px-28">
        {newProduct && (
          <p className="uppercase text-[#d87d4a] tracking-[5px] ">
            New Product
          </p>
        )}
        <h1 className="text-4xl font-bold uppercase">{name}</h1>
        <p className="text-gray-400">{description}</p>
        <p className="font-semibold text-xl">${price.toLocaleString()}</p>
        <div className="flex items-center gap-2">
          <div className="flex gap-5 bg-gray-200 items-center">
            <button
              onClick={decrementCounter}
              className="hover:text-[#D87D4A] text-gray-400
            hover:bg-gray-300 px-4 py-3 font-bold w-[40px] h-[48px]"
            >
              -
            </button>
            <p className="">{productCounter}</p>
            <button
              onClick={incrementCounter}
              className="hover:text-[#D87D4A] text-gray-400 hover:bg-gray-300 px-4 font-bold py-3 w-[40px] h-[48px]"
            >
              +
            </button>
          </div>
          <button disabled={productCounter === 0}
            onClick={() =>
              addToCart({
                id,
                quantity: productCounter,
                cartImage,
                name,
                price,
              })
            }
            className={`${productCounter === 0 ? 'bg-opacity-50' : 'btnhover'} bg-[#D87D4A]  px-8 py-3 text-white font-semibold uppercase truncate`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
