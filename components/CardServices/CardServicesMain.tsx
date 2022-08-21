import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  ServicesCard,
  ServicesCardQuery,
  ServicesCardsQuery,
  useServicesCardsQuery,
} from "../../types";
import CreditCard from "../UI/CreditCard";
import Filter from "../UI/Filter";
import HeroStatic from "../UI/HeroStatic";
import IconSlider from "../UI/IconSlider";
import PaginationCards from "../UI/PaginationCards";
import Promotion from "../UI/Promotion";

const CardServices: React.FC<{ temp: string }> = ({ temp }) => {
  // Card type
  const [all, setAll] = useState(false);
  const [individual, setIndividual] = useState(false);
  const [titanium, setTitanium] = useState(false);
  const [classic, setClassic] = useState(false);
  const [platinum, setPlatinum] = useState(false);
  const [gold, setGold] = useState(false);

  const handleIndividual = () => {
    setIndividual(true);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
  };

  const handleTitanium = () => {
    setIndividual(false);
    setTitanium(true);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
  };

  const handleClassic = () => {
    setIndividual(false);
    setTitanium(false);
    setClassic(true);
    setPlatinum(false);
    setGold(false);
  };

  const handlePlatinum = () => {
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(true);
    setGold(false);
  };

  const handleGold = () => {
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(true);
  };

  const [pageValue, setPageValue] = useState(1);

  const { asPath } = useRouter();

  const { data } = useServicesCardsQuery();

  const filteredData = data?.servicesCards?.filter((card) => {
    if (individual) {
      return card?.cardType === "Individual";
    } else if (titanium) {
      return card?.cardType === "Titanium";
    } else if (classic) {
      return card?.cardType === "Classic";
    } else if (platinum) {
      return card?.cardType === "Platinum";
    } else if (gold) {
      return card?.cardType === "Gold";
    } else {
      return card;
    }
  });

  const heroData = {
    title: "Card Services",
    imageUrl: "https://picsum.photos/id/299/600/130",
    slug: asPath,
  };

  const CreditCards = () => {
    return (
      <>
        {filteredData
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
        <div className="mb-10 hidden lg:block">
          <Filter
            handleClassic={handleClassic}
            handleGold={handleGold}
            handleIndividual={handleIndividual}
            handlePlatinum={handlePlatinum}
            handleTitanium={handleTitanium}
          />
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
