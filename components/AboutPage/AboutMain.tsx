import { useRouter } from "next/router";
import Timeline from "../UI/Timeline";
import Hero from "../UI/HeroStatic";

const timelineData = [
  {
    day: "31",
    month: "T8",
    year: "2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum provident ullam magnam esse fugiat.",
    slug: "corportate",
    imgLink: "https://picsum.photos/id/299/600/130",
  },
  {
    day: "01",
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
  {
    day: "01",
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

  {
    day: "01",
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

const AboutMain = () => {
  const { asPath } = useRouter();

  const heroData = {
    title: "About VPBank",
    imageUrl: "https://picsum.photos/id/299/600/130",
    slug: asPath,
  };

  return (
    <>
      <Hero heroData={heroData} />
      <Timeline timelineData={timelineData} />
    </>
  );
};

export default AboutMain;
