import Image from "next/image";
import { NextPage } from "next/types";
import { useEffect, useState } from "react";
import { FaArrowRight, FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import { useAppDispatch, useAppSelector } from "../../redux-hooks/hooks";
import { addCard, removeCard } from "../../slices/cardIdSlice";
import { ServicesCard, ServicesCardQuery } from "../../types";

interface IProps {
  singleCardData: ServicesCardQuery | undefined;
  addToCompare: boolean;
}

const CreditCard = ({ singleCardData, addToCompare }: any) => {
  const [deactivateAddButton, setDeactivateAddButton] = useState(false);
  const [localStorageChange, setLocalStorageChange] = useState(false);
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  const dispatch = useAppDispatch();
  const { cardId } = useAppSelector((state) => state.cardId);

  useEffect(() => {
    if (cardId.length > 2) {
      setDeactivateAddButton(true);
    } else setDeactivateAddButton(false);
  }, [cardId.length]);

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

  const buttonStyle = deactivateAddButton
    ? "mx-12 flex w-auto items-center justify-center rounded-full border-[1px] border-gray-300 text-gray-500"
    : "mx-12 flex w-auto items-center justify-center rounded-full border-[1px] border-iwanttoColor  text-iwanttoColor";

  return (
    <div className="items-left relative flex h-full w-full flex-col justify-start bg-body outline-none">
      <div className="absolute left-[10px] top-[10px] z-10 rounded bg-white p-2 text-sm">
        <p>{singleCardData?.cardType}</p>
      </div>
      <div>
        <Image
          src={singleCardData!.image}
          layout="responsive"
          width={450}
          height={270}
          alt="vpBank - Card"
        />
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="flex w-full items-center justify-between px-5 pt-5">
          <div className="flex flex-col items-start justify-center">
            <div className=" text-iwanttoColor">Select Card Type</div>
            <div className="py-3 text-sm font-bold">
              {singleCardData?.title}
            </div>
          </div>
          <div className="block self-start">
            <div
              onClick={() => {
                handleLocalStorage(
                  `${singleCardData!.type} - ${singleCardData!.id}`
                );
              }}
              className="cursor-pointer rounded-full bg-white p-2"
            >
              <FaHeart
                size={20}
                color={
                  localStorageKeys?.includes(
                    `${singleCardData!.type} - ${singleCardData!.id}`
                  )
                    ? "red"
                    : "green"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        {addToCompare ? (
          <div className={buttonStyle}>
            <button
              disabled={deactivateAddButton}
              onClick={() => dispatch(addCard(singleCardData!.id))}
              className="flex items-center justify-center space-x-3 p-3"
            >
              <p className="whitespace-nowrap text-sm">Add</p>
              <FaPlus />
            </button>
          </div>
        ) : (
          <div className="mx-12 block w-auto rounded-full border-[1px] border-iwanttoColor">
            <div
              onClick={() => dispatch(removeCard(singleCardData!.id))}
              className="flex items-center justify-center space-x-3 p-3 text-iwanttoColor"
            >
              <p className="whitespace-nowrap text-sm">Remove</p>
              <FaMinus />
            </div>
          </div>
        )}
        <div className="flex items-center justify-between space-x-5 p-3">
          <div className="flex items-center justify-center space-x-2 p-1 text-iwanttoColor">
            <p>Apply Now</p>
            <div>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 p-1 text-iwanttoColor">
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

export default CreditCard;
