import Compare from "../components/ComparePage/Compare";
import ServicesSlider from "../components/ComparePage/ServicesSlider";
import { useServicesCardsQuery } from "../types";

const App = () => {
  const { data, loading, error } = useServicesCardsQuery();

  return (
    <>
      <Compare />
      <ServicesSlider data={data} />
    </>
  );
};

export default App;
