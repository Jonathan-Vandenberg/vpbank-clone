import Link from "next/link";
import { FaHeart, FaMobileAlt, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const style = {
  color: "rgb(196,245,208)",
};

const NavbarTop = ({ onMouseEnter }: any) => {
  return (
    <div
      className="bg-gradient-to-r from-startColor to-endColor"
      onMouseEnter={onMouseEnter}
    >
      <div className="hidden lg:grid lg:grid-cols-3">
        <div className="flex items-center justify-evenly  whitespace-nowrap text-sm ">
          <Link href="/about">
            <a className="cursor-pointer text-topNavColor hover:text-white">
              About Us
            </a>
          </Link>

          <a className="text-topNavColor hover:text-white">Lorem</a>

          <Link href="./news">
            <a className=" text-topNavColor hover:text-white">News</a>
          </Link>

          <a className="text-topNavColor hover:text-white">Lorem</a>
        </div>

        <input
          placeholder="Search keyword"
          className="input-field mx-auto my-2 h-7 max-w-[280px] self-center rounded-md px-2"
        />

        <div className="flex items-center justify-evenly whitespace-nowrap">
          <Link href="/favorites">
            <a className="flex cursor-pointer items-center text-topNavColor hover:text-white">
              <div className="px-2 text-white">
                <FaHeart />
              </div>
              Favorites
            </a>
          </Link>

          <a className="flex items-center text-topNavColor hover:text-white">
            <div className="p-2 text-lg text-white">
              <FaRegQuestionCircle />
            </div>
            Lorem
          </a>

          <a className="flex items-center justify-center text-topNavColor hover:text-white">
            <div className="p-2 text-xl text-white">
              <HiOutlineLocationMarker />
            </div>
            Lorem
          </a>

          <div className="p-2 text-xl text-white">
            <FaMobileAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
