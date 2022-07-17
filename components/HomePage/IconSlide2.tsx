import React, { useEffect, useState } from "react";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon1 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-approval-100.png";
import icon2 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-combo-chart-100.png";
import icon4 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-idea-bank-100.png";
import icon5 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-money-transfer-100.png";
import icon6 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-new-contact-100.png";
import icon8 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-reseller-100.png";
import icon9 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-school-100.png";
import icon10 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-teamwork-100.png";
import icon11 from "/Users/jonathanvandenberg/2022/VPBank/public/icons8-visa-stamp-100.png";
import icon3 from "/Users/jonathanvandenberg/2022/VPBank/public/retail-icon-3.png";

const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon8,
  icon9,
  icon10,
  icon11,
];

import Slider from "react-slick";

function getWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function App() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSlides = () =>
    icons.map((img, i) => (
      <div key={i} className=" p-4">
        <Image src={img} width={100} height={100} alt="icons" />
      </div>
    ));

  return (
    <div className="hidden md:block">
      <Slider
        slidesToShow={width > 976 ? 8 : 6}
        slidesToScroll={2}
        autoplay={false}
        autoplaySpeed={3000}
        arrows={true}
        dots={true}
        dotsClass="slick-dots"
        lazyLoad={"anticipated"}
        className="mx-auto w-3/4"
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
