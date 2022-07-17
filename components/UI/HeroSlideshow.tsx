import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  imageData: StaticImageData[];
}

const HeroSlideshow: NextPage<Props> = ({ imageData }) => {
  return (
    <div className="-z-50">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3500}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        swipeable={false}
        axis="horizontal"
        width="100%"
      >
        {imageData.map((el) => (
          <div key={el.toString()}>
            <Image
              src={el}
              alt="VPBank Hero Image"
              width={900}
              height={300}
              layout="responsive"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlideshow;
