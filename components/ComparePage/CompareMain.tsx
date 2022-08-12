import { NextPage } from "next/types";
import { useAppSelector } from "../../redux-hooks/hooks";
import { useServicesCardQuery } from "../../types";
import CardsDrawer from "./ChooseCardsDrawer/CardsDrawer";
import ChosenCards from "./ChosenCards/ChosenCards";
import ResultsCollapsible from "./Results/ResultsCollapsible";

const CompareMain: NextPage = () => {
  const { cardId } = useAppSelector((state) => state.cardId);

  const { data, loading, error } = useServicesCardQuery({
    variables: {
      id: cardId[0],
    },
  });

  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useServicesCardQuery({
    variables: {
      id: cardId[1],
    },
  });

  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useServicesCardQuery({
    variables: {
      id: cardId[2],
    },
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 pt-10">
        <p className="text-5xl font-semibold text-gray-600">Compare Cards</p>
        <p className="text-2xl text-gray-400">
          Add and remove cards to compare
        </p>
      </div>
      <ChosenCards
        data={data?.servicesCard}
        data1={data1?.servicesCard}
        data2={data2?.servicesCard}
      />
      <ResultsCollapsible data={data} data1={data1} data2={data2} />
      <CardsDrawer />
    </>
  );
};

export default CompareMain;
