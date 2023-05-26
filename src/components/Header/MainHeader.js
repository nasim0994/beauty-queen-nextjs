import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";

export default function MainHeader() {
  return (
    <div>
      <div className="py-2 text-neutral border-b sticky top-0 z-40 bg-[#ffffffcc] lg:backdrop-blur-[30px] backdrop-saturate-[200%]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="hidden lg:block">
              <Link href="/">
                <img src="/logo.png" className="w-52 h-10" alt="logo" />
              </Link>
            </div>
            <div className="w-full lg:w-3/5">
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="search Product..."
                  className="searchInput border w-full px-3 py-1.5 rounded outline-none rounded-r-0 border-r-0"
                />
                <div className="px-3 text-lg text-base-100 bg-primary flex justify-center items-center rounded-r">
                  <BsSearch />
                </div>
              </div>
            </div>
            <div className="hidden lg:flex gap-6 items-center">
              <Link
                href="/account/wishlist"
                className="flex gap-1 items-center text-neutral hover:text-primary duration-300"
              >
                <FiHeart className="text-xl" />
                <h1 className="font-medium">wishlist</h1>
              </Link>

              <Link
                href="/cart"
                className="flex gap-3 items-end hover:text-primary duration-300"
              >
                <div className="relative ">
                  <RiShoppingCartLine className="text-2xl" />
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-primary text-base-100 border-base-100 rounded-full -top-3 -right-3">
                    0
                  </div>
                </div>
                <h1 className="font-medium">৳00</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
