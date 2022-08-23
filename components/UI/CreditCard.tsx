import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight, FaHeart, FaPlus } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import { useRouter } from "next/router";
import { ServicesCard } from "../../types";

interface IProps {
  data: ServicesCard | null | undefined;
}

const CreditCard: React.FC<IProps> = ({ data }) => {
  const [localStorageChange, setLocalStorageChange] = useState(false);
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  const router = useRouter();

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

  return (
    <div className="items-left relative flex h-full flex-col justify-start bg-body">
      <div className="absolute left-[10px] top-[10px] z-10 rounded bg-white p-2 text-sm">
        <p>{data?.cardType}</p>
      </div>
      <div>
        <Image
          src={data!.image}
          layout="responsive"
          width={800}
          height={507}
          alt="vpBank - Card"
        />
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="flex w-full items-center justify-between px-5 pt-5">
          <div className="flex flex-col items-start justify-center">
            <div className=" text-iwanttoColor">Select Card Type</div>
            <div className="text-md py-3 font-bold">{data?.title}</div>
          </div>
          <div className="block self-start">
            <div
              onClick={() => {
                handleLocalStorage(`${data!.type} - ${data!.id}`);
              }}
              className="cursor-pointer rounded-full bg-white p-2"
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
          </div>
        </div>
      </div>
      <div className="block h-full self-start p-5 pt-0 font-semibold text-gray-500">
        <p>{data?.content}</p>
      </div>
      <div className="flex flex-col justify-end">
        <div
          className="mx-10 flex cursor-pointer items-center justify-center space-x-3 rounded-full border-[1px] border-iwanttoColor p-3 text-iwanttoColor"
          onClick={() => router.push("/compare")}
        >
          <p>Compare Cards</p>
        </div>

        <div className="flex items-center justify-between p-4">
          <div className="flex items-center justify-center space-x-3 p-3 text-iwanttoColor">
            <p>More Information</p>
            <div>
              <FaPlus />
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 p-3 text-iwanttoColor">
            <p>Apply Now</p>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
