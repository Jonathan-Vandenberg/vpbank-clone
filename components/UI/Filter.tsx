import { motion } from "framer-motion";
import { useState } from "react";

interface IProps {
  handleIndividual: () => void;
  handleTitanium: () => void;
  handleClassic: () => void;
  handlePlatinum: () => void;
  handleGold: () => void;
  handleLow: () => void;
  handleMedium: () => void;
  handleHigh: () => void;
  handleVeryHigh: () => void;
  handleAllCards: () => void;
}

const Filter = ({
  handleIndividual,
  handleClassic,
  handleGold,
  handlePlatinum,
  handleTitanium,
  handleLow,
  handleMedium,
  handleHigh,
  handleVeryHigh,
  handleAllCards,
}: IProps) => {
  // Show dropdowns
  const [showCardType, setShowCardType] = useState(false);
  const [showInterest, setShowInterest] = useState(false);

  // Close all dropdowns
  const handleCloseAll = () => {
    setShowCardType(false);
    setShowInterest(false);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between space-x-5">
        <p className="text-xs">FILTER</p>
        <p
          onMouseOver={() => handleCloseAll()}
          onClick={() => handleAllCards()}
          className="rounded-md border-[1px] border-gray-200 p-3 px-7 font-semibold hover:text-iwanttoColor hover:shadow-lg"
        >
          All
        </p>
        <div className="relative">
          <p
            className="rounded-md border-[1px] border-gray-200 p-3 font-semibold hover:text-iwanttoColor hover:shadow-lg"
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
            className="rounded-md border-[1px] border-gray-200 p-3 px-7 font-semibold hover:text-iwanttoColor hover:shadow-lg"
          >
            Interest Rate
          </p>
          {showInterest && (
            <SelectInterestRate
              handleCloseAll={handleCloseAll}
              handleLow={handleLow}
              handleMedium={handleMedium}
              handleHigh={handleHigh}
              handleVeryHigh={handleVeryHigh}
            />
          )}
        </div>
      </div>
      <p className="rounded-full border-[1px] p-3 px-7">Utility</p>
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
            onClick={() => {
              handleCloseAll(), handleIndividual();
            }}
            className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
          >
            Individual
          </p>
          <span className="absolute top-0 left-[70px] -mt-2 h-4 w-4 rotate-45 bg-filterDropdown" />
        </div>
        <p
          onClick={() => {
            handleCloseAll(), handleTitanium();
          }}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          Titanium
        </p>
        <p
          onClick={() => {
            handleClassic(), handleCloseAll();
          }}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          Classic
        </p>
        <p
          onClick={() => {
            handlePlatinum(), handleCloseAll();
          }}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          Platinum
        </p>
        <p
          onClick={() => {
            handleGold(true), handleCloseAll();
          }}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          Gold
        </p>
      </div>
    </motion.div>
  );
};

const SelectInterestRate = ({
  handleCloseAll,
  handleLow,
  handleMedium,
  handleHigh,
  handleVeryHigh,
}: any) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="absolute z-20"
      onMouseLeave={() => {
        handleCloseAll(), handleCloseAll();
      }}
    >
      <div className="justify center absolute -bottom-20 -left-8 flex items-center bg-filterDropdown px-5">
        <div className="relative">
          <p
            onClick={() => {
              handleLow(), handleCloseAll();
            }}
            className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
          >
            2.79%
          </p>
          <span className="absolute top-0 left-[70px] -mt-2 h-4 w-4 rotate-45 bg-filterDropdown" />
        </div>
        <p
          onClick={() => {
            handleMedium(), handleCloseAll();
          }}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          2.99%
        </p>
        <p
          onClick={() => {
            handleHigh(), handleCloseAll();
          }}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          3.49%
        </p>
        <p
          onClick={() => {
            handleVeryHigh(), handleCloseAll();
          }}
          className="test-sm whitespace-nowrap px-3 py-5 hover:text-iwanttoColor"
        >
          3.99%
        </p>
      </div>
    </motion.div>
  );
};
