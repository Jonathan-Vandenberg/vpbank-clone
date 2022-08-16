import { PlusOneOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import { MonthlyDeal } from "../../types";

interface IProps {
  deal: MonthlyDeal | null | undefined;
}

const MonthlyDealCard: React.FC<IProps> = ({ deal }) => {
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);
  const [localStorageChange, setLocalStorageChange] = useState(false);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoriteDeals: string[] = [];
    allKeys.map((key) => {
      if (key.includes("MONTHLYDEAL")) {
        favoriteDeals.push(key);
      }
    });
    setLocalStorageKeys(favoriteDeals);
  }, [localStorageChange]);

  const handleLocalStorage = (data: string) => {
    const favorited = getFromStorage(data);
    if (favorited) {
      localStorage.removeItem(data);
    } else setToStorage(data, data);

    setLocalStorageChange(!localStorageChange);
  };

  let dateToday = new Date();
  let lastDayOfMonth = new Date(
    dateToday.getFullYear(),
    dateToday.getMonth() + 1,
    0
  ).getDate();
  let daysUntilEndOfMonth = lastDayOfMonth - dateToday.getDate();
  console.log(daysUntilEndOfMonth);

  return (
    <div className="shadow">
      <div className="flex items-center justify-center space-x-1 bg-body p-3 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [1.1, 0, 1.1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="mr-1"
        >
          <div className="flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </motion.div>
        <p className="">Expires in</p>
        <p className="text-iwanttoColor">{daysUntilEndOfMonth}</p>
        <p className="">days</p>
      </div>
      <div className="cover relative">
        <div>
          <Image
            src={deal!.image}
            alt="VPBank Hero Image"
            width={650}
            height={300}
            layout="responsive"
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 flex h-full w-1/2 flex-col items-start justify-between p-3">
          {deal?.darkImage ? (
            <p className="text-white">{deal?.title}</p>
          ) : (
            <p>{deal?.title}</p>
          )}
          {deal?.darkImage ? (
            <p className="text-2xl font-bold text-white md:text-xl">
              {deal?.content}
            </p>
          ) : (
            <p className="text-2xl font-bold md:text-xl">{deal?.content}</p>
          )}
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
              <p className="t text-white">{deal?.customer}</p>
            ) : (
              <p>{deal?.customer}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-1 bg-body p-4 ">
        <div className="flex items-center justify-center space-x-2 rounded-full border-[1px] border-iwanttoColor p-3">
          <p className="text-iwanttoColor">More Information</p>
          <FaPlus className="text-iwanttoColor" />
        </div>
      </div>
    </div>
  );
};

export default MonthlyDealCard;
