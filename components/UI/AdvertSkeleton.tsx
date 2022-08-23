import Skeleton from "@mui/material/Skeleton";

const AdvertSkeleton: React.FC = () => {
  return (
    <div className="relative">
      <Skeleton width={400} height={231} variant="rectangular" />
      <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full">
        <div className="flex h-full flex-col items-start justify-between p-2">
          <Skeleton variant="rectangular" width={90} height={20} />
          <Skeleton variant="rectangular" width={170} height={20} />
          <div className="flex items-center justify-start space-x-3">
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="rectangular" width={40} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertSkeleton;
