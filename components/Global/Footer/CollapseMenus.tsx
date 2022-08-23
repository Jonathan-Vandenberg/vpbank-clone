import React from "react";
import Collapsible from "react-collapsible";
import { FaAngleRight } from "react-icons/fa";

const App = () => {
  return (
    <div className="divide-y-2 border-b-2 md:hidden">
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="text-md p-4">Credit Card</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">
          VPBank MC2
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          VPBank Step Up
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          VPBank Lady
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          VPBank Platinum
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          VPBank World
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="text-md p-4">Personal Loans</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">
          Overview
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Conditions and Fees
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="text-md p-4">Secured Loans</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">
          Car Loan
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Home Loan
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Partners with VPBank
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="text-md p-4">Savings Account</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">
          regular Savings
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Easy Savings
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="text-md p-4">Other Products</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">Saving</p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Current Account
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Internet Banking
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          AIA Insurance
        </p>
      </Collapsible>
      <Collapsible
        transitionTime={200}
        trigger={
          <div className="flex items-center justify-between">
            <p className="text-md p-4">Things you should know</p>
            <div className="pr-4">
              <FaAngleRight fontSize={20} />
            </div>
          </div>
        }
      >
        <p className="cursor-pointer p-2 pl-6 text-sm hover:bg-white">
          Promotions
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Documents and Fees
        </p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">FAQs</p>
        <p className="cursor-pointer p-2 pl-6 text-sm  hover:bg-white ">
          Tools and Utilities
        </p>
      </Collapsible>
    </div>
  );
};

export default App;
