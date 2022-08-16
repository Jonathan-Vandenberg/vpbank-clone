import React from "react";

interface IProps {
  className: string;
  title: string;
}

const CardHeader: React.FC<IProps> = ({ className, title }) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between border-b-2 p-5">
        <h2 className="bg-gradient-to-r from-startColor to-endColor bg-clip-text text-xl font-bold text-transparent md:text-2xl">
          {title}
        </h2>
        <p className="cursor-pointer text-iwanttoColor">see more</p>
      </div>
    </div>
  );
};

export default CardHeader;
