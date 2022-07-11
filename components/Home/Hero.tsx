import Image from "next/image";

const Hero = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, rgba(2,89,173,0.5), rgba(0,183,78,0.3))`,
      }}
    >
      <Image
        src={"https://picsum.photos/id/299/600/130"}
        width="600px"
        height="130px"
        layout="responsive"
        style={{
          zIndex: -1,
          opacity: 1,
          backfaceVisibility: "visible",
        }}
      />
    </div>
  );
};

export default Hero;
