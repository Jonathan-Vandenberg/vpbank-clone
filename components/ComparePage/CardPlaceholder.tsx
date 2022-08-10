import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import creditcardPlcaeholder from "../../public/cardPlaceholder.png";

export default function CardPlaceholder() {
  return (
    <Stack className="items-left relative flex h-full w-full flex-col justify-start bg-body outline-none">
      <div className="absolute left-[10px] top-[px] z-10 rounded text-sm">
        <Skeleton className="h-14 w-20" />
      </div>
      <div className="mx-16 mt-16">
        <Image
          src={creditcardPlcaeholder}
          width={450}
          height={270}
          alt="vpBank - Card"
        />
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="flex w-full items-center justify-between px-5 pt-5">
          <div className="flex flex-col items-start justify-center">
            <div className=" text-iwanttoColor">
              <Skeleton className="h-8 w-20" />
            </div>
            <div className=" text-sm font-bold">
              <Skeleton variant="rectangular" className="h-8 w-36" />
            </div>
          </div>
          <div className="block self-start">
            <Skeleton variant="circular" className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end pt-5">
        <div className="mx-12 block w-auto rounded-full border-[1px] border-iwanttoColor">
          <div className="flex items-center justify-center space-x-3 p-3 text-iwanttoColor">
            <p className="whitespace-nowrap text-sm">Find Cards</p>
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
    </Stack>
  );
}
