import { useState } from "react";
import Collapsible from "react-collapsible";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { ServicesCardQuery } from "../../../types";
import BenifitsTable from "./Tables/BenifitsTable";
import ConditionsTable from "./Tables/ConditionsTable";
import FeaturesTable from "./Tables/FeaturesTable";
import OverviewTable from "./Tables/OverviewTable";

const ResultsCollapsible = ({
  data,
  data1,
  data2,
}: {
  data: ServicesCardQuery | undefined | null;
  data1: ServicesCardQuery | undefined | null;
  data2: ServicesCardQuery | undefined | null;
}) => {
  const [minusOverview, setMinusOverview] = useState(false);
  const [minusBenefits, setMinusBenefits] = useState(false);
  const [minusFeatures, setMinusFeatures] = useState(false);
  const [minusConditions, setMinusConditions] = useState(false);

  return (
    <div className="divide-y-[1px]  lg:container lg:mx-auto xl:mt-20">
      <div className="px-4">
        <Collapsible
          transitionTime={200}
          trigger={
            <div
              className="flex items-center justify-between space-x-3 px-8 py-4"
              onClick={() => setMinusOverview(!minusOverview)}
            >
              <p className="py-4 text-xl font-bold text-iwanttoColor md:text-2xl lg:text-3xl">
                Overview
              </p>
              {!minusOverview && (
                <div className="text-thin text-iwanttoColor">
                  <AiOutlinePlusCircle size={33} />
                </div>
              )}
              {minusOverview && (
                <div className="rotate-90 text-iwanttoColor">
                  <AiOutlineMinusCircle size={33} />
                </div>
              )}
            </div>
          }
        >
          <OverviewTable data={data} data1={data1} data2={data2} />
        </Collapsible>
      </div>

      <div className="px-4">
        <Collapsible
          transitionTime={200}
          trigger={
            <div
              className="flex items-center justify-between space-x-3 px-8 py-4"
              onClick={() => setMinusBenefits(!minusBenefits)}
            >
              <p className="py-4 text-xl font-bold text-iwanttoColor md:text-2xl lg:text-3xl">
                Benefits
              </p>
              {!minusBenefits && (
                <div className="text-thin text-iwanttoColor">
                  <AiOutlinePlusCircle size={33} />
                </div>
              )}
              {minusBenefits && (
                <div className="rotate-90 text-iwanttoColor">
                  <AiOutlineMinusCircle size={33} />
                </div>
              )}
            </div>
          }
        >
          <BenifitsTable data={data} data1={data1} data2={data2} />
        </Collapsible>
      </div>

      <div className="px-4">
        <Collapsible
          transitionTime={200}
          trigger={
            <div
              className="flex items-center justify-between space-x-3 px-8 py-4"
              onClick={() => setMinusFeatures(!minusFeatures)}
            >
              <p className="py-4 text-xl font-bold text-iwanttoColor md:text-2xl lg:text-3xl">
                Features
              </p>
              {!minusFeatures && (
                <div className="text-thin text-iwanttoColor">
                  <AiOutlinePlusCircle size={33} />
                </div>
              )}
              {minusFeatures && (
                <div className="rotate-90 text-iwanttoColor">
                  <AiOutlineMinusCircle size={33} />
                </div>
              )}
            </div>
          }
        >
          <FeaturesTable data={data} data1={data1} data2={data2} />
        </Collapsible>
      </div>

      <div className="px-4">
        <Collapsible
          transitionTime={200}
          trigger={
            <div
              className="flex items-center justify-between space-x-3 px-8 py-4"
              onClick={() => setMinusConditions(!minusConditions)}
            >
              <p className="py-4 text-xl font-bold text-iwanttoColor md:text-2xl lg:text-3xl">
                Conditions
              </p>
              {!minusConditions && (
                <div className="text-thin text-iwanttoColor">
                  <AiOutlinePlusCircle size={33} />
                </div>
              )}
              {minusConditions && (
                <div className="rotate-90 text-iwanttoColor">
                  <AiOutlineMinusCircle size={33} />
                </div>
              )}
            </div>
          }
        >
          <ConditionsTable data={data} data1={data1} data2={data2} />
        </Collapsible>
      </div>
    </div>
  );
};

export default ResultsCollapsible;
