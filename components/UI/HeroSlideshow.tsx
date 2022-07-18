import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

interface Props {
  /**Array of image links or imports */
  imageData: StaticImageData[] | string[];
  /**Width of the image */
  width: number;
  /**Height of the image */
  height: number;
}

const HeroSlideshow: NextPage<Props> = ({ imageData, width, height }) => {
  const renderSlides = () =>
    imageData.map((img, i) => (
      <div key={i}>
        <div key={img.toString()}>
          <Image
            src={img}
            alt="VPBank Hero Image"
            width={width}
            height={height}
            layout="responsive"
            className="object-cover"
          />
        </div>
      </div>
    ));
  return (
    <Slider
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={3000}
      arrows={false}
      dots={true}
      dotsClass="slick-dots"
      className="mx-auto"
    >
      {renderSlides()}
    </Slider>
  );
};

export default HeroSlideshow;
