import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import { PromoSlidesQuery } from "../../types";

interface IProps {
  data: PromoSlidesQuery | undefined | null;
}

const PromoSlider = ({ data }: IProps) => {
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
    data?.promoSlides?.map((slide, i) => (
      <div key={i}>
        <div key={slide?.id} className="cover relative">
          <Image
            src={slide!.image}
            alt="VPBank Hero Image"
            width={550}
            height={260}
            layout="responsive"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col items-start justify-between p-6">
            <div className="flex flex-col items-start justify-between space-y-12">
              {slide?.darkImage ? (
                <p className="text-xl text-white">{slide?.title}</p>
              ) : (
                <p className="text-xl ">{slide?.title}</p>
              )}
              {slide?.darkImage ? (
                <p className="text-xl font-bold text-white md:text-3xl">
                  {slide?.content}
                </p>
              ) : (
                <p className="text-xl font-bold md:text-3xl">
                  {slide?.content}
                </p>
              )}
            </div>
            <div className="flex items-center justify-end space-x-3">
              <div
                className="rounded-full bg-white p-2"
                onClick={() => {
                  handleLocalStorage(`${slide!.type} - ${slide!.id}`);
                }}
              >
                <FaHeart
                  size={20}
                  color={
                    localStorageKeys?.includes(`${slide!.type} - ${slide!.id}`)
                      ? "red"
                      : "green"
                  }
                />
              </div>
              {slide?.darkImage ? (
                <p className="text-xl text-white md:text-2xl">
                  {slide?.customer}
                </p>
              ) : (
                <p className="text-xl md:text-2xl">{slide?.customer}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="">
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={6000}
        arrows={false}
        dots={true}
        dotsClass="slick-dots"
        className="mx-auto"
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default PromoSlider;
