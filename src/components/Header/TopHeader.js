import Link from "next/link";

import { BsFacebook, BsTelephoneInbound, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram, AiOutlineLogin } from "react-icons/ai";
import { BiLogOutCircle, BiUser } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

export default function TopHeader() {
  return (
    <div className="hidden lg:block bg-primary py-1 border-b text-base-100/80">
      <div className="container mx-auto font-medium">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  href="https://www.facebook.com/beautyqueen5962"
                  target="_blank"
                  className="hover:text-base-100 duration-200"
                >
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send?phone=8801768765962"
                  target="_blank"
                  className="hover:text-base-100 duration-200"
                >
                  <IoLogoWhatsapp className="text-[15px]" />
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-base-100 duration-200">
                  <AiFillInstagram className="text-[15px]" />
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-base-100 duration-200">
                  <BsYoutube className="text-[15px]" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <ul className="flex gap-4 items-center font-medium">
              <li className="border-r pr-3">
                <Link
                  href="tel: 01706260994"
                  className="flex items-center gap-1 hover:text-base-100 duration-200"
                >
                  <BsTelephoneInbound className="text-[13px]" />
                  01531714355
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="flex items-center gap-1 hover:text-base-100 duration-200"
                >
                  <AiOutlineLogin className="text-[15px]" />
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
