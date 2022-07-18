import HeroSlideshow from "../UI/HeroSlideshow";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HappyIcon from "../../public/happyIcon.svg";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// import { images } from "../HomePage/HomeMain";
import RetailDropdown from "../Global/Dropdowns/RetailDropdown";
import { IconButton } from "@mui/material";

const images = [
  "http://picsum.photos/id/23/300/200",
  "http://picsum.photos/id/112/300/200",
  "http://picsum.photos/id/117/300/200",
];

const Promotion = () => {
  return (
    <section className="md:container-sm mx-auto flex h-screen flex-col space-y-3 p-5  md:flex-row">
      <div className="section-1-container w-full   md:w-2/3">
        {/* IMAGE SLIDER */}
        <div className="image-slider-container pb-3">
          <HeroSlideshow imageData={images} width={600} height={400} />
        </div>

        <div className="api-contact-container flex flex-col divide-y bg-white">
          {/* BOTTOM 3 BLOCKS */}
          <div className="h-1/3 p-4">
            <div className="">
              <p className="text-md font-bold ">Hanoi</p>
              <p className="text-sm ">Monday, July 18, 2022</p>
            </div>

            <div className="flex space-x-16 p-4">
              <div className="flex items-center space-x-3 space-y-3 ">
                <WbSunnyIcon />
                <p className="text-center align-middle">25C</p>
              </div>
              <div className="flex  flex-wrap items-center space-x-3 ">
                <Image src={HappyIcon} width={50} height={50} alt="icons" />
                <p>50 | US AQI</p>
              </div>
            </div>
          </div>

          {/* CUSTOMER FEEBACK */}
          <div className="flex h-1/3 flex-col space-y-3 p-4">
            <p className="">Share your experience</p>
            <p className="">
              VPBank always listens to and respects all opinions shared from
              customers to have the opportunity and motivation to bring better
              and better transaction experiences.
            </p>

            <div className="align-center flex">
              <IconButton className="space-x-3">
                Send Feedback <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>

          {/* PROMOTIONS */}
          <div className="h-1/3 p-4">
            <p>Customer care hotline</p>
            <p className="text-3xl font-semibold text-iwanttoColor">
              1900 54 54 15
            </p>
          </div>
        </div>
      </div>

      {/* SIDE-SLIDER */}
      <div className="section-2-container flex w-1/3 bg-sky-800">
        <div className="promotions-slider-container grow bg-cyan-500">
          vertical slider
        </div>
      </div>
    </section>
  );
};

export default Promotion;
