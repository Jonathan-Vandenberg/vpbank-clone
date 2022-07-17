import Image from "next/image";
import { useRouter } from "next/router";
import { NextPage } from "next/types";

interface Props {
  timelineData: TimelineData[];
}

type TimelineData = {
  day: string;
  month: string;
  year: string;
  slug: string;
  imgLink: string;
  description: string;
};

const Timeline: NextPage<Props> = ({ timelineData }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto  p-6 py-0">
      {timelineData.map((el) => (
        <div key={el.description} className="flex justify-items-end">
          <div className="flex items-center justify-center px-16 py-0">
            <div className="w-1/4 flex-col items-center justify-center space-y-0 px-8">
              <div className="Mono p-1 text-center font-DM font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
                {el.day}
              </div>
              <div className="p-1 text-center font-DM text-lg">{`${el.month} ${el.year}`}</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-0">
              <span className="z-10 -mx-2 h-4 w-4 rounded-full bg-green-500"></span>
            </div>
            <div className="mr-0 flex items-center justify-center space-y-0">
              <div
                className="w-58 border-l-2 p-8 px-8"
                onClick={() => {
                  router.push(`/${el.slug}`);
                }}
              >
                <Image
                  width={600}
                  height={300}
                  src={el.imgLink}
                  alt={el.description.slice(0, 10) || "VPBank Image"}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="hidden p-1 align-text-top font-VarelaRound text-lg md:block lg:text-xl">
                  {el.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
