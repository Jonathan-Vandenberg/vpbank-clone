import { ArrowBackIos, ArrowForwardIos, Pages } from "@mui/icons-material";
import { Pagination, PaginationItem } from "@mui/material";
import { ReactNode } from "react";
import * as Scroll from "react-scroll";
import { ServicesCardsQuery } from "../../types";

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

interface IProps {
  children: ReactNode;
  cardAmount: number | undefined;
  pageValue: number;
  setPageValue: React.Dispatch<React.SetStateAction<number>>;
  allCardsShown: boolean;
}

const App: React.FC<IProps> = ({
  cardAmount,
  children,
  pageValue,
  setPageValue,
  allCardsShown,
}) => {
  let scroll = Scroll.animateScroll;

  const handleScroll = () => {
    scroll.scrollTo(0);
  };

  return (
    <>
      <div className="grid-favorites overflow-hidden">{children}</div>
      <div className="flex items-center justify-center p-6">
        <Pagination
          hidden={cardAmount! < 7 ? true : false}
          count={Math.ceil(cardAmount ? cardAmount / 6 : 3)}
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
