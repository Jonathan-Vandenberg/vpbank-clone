import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import { FaHeart, FaSun } from "react-icons/fa";
import ad1 from "../../public/adsHomePage/ad1.png";
import ad2 from "../../public/adsHomePage/ad2.png";
import ad3 from "../../public/adsHomePage/ad3.png";
import ad4 from "../../public/adsHomePage/ad4.png";
import ad5 from "../../public/adsHomePage/ad5.png";
import HeroSlideshow from "../UI/HeroSlideshow";
import happyIcon from "/Users/jonathanvandenberg/2022/VPBank/public/happyIcon.svg";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";

const heroImages = [ad1, ad2, ad3, ad4, ad5];
const images = [
  { img: ad1, id: "1" },
  { img: ad2, id: "2" },
  { img: ad3, id: "3" },
  { img: ad4, id: "4" },
  { img: ad5, id: "5" },
];

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
let day = weekday[d.getDay()];
let month = months[d.getMonth()];

const Promotion: NextPage = () => {
  const [localStorageChange, setLocalStorageChange] = useState(false);
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);
  const [width, setWidth] = useState(0);
  const [showScrollableAds, setShowScrollableAds] = useState(false);

  useEffect(() => {
    const { innerWidth: screenWidth } = window;

    screenWidth > 992
      ? setShowScrollableAds(true)
      : setShowScrollableAds(false);
    window.addEventListener("resize", () => setWidth(screenWidth));
  }, [width]);

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

  return (
    <section className="lg:container-lg mx-auto md:container">
      <div className="ml-6 mt-4 flex-col pt-4 md:container md:mx-auto md:flex md:flex-row md:items-center md:justify-between md:pt-2">
        <h2 className="indexTitle bg-gradient-to-r from-startColor  to-endColor bg-clip-text text-3xl font-bold text-transparent md:p-4">
          Retail Banking
        </h2>
        <div className="text-iwanttoColor">
          <Link href="/">see more</Link>
        </div>
      </div>
      <div className="md:h-promotionHeight grid-cols-3 space-y-8 md:flex-col lg:grid lg:space-y-0">
        <div className="md-space-x-4 space-y-8 md:col-span-2 md:flex-col  lg:space-y-3">
          <HeroSlideshow
            imageData={heroImages}
            height={300}
            width={600}
            scaleOnHover={true}
          />
          <div className="flex flex-col bg-white py-2 md:flex-row">
            <div className="p-4 md:w-1/3 ">
              <p className="text-xl font-semibold">Ha Noi</p>
              <p className="text-sm text-slate-600">
                {day}, {month} {d.getDate()} {d.getFullYear()}
              </p>
              <div className="flex items-center justify-around md:justify-evenly">
                <div className="flex items-center justify-center space-x-3 p-3 md:w-1/3 md:flex-col">
                  <FaSun className="text-6xl text-yellow-300" />
                  <p className="p-1 text-center text-2xl font-bold">25˚C</p>
                </div>
                <div className="flex items-center justify-center space-x-3 p-3 md:w-1/3 md:flex-col">
                  <Image
                    src={happyIcon}
                    width={50}
                    height={50}
                    alt="weather icon"
                  />
                  <p className="p-1 md:text-xs">AQI</p>
                  <p className="text-center text-2xl font-bold">50</p>
                </div>
              </div>
            </div>

            <div className="border-y-2 p-4 md:w-1/3 md:border-x-2 md:border-y-0">
              <p className="pb-2 font-semibold">Share your story</p>
              <p className="font-lighter text-slate-600 md:text-xs">
                VPBank luôn lắng nghe và trân trọng mọi ý kiến chia sẻ từ Khách
                hàng để có cơ hội và động lực mang tới những trải nghiệm giao
                dịch ngày một tuyệt vời hơn.
              </p>
              <IconButton className="gap-1 pt-3 text-xl text-iwanttoColor">
                Share Now <ArrowForwardIcon />
              </IconButton>
            </div>

            <div className="p-4 md:w-1/3">
              <p className="pb-2 font-semibold">Contact us hotline</p>
              <Link href={"/"}>
                <p className="text-3xl text-iwanttoColor">0872348273</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-auto lg:ml-3">
          {showScrollableAds ? (
            <ScrollableAds
              handleLocalStorage={handleLocalStorage}
              setLocalStorageChange={setLocalStorageChange}
              localStorageChange={localStorageChange}
              localStorageKeys={localStorageKeys}
            />
          ) : (
            <StaticAds
              handleLocalStorage={handleLocalStorage}
              setLocalStorageChange={setLocalStorageChange}
              localStorageChange={localStorageChange}
              localStorageKeys={localStorageKeys}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Promotion;

interface AdsProps {
  handleLocalStorage: (data: string) => void;
  setLocalStorageChange: (data: boolean) => void;
  localStorageChange: boolean;
  localStorageKeys: string[];
}

const ScrollableAds = ({
  handleLocalStorage,
  setLocalStorageChange,
  localStorageChange,
  localStorageKeys,
}: AdsProps) => {
  return (
    <div className="h-96 space-y-2 pr-2 md:grid md:grid-cols-1">
      {images.map((el, i) => (
        <div className="contain relative" key={i}>
          <Image
            src={el.img}
            width={600}
            height={300}
            alt="VPBank Image"
            layout="responsive"
          />
          <div
            className="absolute bottom-[10px] left-[10px] rounded-full bg-white p-2"
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
      ))}
    </div>
  );
};

const StaticAds = ({
  handleLocalStorage,
  setLocalStorageChange,
  localStorageChange,
  localStorageKeys,
}: AdsProps) => {
  return (
    <div className="space-y-2">
      {images
        .map((el, i) => (
          <div className="contain relative" key={i}>
            <Image
              src={el.img}
              width={600}
              height={300}
              alt="VPBank Image"
              layout="responsive"
            />
            <div
              className="absolute bottom-[10px] left-[10px] rounded-full bg-white p-2"
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
        ))
        .slice(0, 3)}
    </div>
  );
};
