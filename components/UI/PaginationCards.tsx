import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
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
  data: ServicesCardsQuery | undefined | null;
  pageValue: number;
  setPageValue: React.Dispatch<React.SetStateAction<number>>;
}

const App: React.FC<IProps> = ({ data, children, pageValue, setPageValue }) => {
  let scroll = Scroll.animateScroll;

  const handleScroll = () => {
    scroll.scrollTo(600);
  };

  return (
    <>
      <div className="grid-favorites overflow-hidden">{children}</div>
      <div className="flex items-center justify-center p-6">
        <Pagination
          count={Math.ceil(
            data?.servicesCards ? data.servicesCards.length / 6 : 3
          )}
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
