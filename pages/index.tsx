import axios, { AxiosRequestHeaders, AxiosRequestConfig } from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import HomeMain from "../components/HomePage/HomeMain";

const Home: NextPage = () => {
  const [temperature, setTemperature] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [aqi, setAqi] = useState(0);

  useEffect(() => {
    const aqiOptions: AxiosRequestConfig = {
      method: "GET",
      url: "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality",
      params: { city: "Hanoi", country: "Vietnam" },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_AIR_QUALITY_API_KEY,
        "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
      } as AxiosRequestHeaders,
    };

    const weatherOptions: AxiosRequestConfig = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: "Saigon,vn",
        units: "metric",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      } as AxiosRequestHeaders,
    };

    axios
      .request(aqiOptions)
      .then(function (response) {
        console.log(response.data);
        const { data } = response;
        const aqi = data.overall_aqi;
        setAqi(aqi);
        console.log(aqi);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(weatherOptions)
      .then(function (response) {
        const { data } = response;
        const Temp = Math.ceil(data.main.temp);
        const weatherIcon = data.weather[0].icon;
        setTemperature(Temp);
        setWeatherIcon(weatherIcon);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [weatherIcon]);

  return (
    <HomeMain temperature={temperature} weatherIcon={weatherIcon} aqi={aqi} />
  );
};

export default Home;
