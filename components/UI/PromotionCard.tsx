import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";

interface IProps {
  title: string;
  content: string;
  image: string;
  data: any;
  customer: string;
}

const PromotionCard = ({ title, content, data, customer, image }: IProps) => {
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
        src={image}
        width={600}
        height={300}
        alt="VPBank Image"
        layout="responsive"
        priority
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full">
        <div className="flex h-full flex-col items-start justify-between p-2">
          <p className="text-sm font-semibold">{title}</p>
          <h2 className="w-3/5 text-xs xl:text-lg">{content}</h2>
          <div className="m-3 flex items-end justify-start space-x-3">
            <div
              onClick={() => {
                handleLocalStorage(`${data.type} - ${data.id}`);
              }}
              className="rounded-full bg-white p-2"
            >
              <FaHeart
                className="cursor-pointer"
                size={20}
                color={
                  localStorageKeys?.includes(`${data.type} - ${data.id}`)
                    ? "red"
                    : "green"
                }
              />
            </div>
            <p className="text-sm font-semibold">{customer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
