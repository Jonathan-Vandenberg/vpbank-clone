import { NextPage } from "next/types";
import Scroll from "react-scroll";
import { useState, useEffect } from "react";

const NavbarAdvertise: NextPage = () => {
  let scroll = Scroll.animateScroll;

  const disableNavAd = () => {
    scroll.scrollTo(32);
  };
  return (
    <div
      className="hidden bg-advertisingNavColor px-2 py-1 sm:px-4 lg:flex"
      onClick={disableNavAd}
    >
      <div className="container relative mx-auto flex items-center justify-center">
        <p className="mx-auto font-medium">
          VPBank launches a financial brand dedicated to the breakthrough
          generation: VPBank Prime
        </p>
        <div className="ml-30">
          <button onClick={disableNavAd}>X</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdvertise;
