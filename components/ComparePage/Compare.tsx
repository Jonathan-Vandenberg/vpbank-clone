import Collapsible from "react-collapsible";
import { useServicesCardQuery } from "../../types";
import CreditCardSlider from "../UI/CreditCardSlider";
import BenifitsTable from "./BenifitsTable";
import CardPlaceholder from "./CardPlaceholder";
import OverviewTable from "./CompareTables";
import ConditionsTable from "./ConditionsTable";
import FeaturesTable from "./FeaturesTable";

import { ArrowForwardIos } from "@mui/icons-material";
import { useAppSelector } from "../../redux-hooks/hooks";
import MobileCardCompare from "./MobileCardCompare";

import { ServicesCard, ServicesCardsQuery } from "../../types";
import { NextPage } from "next/types";
import ServicesSlider from "./ServicesSlider";

interface IProps {
  allCards: ServicesCardsQuery | undefined;
}

const Compare = () => {
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
          Compare the cards you&apos;ve chosen below. Remove a card to add a new
          one
        </p>
      </div>
      <div className="lg:container-lg mx-auto md:px-28 md:pt-6 md:pb-12">
        <div className="grid-favorites-compare">
          {data ? (
            <CreditCardSlider
              singleCardData={data.servicesCard}
              addToCompare={false}
            />
          ) : (
            <CardPlaceholder />
          )}
          {data1 ? (
            <CreditCardSlider
              singleCardData={data1.servicesCard}
              addToCompare={false}
            />
          ) : (
            <CardPlaceholder />
          )}
          {data2 ? (
            <CreditCardSlider
              singleCardData={data2.servicesCard}
              addToCompare={false}
            />
          ) : (
            <CardPlaceholder />
          )}
        </div>
        <div className="mt-12 divide-y-[1px]">
          <Collapsible
            transitionTime={200}
            trigger={
              <div className="flex items-center justify-between py-4">
                <p className="text-md p-4 text-iwanttoColor md:text-xl lg:text-3xl">
                  Overview
                </p>
                <div className="pr-4">
                  <ArrowForwardIos />
                </div>
              </div>
            }
          >
            <OverviewTable data={data} data1={data1} data2={data2} />
          </Collapsible>
          <Collapsible
            transitionTime={200}
            trigger={
              <div className="flex items-center justify-between py-4">
                <p className="text-md p-4 text-iwanttoColor md:text-xl lg:text-3xl">
                  Benefits
                </p>
                <div className="pr-4">
                  <ArrowForwardIos />
                </div>
              </div>
            }
          >
            <BenifitsTable data={data} data1={data1} data2={data2} />
          </Collapsible>
          <Collapsible
            transitionTime={200}
            trigger={
              <div className="flex items-center justify-between py-4">
                <p className="text-md p-4 text-iwanttoColor md:text-xl lg:text-3xl">
                  Features
                </p>
                <div className="pr-4">
                  <ArrowForwardIos />
                </div>
              </div>
            }
          >
            <FeaturesTable data={data} data1={data1} data2={data2} />
          </Collapsible>
          <Collapsible
            transitionTime={200}
            trigger={
              <div className="flex items-center justify-between py-4">
                <p className="text-md p-4 text-iwanttoColor md:text-xl lg:text-3xl">
                  Registration Conditions And Procedures
                </p>
                <div className="pr-4">
                  <ArrowForwardIos />
                </div>
              </div>
            }
          >
            <ConditionsTable data={data} data1={data1} data2={data2} />
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default Compare;
