import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import { MonthlyDealsQuery } from "../../types";

interface IProps {
  data: MonthlyDealsQuery | undefined | null;
}

const MonthlyDealSlider = ({ data }: IProps) => {
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
    data?.monthlyDeals?.map((deal, i) => (
      <div key={i}>
        <div key={deal?.id} className="cover relative">
          <Image
            src={deal!.image}
            alt="VPBank Hero Image"
            width={650}
            height={260}
            layout="responsive"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col items-start justify-between p-5">
            <div className="flex flex-col items-start justify-between space-y-12">
              {deal?.darkImage ? (
                <p className="text-xl text-white">{deal?.title}</p>
              ) : (
                <p className="text-xl ">{deal?.title}</p>
              )}
              {deal?.darkImage ? (
                <p className="text-xl font-bold text-white md:text-3xl">
                  {deal?.content}
                </p>
              ) : (
                <p className="text-xl font-bold md:text-3xl">{deal?.content}</p>
              )}
            </div>
            <div className="flex items-center justify-end space-x-3">
              <div
                className="cursor-pointer rounded-full bg-white p-2"
                onClick={() => {
                  handleLocalStorage(`${deal!.type} - ${deal!.id}`);
                }}
              >
                <FaHeart
                  size={20}
                  color={
                    localStorageKeys?.includes(`${deal!.type} - ${deal!.id}`)
                      ? "red"
                      : "green"
                  }
                />
              </div>
              {deal?.darkImage ? (
                <p className="text-xl text-white md:text-2xl">
                  {deal?.customer}
                </p>
              ) : (
                <p className="text-xl md:text-2xl">{deal?.customer}</p>
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

export default MonthlyDealSlider;
