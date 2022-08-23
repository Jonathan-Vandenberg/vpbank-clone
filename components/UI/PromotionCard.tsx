import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import { MonthlyDeal, Promotion } from "../../types";

interface IProps {
  data: MonthlyDeal | Promotion | undefined | null;
}

const PromotionCard: React.FC<IProps> = ({ data }) => {
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);
  const [localStorageChange, setLocalStorageChange] = useState(false);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoritePromotions: string[] = [];
    allKeys.map((key) => {
      if (key.includes("PROMOTION")) {
        favoritePromotions.push(key);
      }
    });
    setLocalStorageKeys(favoritePromotions);
  }, [localStorageChange]);

  const handleLocalStorage = (data: string) => {
    const favorited = getFromStorage(data);
    if (favorited) {
      localStorage.removeItem(data);
    } else setToStorage(data, data);

    setLocalStorageChange(!localStorageChange);
  };

  return (
    <div className="contain relative">
      <Image
        src={data!.image}
        width={600}
        height={300}
        alt="VPBank Image"
        layout="responsive"
        className="object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full">
        <div className="flex h-full flex-col items-start justify-between p-3">
          {data?.darkImage ? (
            <p className="text-white md:text-xl">{data!.title}</p>
          ) : (
            <p className="md:text-xl">{data!.title}</p>
          )}
          {data?.darkImage ? (
            <h2 className="w-3/5 text-2xl font-bold text-white md:text-lg lg:text-2xl xl:text-2xl">
              {data!.content}
            </h2>
          ) : (
            <h2 className="w-3/5  text-2xl font-bold md:text-lg lg:text-2xl xl:text-2xl">
              {data!.content}
            </h2>
          )}
          <div className="flex items-end justify-start space-x-3">
            <div
              onClick={() => {
                handleLocalStorage(`${data!.type} - ${data!.id}`);
              }}
              className="cursor-pointer rounded-full bg-white p-2 "
            >
              <FaHeart
                size={20}
                color={
                  localStorageKeys?.includes(`${data!.type} - ${data!.id}`)
                    ? "red"
                    : "green"
                }
              />
            </div>
            {data?.darkImage ? (
              <p className="text-white lg:text-lg ">{data!.customer}</p>
            ) : (
              <p className="lg:text-lg">{data!.customer}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
