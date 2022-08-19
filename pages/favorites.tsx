import FavoritePromotions from "../components/FavoritesPage/FavoritePromotions";
import FavoriteServicesCards from "../components/FavoritesPage/FavoriteServicesCards";
import FavoriteMonthlyDeals from "../components/FavoritesPage/FavoriteMonthlyDeals";
import Head from "next/head";

const FavoritesPage = () => {
  return (
    <main>
      <Head>
        <title>Favorites</title>
        <meta
          name="description"
          content="Visit your favorited items from VPBank"
        />
      </Head>
      <FavoritePromotions />
      <FavoriteServicesCards />
      <FavoriteMonthlyDeals />
    </main>
  );
};

export default FavoritesPage;
