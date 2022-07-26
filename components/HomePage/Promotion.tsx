import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { IconButton } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { getDisplayName } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import ad1 from "../../public/adsHomePage/ad1.png";
import ad2 from "../../public/adsHomePage/ad2.png";
import ad3 from "../../public/adsHomePage/ad3.png";
import ad4 from "../../public/adsHomePage/ad4.png";
import ad5 from "../../public/adsHomePage/ad5.png";
import HappyIcon from "../../public/happyIcon.svg";
import HeroSlideshow from "../UI/HeroSlideshow";
import WeatherDropdown from "./WeatherDropdown";

const images = [ad1, ad2, ad3, ad4, ad5];

interface Props {
  temperature: number;
  weatherIcon: string;
  aqi: number;
}

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

const Promotion: NextPage<Props> = ({ temperature, weatherIcon, aqi }) => {
  return (
    <section className="lg:container-lg mx-auto md:container ">
      <div className="ml-6 flex-col md:container md:mx-auto md:flex md:flex-row md:items-center md:justify-between">
        <h2 className="indexTitle bg-gradient-to-r from-startColor  to-endColor bg-clip-text text-3xl font-bold text-transparent md:p-4">
          Retail Banking
        </h2>
        <div className="text-iwanttoColor">
          <Link href="/">see more</Link>
        </div>
      </div>
      <div className="h-promotionHeight grid-cols-3 pb-10 md:flex-col lg:grid lg:gap-2">
        <div className="md:col-span-2 md:flex-col">
          <HeroSlideshow
            imageData={images}
            height={300}
            width={600}
            scaleOnHover={true}
          />
          <div className="mt-2 flex flex-col bg-white py-2 md:flex-row">
            <div className="p-4 md:w-1/3 ">
              <WeatherDropdown />
              <p className="text-sm text-slate-600">
                {day}, {month} {d.getDate()} {d.getFullYear()}
              </p>
              <div className="flex items-center justify-around md:justify-evenly">
                {/* <Weather /?\> */}
                <div className="flex items-center justify-center space-x-3 p-3 md:w-1/3 md:flex-col">
                  <Image
                    src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
                    width={75}
                    height={75}
                    alt="weather icon"
                  />
                  <p className="text-2xl font-bold">{temperature}˚C</p>
                </div>
                <div className="flex items-center justify-center space-x-3 p-3 md:w-1/3 md:flex-col">
                  <p className="p-2 text-center md:text-xs">US|AQI</p>
                  <p className="text-center text-2xl font-bold">{aqi}</p>
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
        <div className="max-h-promotionsHeight overflow-auto">
          <div className=" md:grid md:grid-cols-1">
            {images.map((el, i) => (
              <div className="contain py-2" key={i}>
                <Image
                  src={el}
                  width={600}
                  height={300}
                  alt="VPBank Image"
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
