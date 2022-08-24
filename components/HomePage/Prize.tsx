import CardHeader from "../UI/CardHeader";
import Image from "next/image";

const imageData = [
  "https://picsum.photos/id/633/600/400",
  "https://picsum.photos/id/526/800/600",
  "https://picsum.photos/id/365/800/600",
];

const Prize = () => {
  return (
    <div>
      <CardHeader className={"bg-body"} title={"Awards"} />
      <div className="min-h-[312px] w-auto overflow-hidden">
        <Image
          src={imageData[0]}
          width={600}
          height={400}
          alt="news image"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Prize;
