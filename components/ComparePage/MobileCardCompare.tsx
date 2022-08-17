import { Menu } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import placeholder from "../../public/placeholders/cardPlaceholder.png";
import { useAppSelector, useAppDispatch } from "../../redux-hooks/hooks";
import { removeCard } from "../../slices/cardIdSlice";
import { ServicesCard } from "../../types";

const MobileCardCompare = ({
  data,
}: {
  data: ServicesCard | undefined | null;
}) => {
  const [localStorageChange, setLocalStorageChange] = useState(false);
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);
  const [showDropdown, setShowDropdown] = useState(false);

  const controls = useAnimation();

  if (!showDropdown) {
    controls.start({ y: -145 });
  } else controls.start({ y: 0 });

  const { cardId } = useAppSelector((state) => state.cardId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoriteCards: string[] = [];
    allKeys.map((key) => {
      if (key.includes("SERVICESCARD")) {
        favoriteCards.push(key);
      }
    });
    setLocalStorageKeys(favoriteCards);
  }, [localStorageChange]);

  const handleLocalStorage = (storage: string) => {
    const favorited = getFromStorage(storage);
    if (favorited) {
      localStorage.removeItem(storage);
    } else setToStorage(storage, storage);

    setLocalStorageChange(!localStorageChange);
  };

  const styles =
    cardId.length > 2
      ? "flex items-center justify-center space-x-2 rounded-full border-[1px] border-gray-300 p-3 text-sm text-gray-300"
      : "flex items-center justify-center space-x-2 rounded-full border-[1px] border-iwanttoColor p-3 text-sm font-semibold text-iwanttoColor";

  return (
    <div className="container mx-auto mt-4">
      <motion.div className="">
        {data?.pureCardImage ? (
          <>
            <div className="flex h-12 items-end justify-center py-2">
              <p className="text-lg font-semibold">{data?.title}</p>
            </div>
            <Image
              src={data!.pureCardImage}
              width={480}
              height={300}
              alt="credit card"
              layout="responsive"
              className="z-10 rounded-xl"
            />
          </>
        ) : (
          <Image
            src={placeholder}
            width={480}
            height={300}
            alt="credit card"
            layout="responsive"
          />
        )}
      </motion.div>
      <motion.div
        animate={controls}
        initial={{ y: 0 }}
        className="flex h-52 w-full items-end justify-center rounded-b-xl shadow-lg"
      >
        <div className="flex h-full w-full flex-col items-center justify-between p-3">
          <div className="flex flex-col items-center justify-center space-y-5">
            <div className="max-h-[132px] overflow-auto p-1">
              {data?.content}
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div
              onClick={() => {
                handleLocalStorage(`${data?.type} - ${data?.id}`);
              }}
              className="cursor-pointer rounded-full bg-white py-2"
            >
              <FaHeart
                size={20}
                color={
                  localStorageKeys?.includes(`${data?.type} - ${data?.id}`)
                    ? "red"
                    : "green"
                }
              />
            </div>
            <p className="rounded-full border-[1px] border-iwanttoColor p-2 text-center text-sm text-iwanttoColor">
              Apply
            </p>
            <div onClick={() => dispatch(removeCard(data!.id))}>
              <p className="cursor-pointer rounded-full border-[1px] border-red-200 p-2 text-sm text-red-400">
                Remove
              </p>
            </div>
            <div onClick={() => setShowDropdown(!showDropdown)}>
              <Menu />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileCardCompare;
