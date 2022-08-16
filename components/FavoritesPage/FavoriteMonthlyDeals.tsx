import { useEffect, useState } from "react";
import { useMonthlyDealsQuery } from "../../types";
import MonthlyDealCard from "../UI/MonthlyDealCard";
import PromotionCard from "../UI/PromotionCard";
import FavoritesHeader from "./FavoritesHeader";

const FavoriteMonthlyDeals = () => {
  const [localStorageKeys, setLocalStorageKeys] = useState([""]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    let favoriteCards: string[] = [];
    allKeys.map((key) => {
      if (key.includes("MONTHLYDEAL")) {
        favoriteCards.push(key);
      }
    });
    setLocalStorageKeys(favoriteCards);
  }, []);

  const { data, loading, error } = useMonthlyDealsQuery();

  return (
    <>
      <FavoritesHeader
        localStorageKeys={localStorageKeys}
        favoriteType="Monthly Deal"
        findMoreLink="/"
      />
      <div className="md:px-12 lg:container lg:mx-auto lg:px-0">
        {localStorageKeys.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 p-6 md:grid-cols-2 md:p-0 xl:grid-cols-3">
            {data?.monthlyDeals?.map((deal) =>
              localStorageKeys.includes(`${deal!.type} - ${deal!.id}`) ? (
                <MonthlyDealCard deal={deal} />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FavoriteMonthlyDeals;
