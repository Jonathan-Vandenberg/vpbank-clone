import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../../lib/localStorageHelper";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks/hooks";
import { addCard, removeCard } from "../../../slices/cardIdSlice";
import { ServicesCard } from "../../../types";

const ChosenCard = ({
  singleCardData,
}: {
  singleCardData: ServicesCard | null | undefined;
}) => {
  const [localStorageChange, setLocalStorageChange] = useState(false);
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  const dispatch = useAppDispatch();
  const { cardId } = useAppSelector((state) => state.cardId);

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
    <div
      key={singleCardData?.id}
      className="mt-2 flex h-full flex-col items-center justify-between shadow-lg"
    >
      <div className="relative">
        <div className="relative">
          <Image
            src={singleCardData!.image}
            height={270}
            width={430}
            alt="Credit Card"
          />
          <div className="absolute top-0 left-0 m-3 rounded-md bg-white p-1 text-gray-600">
            {singleCardData?.cardType}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 block self-start p-3">
          <div
            onClick={() => {
              handleLocalStorage(
                `${singleCardData?.type} - ${singleCardData?.id}`
              );
            }}
            className="cursor-pointer rounded-full bg-white p-2"
          >
            <FaHeart
              size={20}
              color={
                localStorageKeys?.includes(
                  `${singleCardData?.type} - ${singleCardData?.id}`
                )
                  ? "red"
                  : "green"
              }
            />
          </div>
        </div>
      </div>
      <div className="mx-3 p-3 text-center font-semibold">
        <div>{singleCardData?.title}</div>
      </div>
      <div className="mx-3 hidden p-3 text-left text-gray-500 md:block">
        <div>{singleCardData?.content}</div>
      </div>
      <div className="flex w-full flex-col items-center justify-end">
        {cardId?.includes(singleCardData!.id) ? (
          <div className="flex items-center justify-center">
            <button
              onClick={() => {
                dispatch(removeCard(singleCardData!.id));
              }}
              className="flex cursor-pointer flex-col items-center justify-center px-5 pt-2"
            >
              <div className="flex items-center justify-center space-x-2 rounded-full border-[1px] border-red-200 p-3 text-sm text-red-400">
                <p>Remove</p>
                <FaMinus />
              </div>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              onClick={() => dispatch(addCard(singleCardData!.id))}
              className="flex cursor-pointer flex-col items-center justify-center px-5 pt-2"
              disabled={cardId.length > 2}
            >
              <div className={styles}>
                <p>COMPARE</p>
                <FaPlus />
              </div>
            </button>
          </div>
        )}
        <div className="flex w-full items-center justify-between p-4">
          <div className="flex cursor-pointer items-center justify-center space-x-2 p-1 text-iwanttoColor">
            <p>Apply Now</p>
            <div>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex cursor-pointer items-center justify-center space-x-2 p-1 text-iwanttoColor">
            <p>More Info</p>
            <div>
              <FaPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenCard;
