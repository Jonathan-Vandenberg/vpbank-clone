import { NextPage } from "next/types";
import { ServicesCardsQuery } from "../../types";
import CreditCardSlider from "../UI/CreditCardSlider";

interface IProps {
  data: ServicesCardsQuery | undefined;
}

const MobileCardCompare: NextPage<IProps> = ({ data }) => {
  return (
    <div className="h-full space-y-2 pr-2 md:grid md:grid-cols-1">
      {data?.servicesCards?.map((el) => (
        <CreditCardSlider
          key={el?.id}
          singleCardData={el}
          addToCompare={false}
        />
      ))}
    </div>
  );
};

export default MobileCardCompare;
