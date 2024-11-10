"use client";
import { useForm } from "react-hook-form";
import ProductCart from "./ProductCart";
import SummaryItem from "./SumaryItem";

import { useState, useEffect } from "react";

export default function CheckoutForm() {
  // HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [paymentData, setPaymentData] = useState(false);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert('Thanks for you purchase, ' + data.name);
    localStorage.removeItem("cart");
    location.reload();
  });

  // CART PRODUCTS DAtA
  const [summaryProducts, setSummaryProducts] = useState([])
 
  useEffect(() => {
      if (typeof window !== 'undefined') {
        const cartItems = localStorage.getItem("cart");
        setSummaryProducts(cartItems ? JSON.parse(cartItems) : []);
      }
    }, []);

  const handleDeleteAllItems = () => {
    localStorage.removeItem("cart");
    setSummaryProducts([]);
  };

  // SUMMARY ITEMS
  let totalPrice = 0;

  if (summaryProducts) {
    totalPrice = summaryProducts.reduce(
      (
        total: number,
        product: {
          id: number;
          imageProduct: string;
          price: number;
          name: string;
          quantity: number;
        }
      ) => {
        return total + product.price * product.quantity;
      },
      0
    );
  }

  const deleteIndividualProducts = (id: number) => {
    const updatedProducts = summaryProducts.filter(
      (product: {
        id: number;
        imageProduct: string;
        price: number;
        name: string;
        quantity: number;
      }) => product.id !== id
    );
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
    setSummaryProducts(updatedProducts);
  };

  const shippingCost = summaryProducts.length > 0 ? 60 : 0;
  const vatIncluded = summaryProducts.length > 0 ? 78 : 0;
  const grandTotal = totalPrice + shippingCost + vatIncluded;

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col desk:flex-row gap-10 pb-16"
    >
      <div className="basis-[70%] bg-white p-10">
        <h1 className="text-4xl font-bold uppercase pb-10">Checkout</h1>

        {/* BILLING DETAILS SECTION */}
        <h2 className="uppercase text-[#d87c49] pb-6">Billing Details</h2>
        <div className="flex flex-col desk:flex-row gap-4">
          {/* NAME INPUT */}
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between items-center">
              <label className="font-bold" htmlFor="name">
                Name
              </label>
              {errors.name && typeof errors.name.message === "string" && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <input
              id="name"
              className={`${
                errors.name ? "border-red-500" : "border-gray-400"
              } p-3 placeholder:text-gray-400 border-[0.5px] rounded-lg`}
              placeholder="Alexei Ward"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
          </div>

          {/* EMAIL INPUT */}
          <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between">
              <label className="font-bold" htmlFor="email">
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <input
              id="email"
              className={`${
                errors.email ? "border-red-500" : "border-gray-400"
              } p-3 placeholder:text-gray-400 border-[0.5px] rounded-lg`}
              placeholder="Alexei@mail.com"
              type="email"
              {...register("email", {
                required: true,
              })}
            />
          </div>
        </div>
        {/* PHONE NUMBER INPUT */}
        <div className="flex flex-col gap-1 pr-2 pt-6 w-full mob:w-1/2">
          <div className="flex justify-between">
            <label className="font-bold" htmlFor="number">
              Phone Number
            </label>
            {errors.phonenumber &&
              typeof errors.phonenumber.message === "string" && (
                <p className="text-red-500">{errors.phonenumber.message}</p>
              )}
          </div>
          <input
            id="number"
            className={`${
              errors.email ? "border-red-500" : "border-gray-400"
            } p-3 placeholder:text-gray-400 border-[0.5px] rounded-lg`}
            placeholder="+1 202-555-0136"
            type="number"
            {...register("phonenumber", {
              required: {
                value: true,
                message: "Number is required",
              },
            })}
          />
        </div>

        {/* SHIPPING INFO */}
        <div>
          <h2 className="uppercase text-[#d87c49] pt-6 pb-4">Shipping Info</h2>
          <div className="flex flex-col desk:flex-row gap-4">
            {/* ADDRESS */}
            <div className="flex flex-col w-full gap-1">
              <div className="flex justify-between">
                <label className="font-bold" htmlFor="address">
                  Address
                </label>
                {errors.address &&
                  typeof errors.address.message === "string" && (
                    <p className="text-red-500">{errors.address.message}</p>
                  )}
              </div>
              <input
                id="address"
                className={`${
                  errors.address ? "border-red-500" : "border-gray-400"
                } p-3 placeholder:text-gray-400 border-[0.5px] rounded-lg`}
                placeholder="1137 Williamns Avenue"
                type="text"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                })}
              />
            </div>

            {/* ZIPCODE & CITY */}
            <div className="flex flex-col w-full gap-1">
              <div className="flex justify-between">
                <label className="font-bold" htmlFor="zipcode">
                  ZIP Code
                </label>
                {errors.zipcode &&
                  typeof errors.zipcode.message === "string" && (
                    <p className="text-red-500">{errors.zipcode.message}</p>
                  )}
              </div>
              <input
                id="zipcode"
                className={`${
                  errors.zipcode ? "border-red-500" : "border-gray-400"
                } p-3 placeholder:text-gray-400 border-[0.5px] rounded-lg`}
                placeholder="11000"
                type="number"
                {...register("zipcode", {
                  required: {
                    value: true,
                    message: "ZIP Code is required",
                  },
                  maxLength: {
                    value: 5,
                    message: "Zipcode is invalid, enter 5 digits",
                  },
                })}
                maxLength={5}
              />
            </div>
          </div>
        </div>

        {/* COUNTRY INPUT */}
        <div className="flex flex-col w-full mob:w-1/2 mob:pr-2 gap-1 pt-4">
          <div className="flex justify-between">
            <label className="font-bold" htmlFor="country">
              Country
            </label>
            {errors.country && typeof errors.country.message === "string" && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
          <input
            id="country"
            className={`${
              errors.country ? "border-red-500" : "border-gray-400"
            } p-3 placeholder:text-gray-400 border-[0.5px] rounded-lg`}
            placeholder="United States"
            type="text"
            {...register("country", {
              required: {
                value: true,
                message: "Country is required",
              },
            })}
          />
        </div>

        {/* PAYMENT DETAILS */}
        <div>
          <h2 className="uppercase text-[#d87c49] pt-6 pb-4">
            PAYMENT DETAILS
          </h2>
          <div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="payment">
                Payment Method
              </label>
              {errors.payment && typeof errors.payment.message === "string" && (
                <p className="text-red-500">{errors.payment.message}</p>
              )}
            </div>

            <div className="flex flex-col tab:flex-row gap-3 pt-2">
              <div className="flex gap-2 items-center border-gray-400 rounded-lg p-3 border-[0.5px]">
                <input
                  type="radio"
                  value="emoney"
                  {...register("payment", {
                    required: {
                      value: true,
                      message: "Select an Payment",
                    },
                  })}
                  onChange={() => setPaymentData(true)}
                />
                <p className="font-bold">e-Money</p>
              </div>
              <div className="flex gap-2 items-center border-gray-400 rounded-lg p-3 border-[0.5px]">
                <input
                  type="radio"
                  value="delivery"
                  {...register("payment")}
                  onChange={() => setPaymentData(false)}
                />
                <p className="font-bold">Cash on Delivery</p>
              </div>
            </div>

            {/* EMONEY OPTIONAL INPUTS (NUMBER AND PIN) */}

            {paymentData && (
              <div className="flex flex-col mob:flex-row mob:gap-2  ">
                <div className="flex flex-col w-full mob:w-1/2 mob:pr-2 gap-1 pt-4">
                  <div className="flex justify-between">
                    <label className="font-bold" htmlFor="country">
                      e-Money Number
                    </label>
                    {errors.emnumber &&
                      typeof errors.emnumber.message === "string" && (
                        <p className="text-red-500">
                          {errors.emnumber.message}
                        </p>
                      )}
                  </div>
                  <input
                    className={`${
                      errors.emnumber ? "border-red-500" : "border-gray-400"
                    } p-3 placeholder:text-gray-400 border-[0.5px] rounded-lg`}
                    placeholder="233123453"
                    type="text"
                    {...register("emnumber", {
                      required: {
                        value: true,
                        message: "Number is required",
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col w-full mob:w-1/2 mob:pr-2 gap-1 pt-4">
                  <div className="flex justify-between">
                    <label className="font-bold" htmlFor="country">
                      e-Money PIN
                    </label>
                    {errors.empin &&
                      typeof errors.empin.message === "string" && (
                        <p className="text-red-500">{errors.empin.message}</p>
                      )}
                  </div>
                  <input
                    className={`${
                      errors.empin ? "border-red-500" : "border-gray-400"
                    } p-3 placeholder:text-gray-400 border-[0.5px] rounded-lg`}
                    placeholder="1234"
                    type="text"
                    {...register("empin", {
                      required: {
                        value: true,
                        message: "Number is required",
                      },
                    })}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="basis-[30%] bg-white mb-32  w-full p-6">
        <div className="flex items justify-between pb-4">
          <h2 className="text-xl font-bold uppercase ">Summary</h2>
          <p
            onClick={handleDeleteAllItems}
            className="hover:text-black text-gray-400 underline cursor-pointer"
          >
            Delete all
          </p>
        </div>
        <div>
          <div>
            {summaryProducts && summaryProducts.length > 0 ? (
              summaryProducts.map((product: { id: number; imageProduct: string; price: number; name: string; quantity: number; cartImage: string }) => (
                <div key={product.id}>
                  <ProductCart
                    name={product.name}
                    imageProduct={product.cartImage}
                    price={product.price}
                    quantity={product.quantity}
                    onDelete={() => deleteIndividualProducts(product.id)}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-6 uppercase text-lg font-bold">
                Empty Cart
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <SummaryItem
              textColor="text-black"
              title={"Total"}
              price={totalPrice}
              className=""
            />
            <SummaryItem
              textColor="text-black"
              title={"Shipping"}
              price={shippingCost}
              className=""
            />
            <SummaryItem
              textColor="text-black"
              title={"Vat (Included)"}
              price={vatIncluded}
              className=""
            />
            <SummaryItem
              textColor="text-[#d87c49]"
              title={"Grand Total"}
              price={grandTotal}
              className="pt-3"
            />
          </div>
          <button
            disabled={summaryProducts.length <= 0}
            type="submit"
            className={`${summaryProducts.length <= 0 ? "opacity-50" : ''} bg-[#d87c49] px-8 py-3 text-white w-full uppercase mt-4`}
          >
            Continue & Pay
          </button>
        </div>
      </div>
    </form>
  );
}
