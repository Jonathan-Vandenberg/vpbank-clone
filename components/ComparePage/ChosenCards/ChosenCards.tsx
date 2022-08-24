import { ServicesCard } from "../../../types";
import MobileCardCompare from "../MobileCardCompare";
import MobileCardPlaceholder from "../MobileCardPlaceholder";
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
    <div className="md:px-6  md:py-3 xl:container xl:mx-auto">
      <div className="hidden gap-2 lg:grid lg:grid-cols-3">
        {data ? (
          <ChosenCard singleCardData={data} />
        ) : (
          <CardPlaceholder inactive={false} />
        )}
        {data1 ? (
          <ChosenCard singleCardData={data1} />
        ) : (
          <CardPlaceholder inactive={false} />
        )}
        {data2 ? (
          <ChosenCard singleCardData={data2} />
        ) : (
          <CardPlaceholder inactive={false} />
        )}
      </div>
      <div className="flex scale-90 flex-col gap-4 md:scale-100 md:flex-row lg:hidden">
        {data ? <MobileCardCompare data={data} /> : <MobileCardPlaceholder />}
        {data1 ? <MobileCardCompare data={data1} /> : <MobileCardPlaceholder />}
        {data2 ? <MobileCardCompare data={data2} /> : <MobileCardPlaceholder />}
      </div>
    </div>
  );
};

export default ChosenCards;
