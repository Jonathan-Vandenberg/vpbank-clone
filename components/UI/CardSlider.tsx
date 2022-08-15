import { motion } from "framer-motion";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";

interface Props {
  /**Array of objects containing an image, id, title and content */
  data: Data[];
  /**Width of the image */
  width: number;
  /**Height of the image */
  height: number;
  /**Scales image to 1.02 on hover if true */
  scaleOnHover: boolean;
}

type Data = {
  image: StaticImageData | string;
  id: string;
  title: string;
  content: string;
};

const HeroSlideshow: NextPage<Props> = ({
  data,
  width,
  height,
  scaleOnHover,
}) => {
  const [localStorageChange, setLocalStorageChange] = useState(false);
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    setLocalStorageKeys(allKeys);
  }, [localStorageChange]);

  const handleLocalStorage = (data: string) => {
    const favorited = getFromStorage(data);
    if (favorited) {
      localStorage.removeItem(data);
    } else setToStorage(data, data);

    setLocalStorageChange(!localStorageChange);
  };

  const renderSlides = () =>
    data.map((el, i) => (
      <div key={i} className="p-5">
        <div className="md:flex md:flex-row-reverse md:items-start md:justify-between">
          <div className="md:w-1/2">
            <motion.div
              whileHover={{
                scale: scaleOnHover ? 1.02 : 1,
                transition: { duration: 0.3 },
              }}
              className=""
            >
              <div className="flex items-center justify-center">
                <Image
                  src={el.image}
                  alt="VPBank Hero Image"
                  width={width}
                  height={height}
                  className=" object-cover"
                />
              </div>
            </motion.div>
          </div>
          <div className="pt-4 md:w-1/2 md:pt-0">
            <div className="p-3 text-xl font-semibold md:p-0 md:pb-3 md:text-2xl">
              <p>{el.title}</p>
            </div>
            <div className="mb-3 p-3 text-gray-600 md:p-0 md:py-4 md:pr-4 md:text-[16px]">
              <p>{el.content}</p>
            </div>
            <div className="flex items-center justify-start ">
              <div
                className="cursor-pointer rounded-full bg-white p-2 hover:scale-105 hover:drop-shadow"
                onClick={() => {
                  handleLocalStorage(el.id);
                  setLocalStorageChange(!localStorageChange);
                }}
              >
                <FaHeart
                  size={20}
                  color={localStorageKeys.includes(el.id) ? "red" : "green"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  return (
    <div className=" bg-body">
      <div className="flex items-center justify-between border-b-2">
        <h2 className="bg-gradient-to-r from-startColor to-endColor bg-clip-text p-5 text-xl font-bold text-transparent md:text-2xl">
          Tips and Stories
        </h2>
        <p className="mr-2 cursor-pointer text-iwanttoColor">see more</p>
      </div>
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={7000}
        arrows={false}
        dots={false}
        dotsClass="slick-dots"
        className="h-2/3"
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default HeroSlideshow;
