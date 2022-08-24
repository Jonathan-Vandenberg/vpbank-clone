import HeroSlideshow from "../UI/HeroSlideshow";
import NewsCard from "../UI/NewsCard";
import IconSlider from "../UI/IconSlider";
import IWantTo from "./IWantTo";
import Prize from "./Prize";
import Promotion from "../UI/Promotion";
import RatesTable from "./RatesTable";
import TipsStories from "./TipsAndStories";
import image1 from "../../public/hero/vpHero1.jpeg";
import image2 from "../../public/hero/vpHero2.jpeg";
import image3 from "../../public/hero/vpHero3.jpeg";
import image4 from "../../public/hero/vpHero4.jpeg";
import image5 from "../../public/hero/vpHero5.jpeg";

export const images = [image1, image2, image3, image4, image5];

const HomeMain: React.FC<{ temp: string; metalPrices: string[] }> = ({
  temp,
  metalPrices,
}) => {
  return (
    <>
      <HeroSlideshow
        imageData={images}
        width={800}
        height={300}
        scaleOnHover={false}
      />

      <div className="z-50 -mt-3 md:-mt-12">
        <IWantTo />
      </div>

      <div className="my-10 lg:my-14 xl:my-20">
        <IconSlider />
      </div>

      <div className="bg-body">
        <div className="mb-8 md:px-12 xl:container xl:mx-auto">
          <Promotion temperature={temp} metalPrices={metalPrices} />
        </div>
      </div>

      <div className="mx-4 my-8 space-y-8 md:mx-auto md:px-12 xl:container xl:mx-auto">
        <div className="space-y-8 lg:grid lg:grid-cols-5 lg:space-x-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <RatesTable />
          </div>
          <div className="lg:col-span-3">
            <TipsStories />
          </div>
        </div>

        <div className="space-y-8 overflow-hidden lg:grid lg:max-h-[380px] lg:grid-cols-5 lg:space-x-8 lg:space-y-0">
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
