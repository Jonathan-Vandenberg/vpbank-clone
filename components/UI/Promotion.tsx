import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import { FaHeart, FaSun } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import {
  PromotionsQuery,
  useMonthlyDealsQuery,
  usePromotionsQuery,
} from "../../types";
import MonthlyDealSlider from "./MonthlyDealSlider";
import PromotionCard from "./PromotionCard";
import SectionHeader from "./SectionHeader";

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

const Promotion: NextPage<{ temperature: string }> = ({ temperature }) => {
  const [localStorageChange, setLocalStorageChange] = useState(false);
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  const { data: monlthDealsData } = useMonthlyDealsQuery();
  const { data: promotionsData } = usePromotionsQuery();

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
    <section className="mx-auto pb-10">
      <SectionHeader title="Promotions" />
      <div className="md:h-promotionHeight grid-cols-3 space-y-8 px-4 md:flex-col md:px-0 lg:grid lg:space-y-0">
        <div className="md-space-x-4 space-y-8 md:col-span-2 md:flex-col  lg:space-y-3">
          <MonthlyDealSlider data={monlthDealsData} />
          <div className="flex flex-col divide-y-[1px] bg-white md:flex-row md:divide-y-0 md:divide-x-[1px]">
            <Weather temp={temperature} />
            <ShareYourStory />
            <ContactUs />
          </div>
        </div>
        <div className="overflow-auto lg:ml-3">
          <div className="hidden lg:block">
            <ScrollableAds
              handleLocalStorage={handleLocalStorage}
              localStorageKeys={localStorageKeys}
              promotionsData={promotionsData}
            />
          </div>
          <div className="block lg:hidden">
            <StaticAds promotionsData={promotionsData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:w-1/3">
      <p className="whitespace-nowrap pb-2 text-lg font-semibold">
        Contact us hotline
      </p>
      <Link href={"/"}>
        <p className="text-3xl text-iwanttoColor lg:text-2xl">0872348273</p>
      </Link>
    </div>
  );
};

const ShareYourStory: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between p-4 text-lg md:w-1/3">
      <p className="pb-2 font-semibold">Share your story</p>
      <div className="flex items-center  justify-center">
        <p className="font-lighter lg:text-md px-5 py-3 text-slate-600 md:px-0 md:text-sm xl:text-xl">
          VPBank luôn lắng nghe và trân trọng mọi ý kiến chia sẻ từ Khách hàng
          để có cơ hội và động lực mang tới những trải nghiệm giao dịch ngày một
          tuyệt vời hơn.
        </p>
      </div>
      <IconButton className="gap-1 whitespace-nowrap text-xl text-iwanttoColor">
        Share Now <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};

const Weather: React.FC<{ temp: string }> = ({ temp }) => {
  return (
    <div className="p-2 md:w-1/3">
      <div className="w-full p-4">
        <p className="text-xl font-semibold">Ho Chi Minh City</p>
        <p className="text-sm text-slate-600">
          {day}, {month} {d.getDate()} {d.getFullYear()}
        </p>
      </div>
      <div className="mt-2 flex items-center justify-evenly">
        <div className="flex items-center justify-center space-x-3 p-3 md:w-1/3 md:flex-col">
          <FaSun className="text-5xl text-yellow-300" />
          <p className="p-1 text-center text-2xl font-bold">{temp}˚C</p>
        </div>
        <div className="flex items-center justify-center space-x-3 p-3 md:w-1/3 md:flex-col md:items-center md:justify-center md:space-x-0">
          <p className="border-r-[1px] p-5 text-xl font-thin md:border-r-0 md:border-b-[1px] md:p-[6px] md:text-2xl">
            AQI
          </p>
          <p className="p-1 text-center text-2xl font-bold">50</p>
        </div>
      </div>
    </div>
  );
};

interface AdsProps {
  handleLocalStorage: (data: string) => void;
  localStorageKeys: string[] | undefined;
  promotionsData: PromotionsQuery | undefined | null;
}

const ScrollableAds = ({
  handleLocalStorage,
  localStorageKeys,
  promotionsData,
}: AdsProps) => {
  return (
    <div className="flex flex-col space-y-3 pr-2 md:h-96">
      {promotionsData?.promotions?.map((el, i) => (
        <div className="contain relative" key={i}>
          <Image
            src={el!.image}
            width={600}
            height={300}
            alt="VPBank Image"
            layout="responsive"
            priority
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full">
            <div className="flex h-full flex-col items-start justify-between p-2">
              {el?.darkImage ? (
                <p className="text-sm font-semibold text-white">{el!.title}</p>
              ) : (
                <p className="text-sm font-semibold">{el!.title}</p>
              )}
              {el?.darkImage ? (
                <h2 className="w-1/2 font-semibold text-white xl:text-lg">
                  {el!.content}
                </h2>
              ) : (
                <h2 className="w-1/2 font-semibold xl:text-lg">
                  {el!.content}
                </h2>
              )}
              <div className="flex items-end justify-start space-x-3">
                <div
                  onClick={() => {
                    handleLocalStorage(`${el!.type} - ${el!.id}`);
                  }}
                  className="cursor-pointer rounded-full bg-white p-2 "
                >
                  <FaHeart
                    size={20}
                    color={
                      localStorageKeys?.includes(`${el!.type} - ${el!.id}`)
                        ? "red"
                        : "green"
                    }
                  />
                </div>
                {el?.darkImage ? (
                  <p className="text-sm text-white">{el!.customer}</p>
                ) : (
                  <p className="text-sm">{el!.customer}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const StaticAds: React.FC<{
  promotionsData: PromotionsQuery | undefined | null;
}> = ({ promotionsData }) => {
  return (
    <div className="space-y-5 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
      {promotionsData?.promotions
        ?.map((el, i) => (
          <div key={i}>
            <PromotionCard data={el} />
          </div>
        ))
        .slice(0, 2)}
    </div>
  );
};
