import React from "react";

import { T_DayData } from "../components/WeatherADay";
import { T_DayHourData } from "../components/WeatherHours";
import { T_WeekDayData } from "../components/WeatherWeek";
import getWeatherData, { T_weatherData } from "./weatherData";
import { format } from "date-fns";
import getWeatherInfo from "./weatherCode";

const getTimeId = (timeArr: string[], aDate: Date) => {
  const str = format(aDate, "yyyy-MM-dd") + "T" + format(aDate, "HH:00");
  const id = timeArr.indexOf(str);
  if (id == -1) throw new Error();
  return id;
};
const getDayId = (timeArr: string[], aDate: Date) => {
  const str = format(aDate, "yyyy-MM-dd");
  const id = timeArr.indexOf(str);
  if (id == -1) throw new Error();
  return id;
};
const buildData = async (cityId:number,tempUnit:number) => {
  // console.count("buildData");
  const fetchedData = await getWeatherData(cityId,tempUnit);

  return {
    dayDataFetched: getDayData(fetchedData),
    dayHourDataFetched: getDayHourData(fetchedData),
    weekDayDataFetched: getWeekData(fetchedData),
  };
};

function getDayData(fetchedData: T_weatherData) {
  const aDate = new Date();
  const timeId = getTimeId(fetchedData.hourly.time, aDate);
  const dayId = getDayId(fetchedData.daily.time, aDate);
  const aWeatherCode = {
    ...getWeatherInfo(fetchedData.hourly.weathercode[timeId]),
  };
  const a_dayData: T_DayData = {
    date: new Date(),
    weatherCode: aWeatherCode,
    temp: {
      unit: 0,
      curr: fetchedData.hourly.temperature_2m[timeId],
      min: fetchedData.daily.temperature_2m_min[dayId],
      max: fetchedData.daily.temperature_2m_max[dayId],
    },
    wind: {
      direction: "North",
      speed: fetchedData.hourly.windspeed_10m[timeId],
    },
  };
  return a_dayData;
}

function getDayHourData(fetchedData: T_weatherData) {
  const aDate = new Date();
  const filterDateStr = format(aDate, "yyyy-MM-dd");
  const a_dayHourData: T_DayHourData[] = [];
  for (let i = 0; i < fetchedData.hourly.time.length; i++) {
    if (fetchedData.hourly.time[i].startsWith(filterDateStr)) {
      a_dayHourData.push({
        hour: fetchedData.hourly.time[i].slice(-5),
        weatherInfo: getWeatherInfo(fetchedData.hourly.weathercode[i]),
        temp: fetchedData.hourly.temperature_2m[i],
      });
    }
  }
  return a_dayHourData;
}

function getWeekData(fetchedData: T_weatherData) {
  const a_weekDayData: T_WeekDayData[] = [];
  for (let i = 0; i < fetchedData.daily.time.length; i++) {
    const aDate = new Date(fetchedData.daily.time[i]);
    a_weekDayData.push({
      day: format(aDate, "E"),
      weatherInfo: getWeatherInfo(fetchedData.daily.weathercode[i]),
      tempMinMax: [
        fetchedData.daily.temperature_2m_min[i],
        fetchedData.daily.temperature_2m_max[i],
        fetchedData.daily.temperature_2m_max[i] -
          fetchedData.daily.temperature_2m_min[i],
      ],
    });
  }
  const max_v = a_weekDayData.reduce((pre, m) => {
    return pre < m.tempMinMax[2] ? m.tempMinMax[2] : pre;
  }, 0);
  const avg_v =
    a_weekDayData.reduce((pre, m) => {
      return pre + m.tempMinMax[2];
    }, 0) / 7;
  a_weekDayData.map((d) =>
    d.tempMinMax.push((avg_v + d.tempMinMax[2]) / (max_v + avg_v))
  );
  return a_weekDayData;
}
export default buildData;
