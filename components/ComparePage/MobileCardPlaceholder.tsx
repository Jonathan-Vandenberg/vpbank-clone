import { Menu } from "@mui/icons-material";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";
import { useAppDispatch } from "../../redux-hooks/hooks";
import { changeDrawerState } from "../../slices/compareDrawerSlice";
import placeholder from "../../public/placeholder.png";

const MobileCardPlaceholder = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto mt-14">
      <div className="relative">
        <Image
          src={placeholder}
          width={480}
          height={300}
          alt="credit card"
          layout="responsive"
        />
        <div className="placeholder-overlay"></div>
      </div>
      <div className="flex h-16 w-full items-end justify-center py-1">
        <div className="flex h-full w-full flex-col items-center justify-between p-3">
          <div className="flex w-full items-center justify-between">
            <div className="cursor-pointer rounded-full bg-white py-2">
              <Skeleton variant="circular" width={25} height={25} />
            </div>
            <Skeleton
              variant="rectangular"
              width={50}
              height={36}
              className="rounded-full"
            />
            <div
              className="flex items-center space-x-1 rounded-full border-[1px] border-iwanttoColor p-2 text-sm text-iwanttoColor"
              onClick={() => dispatch(changeDrawerState(true))}
            >
              <p className="">Add</p>
              <BsPlus size={20} />
            </div>

            <div>
              <Menu className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCardPlaceholder;
