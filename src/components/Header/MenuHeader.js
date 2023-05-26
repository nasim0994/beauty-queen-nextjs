import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function MenuHeader() {
  return (
    <div className="hidden lg:block text-sm bg-base-100 shadow">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-60 flex justify-between items-center bg-primary p-2 text-base-100">
            <div className="flex gap-2 items-center">
              <FiMenu className="text-lg" />
              <h6 className="mt-px">BROWSE CATEGORIES</h6>
            </div>

            <MdKeyboardArrowDown className="text-lg" />
          </div>

          <nav>
            <ul className="flex items-center font-medium text-neutral">
              <li>
                <Link
                  href="/"
                  className="block px-3 hover:text-primary duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shops"
                  className="block px-3 hover:text-primary duration-200"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="block px-3 hover:text-primary duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block px-3 hover:text-primary duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
