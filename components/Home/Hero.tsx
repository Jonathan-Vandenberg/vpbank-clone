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
        style={{
          position: "absolute",
          backgroundImage: `linear-gradient(to right, rgba(2,89,173,0.5), rgba(0,183,78,0.3))`,
          width: "100%",
          height: "100%",
          zIndex: 1,
          right: 0,
          left: 0,
          top: 0,
          marginLeft: "auto",
          marginRight: "auto",
          backfaceVisibility: "visible",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "1.1rem",
            marginTop: "2rem",
            marginLeft: "10rem",
          }}
        >
          Homepage {slug}
        </p>
        <h1
          style={{
            color: "white",
            marginLeft: "9rem",
            marginTop: "8rem",
            fontSize: "3rem",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
