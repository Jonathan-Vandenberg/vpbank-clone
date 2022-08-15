import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "../UI/HeroSlideshow";

const Prize = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 flex w-full items-center justify-between bg-white opacity-90 md:container md:mx-auto">
        <h2 className="indexTitle bg-gradient-to-r from-startColor  to-endColor bg-clip-text p-6 text-2xl font-bold text-transparent">
          Awards
        </h2>
        <div className="mr-6 p-4 text-iwanttoColor">
          <Link href="/">see more</Link>
        </div>
      </div>
      <HeroSlideshow
        imageData={[
          "https://picsum.photos/id/635/800/600",
          "https://picsum.photos/id/526/800/600",
          "https://picsum.photos/id/365/800/600",
        ]}
        width={800}
        height={728}
        scaleOnHover={true}
      />
    </div>
  );
};

export default Prize;
