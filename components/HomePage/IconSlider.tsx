import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import icon1 from "../../public/scrollIcons/icon-1.png";
import icon2 from "../../public/scrollIcons/icon-2.png";
import icon3 from "../../public/scrollIcons/icon-3.png";
import icon4 from "../../public/scrollIcons/icon-4.png";
import icon5 from "../../public/scrollIcons/icon-5.png";
import icon6 from "../../public/scrollIcons/icon-6.png";
import icon7 from "../../public/scrollIcons/icon-7.png";
import icon8 from "../../public/scrollIcons/icon-8.png";
import icon9 from "../../public/scrollIcons/icon-9.png";

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
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  const renderSlides = () =>
    icons.map((el, i) => (
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -10,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.97 }}
        key={i}
        className="lg:scale-115 flex cursor-pointer flex-col items-center justify-center p-4 sm:scale-75 sm:p-3 md:scale-90 md:p-4 lg:p-3 xl:scale-100"
      >
        <div className="flex items-center justify-center rounded-2xl hover:drop-shadow-md">
          <Image src={el.image} width={100} height={100} alt="icons" />
        </div>
        <p className="pt-2 text-center  text-slate-600 xl:text-lg">
          {el.title}
        </p>
      </motion.div>
    ));

  return (
    <div className="">
      <Slider
        slidesToShow={width < 768 ? 3 : width < 1024 ? 6 : 9}
        slidesToScroll={width < 768 ? 3 : 2}
        autoplay={false}
        autoplaySpeed={3000}
        arrows={true}
        dots={false}
        dotsClass="slick-dots"
        lazyLoad={"anticipated"}
        className="mx-auto w-3/4"
        infinite={false}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default IconSlider;
