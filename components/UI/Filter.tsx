import { motion } from "framer-motion";
import { useState } from "react";

interface IProps {
  handleIndividual: () => void;
  handleTitanium: () => void;
  handleClassic: () => void;
  handlePlatinum: () => void;
  handleGold: (bool: boolean) => void;
}

const Filter = ({
  handleIndividual,
  handleClassic,
  handleGold,
  handlePlatinum,
  handleTitanium,
}: IProps) => {
  // Show dropdowns
  const [showCardType, setShowCardType] = useState(false);
  const [showInterest, setShowInterest] = useState(false);

  // Interest rate
  // 2.79%, 2.99%, 3.49%, 3.99%
  const [low, setLow] = useState(false);
  const [medium, setMedium] = useState(false);
  const [high, setHigh] = useState(false);
  const [veryHigh, setVeryHigh] = useState(false);

  // Close all dropdowns
  const handleCloseAll = () => {
    setShowCardType(false);
    setShowInterest(false);
    false;
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between space-x-5">
        <p className="text-xs">FILTER</p>
        <p
          onMouseOver={() => handleCloseAll()}
          className="rounded-md border-[1px] border-gray-300 p-3 px-7 font-semibold hover:text-iwanttoColor hover:shadow-lg"
        >
          All
        </p>
        <div className="relative">
          <p
            className="rounded-md border-[1px] border-gray-300 p-3 font-semibold hover:text-iwanttoColor hover:shadow-lg"
            onMouseOver={() => {
              setShowCardType(true), setShowInterest(false);
            }}
          >
            Card Type
          </p>
          {showCardType && (
            <SelectCardType
              handleIndividual={handleIndividual}
              handleTitanium={handleTitanium}
              handleClassic={handleClassic}
              handlePlatinum={handlePlatinum}
              handleGold={handleGold}
              handleCloseAll={handleCloseAll}
            />
          )}
        </div>
        <div className="relative">
          <p
            onMouseOver={() => {
              setShowInterest(true), setShowCardType(false);
            }}
            className="rounded-md border-[1px] border-gray-300 p-3 px-7 font-semibold hover:text-iwanttoColor hover:shadow-lg"
          >
            Interest Rate
          </p>
          {showInterest && (
            <SelectInterestRate handleCloseAll={handleCloseAll} />
          )}
        </div>
        <p
          className="rounded-md border-[1px] border-gray-300 p-3 px-7 font-semibold hover:text-iwanttoColor hover:shadow-lg"
          onMouseOver={() => handleCloseAll()}
        >
          Appreciate
        </p>
      </div>
      <p className="rounded-full border-2 p-3 px-7">Utility</p>
    </div>
  );
};

export default Filter;

const SelectCardType = ({
  handleCloseAll,
  handleIndividual,
  handleTitanium,
  handleClassic,
  handlePlatinum,
  handleGold,
}: any) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="absolute z-20"
      onMouseLeave={() => handleCloseAll()}
    >
      <div className="justify center absolute -bottom-20 -left-8 flex items-center bg-filterDropdown px-5">
        <div className="relative">
          <p
            onClick={() => handleIndividual()}
            className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
          >
            Individual
          </p>
          <span className="absolute top-0 left-[70px] -mt-2 h-4 w-4 rotate-45 bg-filterDropdown" />
        </div>
        <p
          onClick={() => handleTitanium()}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          Titanium
        </p>
        <p
          onClick={() => handleClassic()}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          Classic
        </p>
        <p
          onClick={() => handlePlatinum()}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          Platinum
        </p>
        <p
          onClick={() => handleGold(true)}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          Gold
        </p>
      </div>
    </motion.div>
  );
};

const SelectInterestRate = ({ handleCloseAll }: any) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="absolute z-20"
      onMouseLeave={() => handleCloseAll()}
    >
      <div className="justify center absolute -bottom-20 -left-8 flex items-center bg-filterDropdown px-5">
        <div className="relative">
          <p className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor">
            2.79%
          </p>
          <span className="absolute top-0 left-[70px] -mt-2 h-4 w-4 rotate-45 bg-filterDropdown" />
        </div>
        <p className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor">
          2.99%
        </p>
        <p className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor">
          3.49%
        </p>
        <p className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor">
          3.99%
        </p>
      </div>
    </motion.div>
  );
};
