import Image from "next/image";
import { NextPage } from "next/types";

interface Props {
  imageUrl: string;
  slug: string;
  title: string;
}

const Hero: NextPage<Props> = ({ imageUrl, slug, title }) => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: -10,
      }}
    >
      <Image
        src={imageUrl}
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
        <p className="mt-10 ml-10 text-lg text-white">Homepage {slug}</p>
        <h1 className="ms:mt-1 ml-12 text-3xl text-white md:mt-12 md:text-5xl lg:mt-12 lg:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
