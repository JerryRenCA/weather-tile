import React from "react";

export type T_weatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weathercode: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    weathercode: string;
    temperature_2m_min: string;
    apparent_temperature_max: string;
    apparent_temperature_min: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    weathercode: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
  };
};

const cityLocation = [
  { city: "Halifax", lat: 44.65, lon: -63.57 },
  { city: "New Minas", lat: 45.07, lon: -64.47 },
  { city: "New York", lat: 40.71, lon: -74.01},
  { city: "London", lat: 51.51, lon: -0.13},
  { city: "Beijing", lat: 39.91, lon: 116.40},
];
const tempUnitF=["&temperature_unit=fahrenheit"]

const getWeatherData = async (cityId:number,tempUnit:number) => {
  let dataUrl =
  `https://api.open-meteo.com/v1/forecast?latitude=${cityLocation[cityId].lat}&longitude=${cityLocation[cityId].lon}&timezone=AST&hourly=winddirection_10m,windspeed_10m,temperature_2m,weathercode&daily=temperature_2m_max,weathercode,temperature_2m_min,apparent_temperature_max,apparent_temperature_min`
  if(tempUnit)dataUrl+=tempUnitF
  const data: T_weatherData = await fetch(dataUrl).then((p) => p.json());
  console.count("in Fetching...");
  return data;
};

export default getWeatherData;
