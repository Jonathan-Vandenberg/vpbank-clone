import { NextPage } from "next/types";
import Scroll from "react-scroll";
import { useState, useEffect } from "react";

const NavbarAdvertise: NextPage = () => {
  let scroll = Scroll.animateScroll;

  const disableNavAd = () => {
    scroll.scrollTo(48);
  };
  return (
    <div
      className="hidden h-12 bg-advertisingNavColor px-4 py-1 sm:px-6 lg:flex"
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
