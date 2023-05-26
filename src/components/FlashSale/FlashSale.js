import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "./../ProductCard/ProductCard";

const FlashSale = async () => {
  const res = await fetch(
    `https://usnotafashion-server.vercel.app/flashSale?limit=5`
  );
  const flashSale = await res.json();

  return (
    <div className="my-4">
      <div className="container bg-base-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between sm:items-center border-b pb-2 border-primary">
          <h1 className="text-lg font-medium text-neutral">FlashSale</h1>

          <div>
            <Link
              href="/shops/flash-sale"
              className="w-max flex items-center text-primary font-medium hover-go"
            >
              <h1 className="text-sm">Shop More</h1>
              <MdKeyboardArrowRight className="text-lg pt-px duration-200" />
            </Link>
          </div>
        </div>

        {/* Product Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
          {flashSale?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
