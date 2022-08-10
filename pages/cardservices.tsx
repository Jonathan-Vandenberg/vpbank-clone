import { motion } from "framer-motion";
import { useState } from "react";
import CreditCard from "../components/UI/CreditCard";
import PaginationCards from "../components/UI/PaginationCards";
import { useServicesCardsQuery } from "../types";

const CardServices = () => {
  const [pageValue, setPageValue] = useState(1);

  const { data, loading, error } = useServicesCardsQuery();

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
    <PaginationCards
      data={data}
      pageValue={pageValue}
      setPageValue={setPageValue}
    >
      <CreditCards />
    </PaginationCards>
  );
};

export default CardServices;
