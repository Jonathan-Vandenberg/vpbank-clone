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
      <Image src={imageUrl} width="600px" height="130px" layout="responsive" />
      <div
        className="absolute inset-0 mx-0 w-full h-full z-1"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2,89,173,0.5), rgba(0,183,78,0.3))`,
          backfaceVisibility: "visible",
        }}
      >
        <p className="text-white text-lg mt-10 ml-10">Homepage {slug}</p>
        <h1 className="text-white ml-12 text-3xl ms:mt-1 md:text-5xl md:mt-12 lg:text-6xl lg:mt-12">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
