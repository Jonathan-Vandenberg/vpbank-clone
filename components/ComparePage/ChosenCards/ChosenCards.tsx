import { ServicesCard } from "../../../types";
import CardPlaceholder from "./CardPlaceholder";
import ChosenCard from "./ChosenCard";

const ChosenCards = ({
  data,
  data1,
  data2,
}: {
  data: ServicesCard | undefined | null;
  data1: ServicesCard | undefined | null;
  data2: ServicesCard | undefined | null;
}) => {
  return (
    <div className="lg:container-lg md:px-28 md:pt-6 md:pb-12 lg:mx-auto">
      <div className="grid-favorites-compare mx-4">
        {data ? <ChosenCard singleCardData={data} /> : <CardPlaceholder />}
        {data1 ? <ChosenCard singleCardData={data1} /> : <CardPlaceholder />}
        {data2 ? <ChosenCard singleCardData={data2} /> : <CardPlaceholder />}
      </div>
    </div>
  );
};

export default ChosenCards;
