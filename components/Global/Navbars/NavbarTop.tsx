import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaHeart, FaRegQuestionCircle } from "react-icons/fa";
import { useAppDispatch } from "../../../redux-hooks/hooks";
import { hide } from "../../../slices/showDropdownSlice";
import { FaMobileAlt } from "react-icons/fa";

const style = {
  color: "rgb(196,245,208)",
};

const NavbarTop = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(hide(true))}
      className="bg-gradient-to-r from-startColor to-endColor"
    >
      <div className="hidden lg:grid lg:grid-cols-3">
        <div className="flex items-center justify-evenly  whitespace-nowrap text-sm ">
          <Link href="/about">
            <a className="text-topNavColor hover:text-white ">About Us</a>
          </Link>

          <Link href="./investor-relations">
            <a className="text-topNavColor hover:text-white">
              Investor Relations
            </a>
          </Link>

          <Link href="./news">
            <a className=" text-topNavColor hover:text-white">News</a>
          </Link>

          <Link href="./recruit">
            <a className="text-topNavColor hover:text-white">Recruit</a>
          </Link>
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
              Favourite
            </a>
          </Link>

          <Link href="/support">
            <a className="flex items-center text-topNavColor hover:text-white">
              <div className="p-2 text-lg text-white">
                <FaRegQuestionCircle />
              </div>
              Support
            </a>
          </Link>

          <Link href="branches-and-atms">
            <a className="flex items-center justify-center text-topNavColor hover:text-white">
              <div className="p-2 text-xl text-white">
                <HiOutlineLocationMarker />
              </div>
              Branches & ATMs
            </a>
          </Link>

          <Link href="/mobile">
            <div className="p-2 text-xl text-white">
              <FaMobileAlt />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
