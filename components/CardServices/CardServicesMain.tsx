import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { useServicesCardsQuery } from "../../types";
import CreditCard from "../UI/CreditCard";
import Filter from "../UI/Filter";
import HeroStatic from "../UI/HeroStatic";
import IconSlider from "../UI/IconSlider";
import PaginationCards from "../UI/PaginationCards";
import Promotion from "../UI/Promotion";

const CardServices: React.FC<{ temp: string }> = ({ temp }) => {
  // Card type
  const [all, setAll] = useState(true);
  const [individual, setIndividual] = useState(false);
  const [titanium, setTitanium] = useState(false);
  const [classic, setClassic] = useState(false);
  const [platinum, setPlatinum] = useState(false);
  const [gold, setGold] = useState(false);

  // Interest rate
  // 2.79%, 2.99%, 3.49%, 3.99%
  const [low, setLow] = useState(false);
  const [medium, setMedium] = useState(false);
  const [high, setHigh] = useState(false);
  const [veryHigh, setVeryHigh] = useState(false);

  const handleAllCards = () => {
    setAll(true);
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
    setLow(false);
    setMedium(false);
    setHigh(false);
    setVeryHigh(false);
  };

  const handleIndividual = () => {
    setIndividual(true);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
    setLow(false);
    setMedium(false);
    setHigh(false);
    setVeryHigh(false);
    setAll(false);
  };

  const handleTitanium = () => {
    setIndividual(false);
    setTitanium(true);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
    setLow(false);
    setMedium(false);
    setHigh(false);
    setVeryHigh(false);
    setAll(false);
  };

  const handleClassic = () => {
    setIndividual(false);
    setTitanium(false);
    setClassic(true);
    setPlatinum(false);
    setGold(false);
    setLow(false);
    setMedium(false);
    setHigh(false);
    setVeryHigh(false);
    setAll(false);
  };

  const handlePlatinum = () => {
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(true);
    setGold(false);
    setLow(false);
    setMedium(false);
    setHigh(false);
    setVeryHigh(false);
    setAll(false);
  };

  const handleGold = () => {
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(true);
    setLow(false);
    setMedium(false);
    setHigh(false);
    setVeryHigh(false);
    setAll(false);
  };

  const handleLow = () => {
    setLow(true);
    setMedium(false);
    setHigh(false);
    setVeryHigh(false);
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
    setAll(false);
  };

  const handleMedium = () => {
    setLow(false);
    setMedium(true);
    setHigh(false);
    setVeryHigh(false);
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
    setAll(false);
  };

  const handleHigh = () => {
    setLow(false);
    setMedium(false);
    setHigh(true);
    setVeryHigh(false);
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
    setAll(false);
  };

  const handleVeryHigh = () => {
    setLow(false);
    setMedium(false);
    setHigh(false);
    setVeryHigh(true);
    setIndividual(false);
    setTitanium(false);
    setClassic(false);
    setPlatinum(false);
    setGold(false);
    setAll(false);
  };

  const [pageValue, setPageValue] = useState(1);

  const { asPath } = useRouter();

  const { data } = useServicesCardsQuery();

  const filteredData = data?.servicesCards?.filter((card) => {
    if (all) {
      return card;
    } else if (individual) {
      return card?.cardType === "Individual";
    } else if (titanium) {
      return card?.cardType === "Titanium";
    } else if (classic) {
      return card?.cardType === "Classic";
    } else if (platinum) {
      return card?.cardType === "Platinum";
    } else if (gold) {
      return card?.cardType === "Gold";
    } else if (low) {
      return card?.interestRate === "2.79%/month";
    } else if (medium) {
      return card?.interestRate === "2.99%/month";
    } else if (high) {
      return card?.interestRate === "3.49%/month";
    } else if (veryHigh) {
      return card?.interestRate === "3.99%/month";
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
            handleLow={handleLow}
            handleMedium={handleMedium}
            handleHigh={handleHigh}
            handleVeryHigh={handleVeryHigh}
            handleAllCards={handleAllCards}
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
