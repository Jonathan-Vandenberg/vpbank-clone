import Skeleton from "@mui/material/Skeleton";
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
          {deal ? (
            <Image
              src={deal!.image}
              alt="VPBank Hero Image"
              width={650}
              height={300}
              layout="responsive"
              className="object-cover"
            />
          ) : (
            <Skeleton variant="rectangular" width={650} height={300} />
          )}
          <div className="absolute top-0 left-0 flex h-full w-3/5 flex-col items-start justify-between p-2 md:p-5">
            <div className="flex flex-col items-start justify-between md:space-y-5">
              {deal?.darkImage ? (
                <p className="text-white ">{deal?.title}</p>
              ) : (
                <p className="">{deal?.title}</p>
              )}
              {deal?.darkImage ? (
                <p className="text-lg font-bold leading-[20px] text-white md:text-3xl">
                  {deal?.content}
                </p>
              ) : (
                <p className="text-lg font-bold leading-[20px] md:text-3xl">
                  {deal?.content}
                </p>
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
                <p className=" text-white md:text-2xl">{deal?.customer}</p>
              ) : (
                <p className="md:text-2xl">{deal?.customer}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    ));

  return (
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
  );
};

export default MonthlyDealSlider;
