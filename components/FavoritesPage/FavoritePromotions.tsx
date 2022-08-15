import { useEffect, useState } from "react";
import { usePromotionsQuery } from "../../types";
import PromotionCard from "../UI/PromotionCard";
import FavoritesHeader from "./FavoritesHeader";

const FavoritePromotionCards = () => {
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoriteCards: string[] = [];
    allKeys.map((key) => {
      if (key.includes("PROMOTION")) {
        favoriteCards.push(key);
      }
    });
    setLocalStorageKeys(favoriteCards);
  }, []);

  const { data, loading, error } = usePromotionsQuery();

  return (
    <div className="">
      <FavoritesHeader
        localStorageKeys={localStorageKeys}
        favoriteType="Promotion favorite"
        findMoreLink="/"
      />
      <div className="lg:container-lg p-4 md:px-12 lg:mx-auto">
        {localStorageKeys.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 p-6 md:grid-cols-2 md:p-0 xl:grid-cols-3">
            {data?.promotions?.map((promotion) =>
              localStorageKeys.includes(
                `${promotion!.type} - ${promotion!.id}`
              ) ? (
                <PromotionCard data={promotion} />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FavoritePromotionCards;
