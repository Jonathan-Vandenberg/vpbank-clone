import IWantTo from "./IWantTo";
import image1 from "../../public/ad2.png";
import image2 from "../../public/ad3.png";
import image3 from "../../public/ad4.png";
import IndividualCustomers from "./IndividualCustomer";
import HeroSlideshow from "../UI/HeroSlideshow";
import { NextPage } from "next/types";
import Promotion from "./Promotion";
import dynamic from "next/dynamic";
import Link from "next/link";

const IconSlider = dynamic(
  () => import("./IconSlider"),
  { ssr: false } // <-- not including this component on server-side
);

interface Props {
  temperature: number;
  weatherIcon: string;
  aqi: number;
}

export const images = [image1, image2, image3];

const HomeMain: NextPage<Props> = ({ temperature, weatherIcon, aqi }) => {
  return (
    <>
      <HeroSlideshow
        imageData={images}
        width={800}
        height={300}
        scaleOnHover={false}
      />
      <div className="-mt-12">
        <IWantTo />
      </div>

      <div className="lg:pb-0">
        <p className="flex-col bg-gradient-to-r from-startColor to-endColor bg-clip-text pl-4 pt-4 text-3xl font-bold text-transparent md:container md:mx-auto">
          Individual Customers
        </p>
        <IconSlider />
        <div className=" bg-body">
          <Promotion
            temperature={temperature}
            weatherIcon={weatherIcon}
            aqi={aqi}
          />
        </div>
      </div>
    </>
  );
};

export default HomeMain;
