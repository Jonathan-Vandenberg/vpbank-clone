import { NextPage } from "next/types";

interface Props {
  /**Closes the advertising navbar in _app.tsx */
  onClick: () => void;
}

const NavbarAdvertise: NextPage<Props> = ({ onClick }) => {
  return (
    <div
      className="hidden bg-advertisingNavColor px-2 py-1 sm:px-4 lg:flex "
      onClick={onClick}
    >
      <div className="container relative mx-auto flex items-center justify-center">
        <p className="mx-auto font-medium">
          VPBank launches a financial brand dedicated to the breakthrough
          generation: VPBank Prime
        </p>
        <div className="ml-30">
          <button onClick={onClick}>X</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdvertise;
