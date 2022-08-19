import Image from "next/image";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../redux-hooks/hooks";
import { addCard, removeCard } from "../../../slices/cardIdSlice";

const CardsScroller = ({ data }: any) => {
  const dispatch = useAppDispatch();
  const { cardId } = useAppSelector((state) => state.cardId);

  return (
    <div className="grid-favorites-compare">
      {data?.servicesCards?.map((el: any, i: number) => (
        <div
          key={i}
          className="flex h-full flex-col items-center justify-between shadow-card"
        >
          <div className="relative">
            <div>
              <Image
                src={el!.pureCardImage}
                height={270}
                width={430}
                alt="Credit Card"
              />
            </div>
          </div>
          <div className="mx-3 p-3 text-center font-semibold">
            <div>{el?.title}</div>
          </div>
          <div className="flex w-full flex-col items-center justify-end">
            {cardId.includes(el?.id) ? (
              <div className="flex items-center justify-center">
                <button
                  onClick={() => dispatch(removeCard(el?.id))}
                  className="flex cursor-pointer flex-col items-center justify-center px-5 pt-2"
                  disabled={cardId.length > 2 && cardId === el?.id}
                >
                  <div className="flex items-center justify-center space-x-2 rounded-full border-[1px] border-red-300 p-3 text-sm font-semibold text-red-400">
                    <p>Remove</p>
                    <FaMinus />
                  </div>
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <button
                  onClick={() => dispatch(addCard(el?.id))}
                  className="flex cursor-pointer flex-col items-center justify-center px-5 pt-2"
                  disabled={cardId.length > 2}
                >
                  <div
                    className={
                      cardId.length > 2
                        ? "flex items-center justify-center space-x-2 rounded-full border-[1px] border-gray-300 p-3 text-sm text-gray-300"
                        : "flex items-center justify-center space-x-2 rounded-full border-[1px] border-iwanttoColor p-3 text-sm font-semibold text-iwanttoColor"
                    }
                  >
                    <p>COMPARE</p>
                    <FaPlus />
                  </div>
                </button>
              </div>
            )}
            <div className="flex w-full items-center justify-between p-4">
              <div className="flex cursor-pointer items-center justify-center space-x-2 p-1 text-iwanttoColor">
                <p>Apply Now</p>
                <div>
                  <FaArrowRight />
                </div>
              </div>

              <div className="flex cursor-pointer items-center justify-center space-x-2 p-1 text-iwanttoColor">
                <p>More Info</p>
                <div>
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsScroller;
