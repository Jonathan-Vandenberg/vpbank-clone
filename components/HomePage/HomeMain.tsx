import dynamic from "next/dynamic";
import HeroSlideshow from "../UI/HeroSlideshow";
import NewsCard from "../UI/NewsCard";
import IconSlider from "./IconSlider";
import IWantTo from "./IWantTo";
import Prize from "./Prize";
import Promotion from "./Promotion";
import RatesTable from "./RatesTable";
import TipsStories from "./TipsAndStories";
import image1 from "../public/vpBankHeroImages/vpHero1.jpeg";
import image2 from "../public/vpBankHeroImages/vpHero2.jpeg";
import image3 from "../public/vpBankHeroImages/vpHero3.jpeg";
import image4 from "../public/vpBankHeroImages/vpHero4.jpeg";
import image5 from "../public/vpBankHeroImages/vpHero5.jpeg";

import { useAddPromotionMutation } from "../../types";
import { FavoritesEnum } from "../../types";
import { v4 as uuidv4 } from "uuid";

export const images = [image1, image2, image3, image4, image5];

const HomeMain = ({ weather }: any) => {
  const [addPromotion] = useAddPromotionMutation();

  return (
    <>
      <div>
        <HeroSlideshow
          imageData={images}
          width={800}
          height={300}
          scaleOnHover={false}
        />
      </div>

      <div className="z-50 -mt-12">
        <IWantTo />
      </div>

      {/* <button
        onClick={() => {
          addPromotion({
            variables: {
              input: {
                title: "From our sponsors",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quod molestias fugiat assumenda nam. Nam pariatur at esse tempora, facere excepturi maxime, dolorem eaque doloribus ab dolor impedit nihil qui?",
                image: "/vpPromotions/ad1.jpeg",
                darkImage: true,
                type: FavoritesEnum[FavoritesEnum.PROMOTION],
                customer: "individual",
                id: uuidv4(),
              },
            },
          });
        }}
      >
        SEND TO DB
      </button> */}

      <div className="mx-auto md:mt-4 lg:mt-6 lg:pb-0 xl:container">
        <IconSlider />
      </div>

      <div className="bg-body">
        <div className="pb-8 md:px-12 xl:container xl:mx-auto">
          <Promotion />
        </div>
      </div>

      <div className="my-8 space-y-8 md:mx-auto md:px-12 xl:container xl:mx-auto">
        <div className="space-y-8 lg:grid lg:grid-cols-5 lg:space-x-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <RatesTable />
          </div>
          <div className="lg:col-span-3">
            <TipsStories />
          </div>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-5 lg:space-x-8 lg:space-y-0">
          <div className="lg:col-span-3">
            <NewsCard />
          </div>
          <div className="lg:col-span-2">
            <Prize />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
