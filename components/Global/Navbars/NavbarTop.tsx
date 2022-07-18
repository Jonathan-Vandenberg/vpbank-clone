import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { Element } from "react-scroll";

const style = {
  color: "rgb(196,245,208)",
};

const NavbarTop = () => {
  return (
    <Element
      name="navTop"
      className="element hidden bg-gradient-to-r from-startColor to-endColor px-2 py-1 sm:px-4 lg:flex"
    >
      <div className="container mx-auto flex-wrap items-center justify-between lg:flex">
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
        <div className="input-icons flex">
          <i className="fa fa-search icon"></i>
          <input
            placeholder="Search keyword"
            className="input-field h-8 w-full rounded-md px-2 text-topNavColor hover:text-white"
          />
        </div>
        <Link href="favourite">
          <a className=" flex items-center text-topNavColor hover:text-white">
            <FaHeart />
            Favourite
          </a>
        </Link>
        <Link href="/support">
          <a className="text-topNavColor hover:text-white">Support</a>
        </Link>
        <Link href="branches-and-atms">
          <a className="text-topNavColor hover:text-white">Branches & ATMs</a>
        </Link>
      </div>
    </Element>
  );
};

export default NavbarTop;
