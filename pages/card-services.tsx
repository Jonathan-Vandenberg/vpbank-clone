import axios from "axios";
import Head from "next/head";
import CardServicesMain from "../components/CardServices/CardServicesMain";

const App: React.FC = () => {
  const temperature = "27";
  const metalPrices = ["2113. 09", "22. 92"];
  return (
    <main>
      <Head>
        <title>Card Services</title>
        <meta name="description" content="Find the latest card services" />
      </Head>
      <CardServicesMain temp={temperature} metalPrices={metalPrices} />
    </main>
  );
};

export default App;

// export async function getStaticProps() {
//   const optionsWeather = {
//     method: "GET",
//     url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
//     params: { lon: "106.6297", lat: "10.823" },
//     headers: {
//       "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY!,
//       "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
//     },
//   };

//   const options = {
//     method: "GET",
//     url: "https://gold-price-live.p.rapidapi.com/get_metal_prices",
//     headers: {
//       "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY!,
//       "X-RapidAPI-Host": "gold-price-live.p.rapidapi.com",
//     },
//   };

//   let temperature: any;
//   let metalPrices;

//   await axios
//     .request(options)
//     .then(function (response: any) {
//       metalPrices = JSON.stringify(response.data);
//     })
//     .catch(function (error: any) {
//       console.error(error);
//     });

//   await axios
//     .request(optionsWeather)
//     .then(function (response: any) {
//       if (response.data) {
//         temperature = JSON.stringify(response.data.data[0].temp);
//       } else temperature = "27";
//     })
//     .catch(function (error: any) {
//       console.error(error);
//     });

//   return {
//     props: {
//       temperature,
//       metalPrices,
//     },
//   };
// }
