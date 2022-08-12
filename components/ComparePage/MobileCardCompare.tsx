import { ServicesCardsQuery } from "../../types";
import CreditCardSlider from "./ChosenCards/ChosenCard";

const MobileCardCompare = ({ data }: { data: ServicesCardsQuery }) => {
  return (
    <div className="h-full space-y-2 pr-2 md:grid md:grid-cols-1">
      {data?.servicesCards?.map((el: any) => (
        <CreditCardSlider key={el?.id} singleCardData={el} />
      ))}
    </div>
  );
};

export default MobileCardCompare;
