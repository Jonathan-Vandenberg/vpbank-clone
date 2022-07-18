import dynamic from "next/dynamic";

const IconSlider = dynamic(
  () => import("./IconSlider"),
  { ssr: false } // <-- not including this component on server-side
);

const IndividualCustomers = () => {
  return (
    <section className="container-lg mx-auto">
      <h2 className="indexTitle ml-0 w-1/2 bg-gradient-to-r from-startColor  to-endColor bg-clip-text pt-8 text-center text-4xl font-bold text-transparent">
        Individual customers
      </h2>
      <IconSlider />
    </section>
  );
};

export default IndividualCustomers;
