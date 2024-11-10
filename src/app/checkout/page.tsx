import Link from "next/link";
import CheckoutForm from "./components/CheckoutForm";

export default function Checkout() {
  return (
    <>
      <section className="bg-[#f1f1f1]">
        <div className="max-w-[1400px] m-auto p-4">
          <Link href="/">
            <p className="py-5 text-gray-400 text-lg"> Go Back</p>
          </Link>
          <CheckoutForm/>
        </div>
      </section>
    </>
  );
}
