import { ArrowForwardIos } from "@mui/icons-material";
import Collapsible from "react-collapsible";
import BenifitsTable from "./Tables/BenifitsTable";
import ConditionsTable from "./Tables/ConditionsTable";
import FeaturesTable from "./Tables/FeaturesTable";
import OverviewTable from "./Tables/OverviewTable";

const ResultsCollapsible = ({ data, data1, data2 }: any) => {
  return (
    <div className="mt-12 divide-y-[1px]">
      <Collapsible
        transitionTime={200}
        trigger={
          <div className=" flex items-center justify-between px-8 py-4">
            <p className="text-md p-4 font-bold text-iwanttoColor md:text-xl lg:text-3xl">
              Overview
            </p>
            <div className="pr-4 text-iwanttoColor">
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
          <div className=" flex items-center justify-between px-8 py-4">
            <p className="text-md p-4 font-bold text-iwanttoColor md:text-xl lg:text-3xl">
              Benefits
            </p>
            <div className="pr-4 text-iwanttoColor">
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
          <div className=" flex items-center justify-between px-8 py-4">
            <p className="text-md p-4 font-bold text-iwanttoColor md:text-xl lg:text-3xl">
              Features
            </p>
            <div className="pr-4 text-iwanttoColor">
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
          <div className=" flex items-center justify-between px-8 py-4">
            <p className="text-md p-4 font-bold text-iwanttoColor md:text-xl lg:text-3xl">
              Registration Conditions And Procedures
            </p>
            <div className="pr-4 text-iwanttoColor">
              <ArrowForwardIos />
            </div>
          </div>
        }
      >
        <ConditionsTable data={data} data1={data1} data2={data2} />
      </Collapsible>
    </div>
  );
};

export default ResultsCollapsible;
