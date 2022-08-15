import FavoritePromotions from "../components/FavoritesPage/FavoritePromotions";
import FavoriteServicesCards from "../components/FavoritesPage/FavoriteServicesCards";
import FavoriteMonthlyDeals from "../components/FavoritesPage/FavoriteMonthlyDeals";

const FavoritesPage = () => {
  return (
    <>
      <FavoritePromotions />
      <FavoriteServicesCards />
      <FavoriteMonthlyDeals />
    </>
  );
};

export default FavoritesPage;
