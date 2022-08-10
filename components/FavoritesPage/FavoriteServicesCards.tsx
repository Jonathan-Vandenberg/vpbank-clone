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
        favoriteType="Services and Card favorite"
        findMoreLink="/cardservices"
      />
      <div className="lg:container-lg p-4 md:px-28 lg:mx-auto">
        {localStorageKeys.length > 0 ? (
          <div className="grid-favorites">
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
