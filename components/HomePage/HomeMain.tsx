import { NextPage } from "next";
import dynamic from "next/dynamic";
import image1 from "../../public/ad2.png";
import image2 from "../../public/ad3.png";
import image3 from "../../public/ad4.png";
import CardSlider from "../UI/CardSlider";
import HeroSlideshow from "../UI/HeroSlideshow";
import NewsCard from "../UI/NewsCard";
import Prize from "./Prize";
import Promotion from "./Promotion";
import RatesTable from "./RatesTable";
import TipsStories from "./TipsAndStories";

const IconSlider = dynamic(
  () => import("./IconSlider"),
  { ssr: false } // <-- not including this component on server-side
);

const IWantTo = dynamic(
  () => import("./IWantTo"),
  { ssr: false } // <-- not including this component on server-side
);

export const images = [image1, image2, image3];

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

      <div className="z-50 -mt-12">
        <IWantTo />
      </div>

      <div className="md:mt-4 lg:mt-6 lg:pb-0">
        <IconSlider />
      </div>

      <div className="bg-body pb-8">
        <Promotion />
      </div>

      <div className="my-8 space-y-8 md:container md:mx-auto">
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

      <div className="flex h-[600px] items-center justify-center">spacer</div>
    </>
  );
};

export default HomeMain;
