import Link from "next/link";

interface IProps {
  localStorageKeys: string[];
  favoriteType: string;
  findMoreLink: string;
}

export default function FavoritesHeader({
  localStorageKeys,
  favoriteType,
  findMoreLink,
}: IProps) {
  return (
    <div className="mx-auto my-5 flex flex-col items-center space-y-3 bg-body px-3 py-8 shadow md:my-12 md:px-28 xl:grid xl:grid-cols-3">
      <h2 className="col-span-1 whitespace-nowrap bg-gradient-to-r from-startColor to-endColor  bg-clip-text text-xl font-bold text-transparent md:text-2xl">
        {favoriteType}s
      </h2>
      <div className="md:col-span-1 md:grid">
        <div className="flex items-center justify-start space-x-2">
          <p>You have </p>
          <p className="font-semibold text-iwanttoColor">
            {localStorageKeys.length}
          </p>{" "}
          <p>
            {favoriteType}
            {localStorageKeys.length === 1 ? "" : "s"}.
          </p>
        </div>
      </div>

      <div className="col-span-1 md:grid">
        <Link href={findMoreLink}>
          <p className="cursor-pointer text-iwanttoColor">find more</p>
        </Link>
      </div>
    </div>
  );
}
