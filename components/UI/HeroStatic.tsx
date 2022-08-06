import Image from "next/image";
import { NextPage } from "next/types";

interface Props {
  heroData: HeroData;
}

type HeroData = {
  imageUrl: string;
  slug: string;
  title: string;
};

const Hero: NextPage<Props> = ({ heroData }) => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: -10,
      }}
    >
      <Image
        src={heroData.imageUrl}
        width="600px"
        height="130px"
        layout="responsive"
        alt="hero-image"
      />
      <div
        className="z-1 absolute inset-0 mx-0 h-full w-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2,89,173,0.5), rgba(0,183,78,0.3))`,
          backfaceVisibility: "visible",
        }}
      >
        <p className="text-md p-2 text-left text-white md:ml-6 lg:ml-10 lg:mt-5 lg:text-lg">
          Homepage {heroData.slug}
        </p>
        <h1 className="ml-10 mt-0 h-auto w-auto p-2 text-left text-3xl text-white sm:mt-4 sm:text-3xl md:mt-10 md:text-4xl lg:ml-40 lg:mt-24 lg:text-5xl">
          {heroData.title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
