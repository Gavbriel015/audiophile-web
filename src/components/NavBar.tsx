"use client";

import logo from "@/../public/assets/shared/desktop/logo.svg";
import iconCart from "@/../public/assets/shared/desktop/icon-cart.svg";
import iconBurger from "@/../public/assets/shared/tablet/icon-hamburger.svg";
import iconUser from "@/../public/assets/shared/desktop/icon-user.svg";
import iconClose from "@/../public/assets/shared/desktop/icon-close.svg";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import data from "@/../public/data.json";
import NavbarProduct from "./NavbarProduct";

export default function NavBar({}) {
  const [openMenu, setOpenMenu] = useState(true);

  const { navbarproducts } = data[0];

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");

    if (cartItems) {
      const cart = JSON.parse(cartItems);
      setCartProducts(cart);
      const quantity = cartProducts.reduce(
        (acc: number, quantity: number) => acc + quantity,
        0
      );
      setTotalQuantity(quantity);
      console.log(quantity);
    }
  }, []);

  return (
    <>
      <div className="bg-[#191919] relative z-50">
        <div className="max-w-[1400px] m-auto flex items-center justify-between px-5 p-8">
          <Image
            className="desk:hidden"
            onClick={() => setOpenMenu(!openMenu)}
            src={openMenu ? iconBurger : iconClose}
            alt="logo"
            width={22}
            height={22}
          />
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={100} />
          </Link>

          <nav className="hidden tab:hidden desk:flex desk:flex-row flex-col text-center gap-10 text-gray-300 uppercase font-semibold">
            <Link
              className="hover:text-orange-400 hover:transition hover:ease-in hover:0.1s"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-orange-400 hover:transition hover:ease-in hover:0.1s"
              href="/products/headphones"
            >
              Headphones
            </Link>
            <Link
              className="hover:text-orange-400 hover:transition hover:ease-in hover:0.1s"
              href="/products/speakers"
            >
              Speakers
            </Link>
            <Link
              className="hover:text-orange-400 hover:transition hover:ease-in hover:0.1s"
              href="/products/earphones"
            >
              Earphones
            </Link>
          </nav>
          <div className="flex gap-5 items-center">
            <Link href="/checkout">
              <div className="relative">
                {totalQuantity > 0 && (
                  <div className="absolute w-5 h-5 bg-orange-400 -right-2 -top-2 rounded-full text-center text-sm ">
                    <p className="text-white">{totalQuantity}</p>
                  </div>
                )}
                <Image src={iconCart} alt="logo" width={25} height={25} />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-[1px] bg-[#464646] w-full max-w-[1370px] m-auto mt-1"></div>
        <div className="bg-black/50 h-screen fixed z-50"></div>

        <div
          hidden={openMenu}
          className="desk:hidden animate-slide-in-top animate-duration-400 absolute bg-black/50 h-screen w-full"
        >
          <div className="bg-white w-full h-auto">
            <div className="flex flex-col items-center p-5 gap-1 tab:flex-row">
              {navbarproducts?.map((product) => (
                <NavbarProduct
                  hoverEffect=""
                  key={product.name}
                  name={product.name}
                  image={product.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
