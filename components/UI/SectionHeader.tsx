import Link from "next/link";

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex-col py-4 px-4 md:flex md:flex-row md:items-center md:justify-between md:px-0">
      <h2 className="indexTitle bg-gradient-to-r from-startColor to-endColor  bg-clip-text py-2 text-3xl  font-bold text-transparent md:py-4">
        {title}
      </h2>
      <div className="text-iwanttoColor">
        <Link href="/">see more</Link>
      </div>
    </div>
  );
};

export default SectionHeader;
