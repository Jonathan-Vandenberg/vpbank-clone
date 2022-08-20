import axios from "axios";
import Head from "next/head";
import CardServicesMain from "../components/CardServices/CardServicesMain";

const App: React.FC<{ temperature: string }> = ({ temperature }) => {
  return (
    <main>
      <Head>
        <title>Card Services</title>
        <meta name="description" content="Find the latest card services" />
      </Head>
      <CardServicesMain temp={temperature} />
    </main>
  );
};

export default App;

export async function getServerSideProps() {
  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
    params: { lon: "106.6297", lat: "10.823" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY!,
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };

  let temperature;

  await axios
    .request(options)
    .then(function (response: any) {
      temperature = JSON.stringify(response.data.data[0].temp);
    })
    .catch(function (error: any) {
      console.error(error);
    });

  return {
    props: {
      temperature,
    },
  };
}
