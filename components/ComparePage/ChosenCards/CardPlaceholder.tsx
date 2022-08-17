import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import creditcardPlaceholder from "../../../public/placeholder.png";
import { useAppDispatch } from "../../../redux-hooks/hooks";
import { changeDrawerState } from "../../../slices/compareDrawerSlice";

export default function CardPlaceholder() {
  const dispatch = useAppDispatch();

  return (
    <Stack className="items-left relative flex flex-col justify-start bg-body outline-none">
      <div className="absolute left-[10px] top-[px] z-10 rounded text-sm">
        <Skeleton className="h-14 w-20" />
      </div>
      <div className="mt-16 flex items-center justify-center px-16">
        <Image
          src={creditcardPlaceholder}
          width={270}
          height={190}
          alt="vpBank - Card"
        />
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="flex w-full items-center justify-between px-5 pt-5">
          <div className="flex flex-col items-start justify-center">
            <div className=" text-iwanttoColor">
              <Skeleton className="h-8 w-20" />
            </div>
            <div className="text-sm font-bold">
              <Skeleton variant="rectangular" className="h-8 w-36" />
            </div>
          </div>
          <div className="block self-start">
            <Skeleton variant="circular" className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end pt-5">
        <div className="hidden space-y-2 p-4 md:block">
          <Skeleton variant="rectangular" className="h-5 w-10/12" />
          <Skeleton variant="rectangular" className="h-5 w-3/4" />
          <Skeleton variant="rectangular" className="h-5 w-1/2" />
        </div>

        <div className="z-10 mx-12 my-2 block w-auto rounded-full border-[1px] border-iwanttoColor  ">
          <div
            onClick={() => dispatch(changeDrawerState(true))}
            className="flex cursor-pointer items-center justify-center space-x-3 p-3 text-iwanttoColor"
          >
            <p className="whitespace-nowrap text-sm">Add</p>
            <FaPlus />
          </div>
        </div>
        <div className="flex items-center justify-between space-x-5 p-3">
          <div className="flex items-center justify-center space-x-2 p-1 text-iwanttoColor">
            <Skeleton variant="rectangular" className="h-8 w-24" />
          </div>
          <div className="flex items-center justify-center space-x-2 p-1 text-iwanttoColor">
            <Skeleton variant="rectangular" className="h-8 w-24" />
          </div>
        </div>
      </div>
      <div className="placeholder-overlay"></div>
    </Stack>
  );
}
