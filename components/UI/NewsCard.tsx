import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    title:
      "Win a Mercedes-Benz car when participating in VPBank's 29th birthday party",
    content:
      "From now until the end of September 11, 2022, to celebrate its 29th founding anniversary, VPBank has launched a series of great nationwide promotions named 'Prosperity Harmony' with thousands of attractive prizes, including special prizes. especially the Mercedes-Benz C200 car worth nearly 1.7 billion VND.",
  },
  {
    title:
      "VPBank Prime becomes the main sponsor of the program 'Best Song' new version",
    content:
      'With the desire to give wings to young musicians to have the opportunity to break through and shine, VPBank Prime decided to accompany the program "Sing My Song - The Best Song" of the Big Song Big Deal version in 2022 to convey the message. The message supports young people who dare to live their lives for their passion, overcome all barriers to break through and succeed.',
  },
  {
    title:
      "'VPBank's half-year profit reached more than 15.3 trillion dong, exceeding 50% of the year plan'",
    content:
      "At the end of the first 6 months, VPBank completed nearly 52% of the year's profit plan with stable growth in interest and fee income, and positive debt income. The bank will continue to focus on consolidating growth quality, exploiting potential customer segments, and consistently achieving business goals in 2022.",
  },
  {
    title: "VPBank pioneers in helping businesses digitize physical workspaces",
    content:
      "With the goal of diversifying non-financial services for corporate customers, VPBank cooperated with Clever Group to provide Google Workspace service, to help businesses digitize their workspace with a free offer within a short period of time. The first 3 months when registering to use the service.",
  },
  {
    title:
      "VPBank received the award for the best micro-enterprise development bank in 2022",
    content:
      'With efforts to accompany micro-enterprise customers through convenient products and services as well as practical support policies, VPBank has become the only bank in Asia to be honored as the "Bank of the Year". Best Micro-Business Development Bank 2022" (Best Micro-Business Development Bank 2022)',
  },
  {
    title: "Moody's gives credit rating to Ba3, positive outlook for VPBank",
    content:
      "Moody's Investors Service (Moody's) has just announced to maintain the credit rating of Ba3, a positive outlook for Vietnam Prosperity Bank (VPBank) - equivalent to the national credit rating ceiling. of Vietnam.",
  },
  {
    title:
      "VPBank launches super business loan product - Combo Business with interest rate from only 5.7% per year",
    content:
      "The Combo Business loan package for individuals and individual business households of VPBank has an interest rate of only 5.7%/year with a loan limit of up to VND 20 billion.",
  },
];

const NewsCard = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="max-h-[580px] bg-body p-2">
      <div className="mb-6 flex items-center justify-between border-b-2 p-5 pb-6 pt-4">
        <h2 className="bg-gradient-to-r from-startColor to-endColor bg-clip-text  text-xl font-bold text-transparent md:text-2xl">
          News
        </h2>
        <p className="text-iwanttoColor">see more</p>
      </div>

      <div className="md:flex md:items-center md:justify-between">
        <div className="flex flex-col items-center justify-center space-y-5 md:w-5/12 md:p-5">
          <div className="">
            <Image
              src={"https://picsum.photos/id/95/600/350"}
              width={600}
              height={350}
              alt="image"
            />
          </div>
          <div className="flex items-center justify-center p-2">
            <Link href={"/news"}>
              <h3 className="text-lg font-semibold hover:text-iwanttoColor">
                VPBank recommends customers to be vigilant against Covid-19
                subsidy scams
              </h3>
            </Link>
          </div>
        </div>

        {width > 768 && (
          <div className="max-h-[420px] w-7/12 overflow-auto border-l-2 p-6">
            {newsData.map((el, i) => (
              <div key={i} className="space-y-2 border-b-2">
                <Link href={`/${el.title}`}>
                  <h3 className="text-md cursor-pointer pt-2 font-semibold hover:text-iwanttoColor">
                    {el.title}
                  </h3>
                </Link>
                <p className="pb-6 text-sm text-gray-600">{el.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
