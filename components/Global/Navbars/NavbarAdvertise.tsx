import { NextPage } from "next/types";
import Scroll from "react-scroll";
import { useState, useEffect } from "react";

const NavbarAdvertise: NextPage = () => {
  const [disableNavAd, setDisableNavAd] = useState(false);
  let scroll = Scroll.animateScroll;

  const scrollNavAd = () => {
    scroll.scrollTo(92);
    setTimeout(() => setDisableNavAd(true), 2000);
  };
  return (
    <>
      {!disableNavAd && (
        <div
          className="hidden h-12 bg-advertisingNavColor px-4 py-1 sm:px-6 lg:flex"
          onClick={scrollNavAd}
        >
          <div className="container relative mx-auto flex items-center justify-center">
            <p className="mx-auto font-medium">
              VPBank launches a financial brand dedicated to the breakthrough
              generation: VPBank Prime
            </p>
            <div className="ml-30">
              <button onClick={scrollNavAd}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarAdvertise;
