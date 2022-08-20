import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { useServicesCardsQuery } from "../../types";
import CreditCard from "../UI/CreditCard";
import HeroStatic from "../UI/HeroStatic";
import IconSlider from "../UI/IconSlider";
import PaginationCards from "../UI/PaginationCards";
import Promotion from "../UI/Promotion";

const CardServices: React.FC<{ temp: string }> = ({ temp }) => {
  const [pageValue, setPageValue] = useState(1);

  const { asPath } = useRouter();

  const { data } = useServicesCardsQuery();

  const heroData = {
    title: "Card Services",
    imageUrl: "https://picsum.photos/id/299/600/130",
    slug: asPath,
  };

  const CreditCards = () => {
    return (
      <>
        {data?.servicesCards
          ?.map((el) => (
            <motion.div
              key={el!.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <CreditCard data={el} />
            </motion.div>
          ))
          .slice((pageValue - 1) * 6, pageValue * 6)}
      </>
    );
  };

  return (
    <>
      <HeroStatic heroData={heroData} />
      <div className="mb-8 px-5 md:px-28 xl:container xl:mx-auto">
        <div className="py-12">
          <IconSlider />
        </div>
        <div className="pb-8">
          <PaginationCards
            data={data}
            pageValue={pageValue}
            setPageValue={setPageValue}
          >
            <CreditCards />
          </PaginationCards>
        </div>
      </div>
      <div className="mb-8 bg-body px-5 md:px-28 xl:container xl:mx-auto">
        <Promotion temperature={temp} />
      </div>
    </>
  );
};

export default CardServices;
