import Image from "next/image";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { getFromStorage, setToStorage } from "../../lib/localStorageHelper";
import { usePromotionsQuery } from "../../types";
import FavoritesHeader from "./FavoritesHeader";
import PromotionCard from "../../components/UI/PromotionCard";

const FavoritePromotions = () => {
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoritePromotions: string[] = [];
    allKeys.map((key) => {
      if (key.includes("PROMOTION")) {
        favoritePromotions.push(key);
      }
    });
    setLocalStorageKeys(favoritePromotions);
  }, []);

  const handleLocalStorage = (data: string) => {
    const favorited = getFromStorage(data);
    if (favorited) {
      localStorage.removeItem(data);
    } else setToStorage(data, data);
  };

  const { data, loading, error } = usePromotionsQuery();

  console.log(data);

  return (
    <>
      <FavoritesHeader
        localStorageKeys={localStorageKeys}
        favoriteType={"Promotion Favorite"}
        findMoreLink="/"
      />
      <div>
        {localStorageKeys.length > 0 ? (
          <div className="grid-favorites p-4 md:px-28 lg:container lg:mx-auto">
            {data?.promotions?.map((promotion) =>
              localStorageKeys.includes(
                `${promotion!.type} - ${promotion!.id}`
              ) ? (
                <PromotionCard
                  title={promotion!.title}
                  content={promotion!.content}
                  image={promotion!.image}
                  data={promotion}
                  customer={promotion!.customer}
                />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FavoritePromotions;
