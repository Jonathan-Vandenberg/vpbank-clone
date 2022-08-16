import { useEffect, useState } from "react";
import { useServicesCardsQuery } from "../../types";
import CreditCard from "../UI/CreditCard";
import FavoritesHeader from "./FavoritesHeader";

const FavoriteServicesCards = () => {
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoriteCards: string[] = [];
    allKeys.map((key) => {
      if (key.includes("SERVICESCARD")) {
        favoriteCards.push(key);
      }
    });
    setLocalStorageKeys(favoriteCards);
  }, []);

  const { data, loading, error } = useServicesCardsQuery();

  return (
    <>
      <FavoritesHeader
        localStorageKeys={localStorageKeys}
        favoriteType="Services and Card Favorite"
        findMoreLink="/cardservices"
      />
      <div className="md:px-12 lg:container lg:mx-auto lg:px-0">
        {localStorageKeys.length > 0 ? (
          <div className="grid-favorites p-6 md:p-0">
            {data?.servicesCards?.map((card) =>
              localStorageKeys.includes(`${card!.type} - ${card!.id}`) ? (
                <CreditCard data={card} />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FavoriteServicesCards;
