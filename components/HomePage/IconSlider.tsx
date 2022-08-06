import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import icon1 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-1.png";
import icon2 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-2.png";
import icon3 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-3.png";
import icon4 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-4.png";
import icon5 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-5.png";
import icon6 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-6.png";
import icon7 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-7.png";
import icon8 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-8.png";
import icon9 from "/Users/jonathanvandenberg/2022/VPBank/public/sideScrollIcons/retail-icon-9.png";

const icons = [
  { image: icon1, title: "Card Services" },
  { image: icon2, title: "Debit Card" },
  { image: icon3, title: "Loans" },
  { image: icon4, title: "Savings" },
  { image: icon5, title: "Account" },
  { image: icon6, title: "E-Banking" },
  { image: icon7, title: "Insurance" },
  { image: icon8, title: "Personal Services" },
  { image: icon9, title: "VPBank Loyalty" },
  { image: icon9, title: "VPBank Diamond" },
];

const IconSlider = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const { innerWidth: screenWidth } = window;
    function handleResize() {
      setWidth(screenWidth);
    }
    window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const renderSlides = () =>
    icons.map((el, i) => (
      <div
        key={i}
        className="lg:scale-115 flex flex-col items-center justify-center p-4 sm:scale-75 sm:p-3 md:scale-90 md:p-4 lg:p-3 xl:scale-100"
      >
        <div className="flex items-center justify-center">
          <Image src={el.image} width={100} height={100} alt="icons" />
        </div>
        <p className="pt-2 text-center text-xs text-slate-600 md:text-sm">
          {el.title}
        </p>
      </div>
    ));

  return (
    <div className="">
      <Slider
        slidesToShow={width < 768 ? 4 : width < 1024 ? 6 : 9}
        slidesToScroll={width < 768 ? 4 : 2}
        autoplay={false}
        autoplaySpeed={3000}
        arrows={true}
        dots={false}
        dotsClass="slick-dots"
        lazyLoad={"anticipated"}
        className="mx-auto w-3/4"
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default IconSlider;
