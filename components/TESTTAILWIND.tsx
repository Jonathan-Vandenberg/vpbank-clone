import Image from "next/image";
import { useRouter } from "next/router";
import { ReactComponentElement } from "react";

const dummyData = [
  {
    day: "23",
    month: "T8",
    year: "2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident ullam magnam esse fugiat.",
    slug: "corportate",
    imgLink: "https://picsum.photos/id/299/600/130",
  },
  {
    day: "09",
    month: "T8",
    year: "2020",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident ullam magnam esse fugiat.",
    slug: "corportate",
    imgLink: "https://picsum.photos/id/26/600/130",
  },
  {
    day: "23",
    month: "T1",
    year: "2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident ullam magnam esse fugiat.",
    slug: "corportate",
    imgLink: "https://picsum.photos/id/259/600/130",
  },
];

const Tester = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto  p-6 py-0">
      {dummyData.map((dummy, i) => (
        <div key={i} className="flex justify-items-end">
          <div className="flex items-center justify-center px-16 py-0">
            <div className="w-1/4 flex-col items-center justify-center space-y-0 px-8">
              <div className="Mono p-1 text-center font-DM font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
                {dummy.day}
              </div>
              <div className="p-1 text-center font-DM text-lg">{`${dummy.month} ${dummy.year}`}</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-0">
              <span className=" z-10 -mx-2 h-4 w-4 rounded-full bg-green-500"></span>
            </div>
            <div className="mr-0 flex items-center justify-center space-y-0">
              <div
                className="w-58 border-l-2 p-8 px-8"
                onClick={() => {
                  router.push(`/${dummy.slug}`);
                }}
              >
                <Image
                  width={600}
                  height={300}
                  src={dummy.imgLink}
                  alt="Ad Image"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="hidden p-1 align-text-top font-VarelaRound text-lg md:block lg:text-xl">
                  {dummy.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tester;
