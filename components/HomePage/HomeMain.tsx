import { NextPage } from "next";
import dynamic from "next/dynamic";
import HeroSlideshow from "../UI/HeroSlideshow";
import NewsCard from "../UI/NewsCard";
import Prize from "./Prize";
import Promotion from "./Promotion";
import RatesTable from "./RatesTable";
import TipsStories from "./TipsAndStories";
import image1 from "/Users/jonathanvandenberg/2022/VPBank/public/vpBankHeroImages/vpHero1.jpeg";
import image2 from "/Users/jonathanvandenberg/2022/VPBank/public/vpBankHeroImages/vpHero2.jpeg";
import image3 from "/Users/jonathanvandenberg/2022/VPBank/public/vpBankHeroImages/vpHero3.jpeg";
import image4 from "/Users/jonathanvandenberg/2022/VPBank/public/vpBankHeroImages/vpHero4.jpeg";
import image5 from "/Users/jonathanvandenberg/2022/VPBank/public/vpBankHeroImages/vpHero5.jpeg";

const IconSlider = dynamic(
  () => import("./IconSlider"),
  { ssr: false } // <-- not including this component on server-side
);

const IWantTo = dynamic(
  () => import("./IWantTo"),
  { ssr: false } // <-- not including this component on server-side
);

export const images = [image1, image2, image3, image4, image5];

const HomeMain: NextPage = () => {
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

      <div className="z-50 -mt-12 ">
        <IWantTo />
      </div>

      <div className="mx-auto md:mt-4 lg:mt-6 lg:pb-0 xl:container">
        <IconSlider />
      </div>

      <div className="bg-body">
        <div className="pb-8 md:px-28 xl:container xl:mx-auto">
          <Promotion />
        </div>
      </div>

      <div className="my-8 space-y-8 md:mx-auto md:px-28 xl:container xl:mx-auto">
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
