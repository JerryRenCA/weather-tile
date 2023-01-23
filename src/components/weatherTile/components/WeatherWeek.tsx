import React from "react";
import tw from "tailwind-styled-components";
import getWeatherIcon, {
  T_WeatherInfo,
  weatherInfo_Default,
} from "../dataProvider/weatherCode";
//types
export type T_WeekDayData = {
  day: string;
  weatherInfo: T_WeatherInfo;
  tempMinMax: number[];
};
export const weekDayData_default: T_WeekDayData[] = [
  {
    day: "Mon",
    weatherInfo: weatherInfo_Default,
    tempMinMax: [-5, 5],
  },
];
//Styled components
const Container = tw.div`from-[rgba(44,44,44,0.3)] to-[rgba(200,44,44,0.6)] bg-gradient-to-r 
 m-2 rounded-sm  h-72`;

//Module
const WeatherWeek = ({ weekDayData }: { weekDayData: T_WeekDayData[] }) => {
  const { Icon } = getWeatherIcon(0);
  return (
    <Container>
      <div className="w-full flex gap-2 p-4">
        {weekDayData.map((dayData, id) => (
          <DayData dayData={dayData} key={id} />
        ))}
      </div>
    </Container>
  );
};

//Module sub
const ColWrapper = tw.div`flex flex-col justify-start items-center gap-3 shrink-1 grow`;
const DayDiv=tw.div`uppercase border-2 rounded-md w-12 h-9 pt-1 text-center underline cursor-pointer
 border-teal-200 underline-offset-4`
 const BarDiv=tw.div`h-24 w-3 bg-blue-300 rounded-full mx-auto`
const DayData = ({ dayData }: { dayData: T_WeekDayData }) => {
  const barHeight=Math.floor(dayData.tempMinMax[3]*100).toString()+"px";
  return (
    <ColWrapper>
      <DayDiv className="">{dayData.day}</DayDiv>
      <div className="w-10 mb-2 grow">
        <dayData.weatherInfo.Icon />
      </div>
      <div className=" justify-self-end">
        <div className="relative text-lg">
          <span>{dayData.tempMinMax[1]}</span>
          <span className="absolute top-0 text-sm">o</span>
        </div>
        <BarDiv style={{"height":barHeight}}></BarDiv>
        <div className="relative text-lg">
          <span>{dayData.tempMinMax[0]}</span>
          <span className="absolute top-0 text-sm">o</span>
        </div>
      </div>
    </ColWrapper>
  );
};

export default WeatherWeek;
