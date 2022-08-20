import CardHeader from "../UI/CardHeader";
import HeroSlideshow from "../UI/HeroSlideshow";

const Prize = () => {
  return (
    <div className="">
      <CardHeader className={"bg-body"} title={"Awards"} />
      <HeroSlideshow
        imageData={[
          "https://picsum.photos/id/635/800/600",
          "https://picsum.photos/id/526/800/600",
          "https://picsum.photos/id/365/800/600",
        ]}
        width={800}
        height={600}
        scaleOnHover={true}
      />
    </div>
  );
};

export default Prize;
