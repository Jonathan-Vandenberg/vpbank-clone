import ChosenCard from "./ChosenCard";
import CardPlaceholder from "./CardPlaceholder";

const ChosenCards = ({ data, data1, data2 }: any) => {
  return (
    <div className="lg:container-lg md:px-28 md:pt-6 md:pb-12 lg:mx-auto">
      <div className="grid-favorites-compare mx-4">
        {data ? (
          <ChosenCard singleCardData={data.servicesCard} addToCompare={false} />
        ) : (
          <CardPlaceholder />
        )}
        {data1 ? (
          <ChosenCard
            singleCardData={data1.servicesCard}
            addToCompare={false}
          />
        ) : (
          <CardPlaceholder />
        )}
        {data2 ? (
          <ChosenCard
            singleCardData={data2.servicesCard}
            addToCompare={false}
          />
        ) : (
          <CardPlaceholder />
        )}
      </div>
    </div>
  );
};

export default ChosenCards;
