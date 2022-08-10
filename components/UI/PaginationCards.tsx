import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Pagination, PaginationItem } from "@mui/material";
import { motion } from "framer-motion";
import { ReactElement, ReactFragment, ReactPortal, useState } from "react";
import * as Scroll from "react-scroll";
import CreditCard from "./CreditCard";

const ArrowLeft = () => (
  <div className="text-iwanttoColor">
    <ArrowBackIos />
  </div>
);

const ArrowRight = () => (
  <div className="text-iwanttoColor">
    <ArrowForwardIos />
  </div>
);

interface IPaginationCardProps {
  children: ReactElement | ReactFragment | ReactPortal | null;
  data: any;
  pageValue: number;
  setPageValue: React.Dispatch<React.SetStateAction<number>>;
}

const App = ({
  data,
  children,
  pageValue,
  setPageValue,
}: IPaginationCardProps) => {
  let scroll = Scroll.animateScroll;

  const handleScroll = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="grid-favorites lg:container-lg overflow-hidden p-4 md:px-28 lg:mx-auto">
        {children}
      </div>
      <div className="flex items-center justify-center p-6">
        <Pagination
          count={Math.ceil(data?.servicesCards?.length / 6) || 3}
          page={pageValue}
          onChange={(event, val) => {
            setPageValue(val), handleScroll();
          }}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowLeft, next: ArrowRight }}
              {...item}
            />
          )}
        />
      </div>
    </>
  );
};

export default App;
