// import React from "react";
import tw from "tailwind-styled-components";
import { format } from "date-fns";
import getWeatherInfo, { T_WeatherIcon } from "../dataProvider/weatherCode";
import { ReactComponent as WCode_0 } from "/src/assets/usedSvgs/0-wi-day-sunny.svg";

//type
export type T_DayData = {
  date: Date;
  weatherCode: { Icon: T_WeatherIcon; desc: string };
  temp: { unit: number; curr: number; min: number; max: number };
  wind: { direction: string; speed: number };
};
export const dayData_default: T_DayData = {
  date: new Date(),
  weatherCode: { Icon: WCode_0, desc: "string" },
  temp: { unit: 0, curr: 0, min: 0, max: 0 },
  wind: { direction: "", speed: 0 },
};

//Style Components
const Container = tw.div`from-[rgba(44,44,44,0.3)] to-red-300 bg-gradient-to-r h-56 m-2 pl-2 rounded-sm`;
const LeftDiv = tw.div` flex justify-around items-start mt-8 `;
const MidDiv = tw.div` flex justify-around items-start mt-6`;
const RightDiv = tw.div` flex justify-center flex-col items-center`;
const DateDiv = tw.div` font-playfair`;
const TempDiv = tw.div` font-playfair`;
const WindDiv = tw.div` font-playfair absolute pt-4`;
const BlinkSpan=tw.span`px-1 animate-blink `
//Module
const WeatherADay = ({ dayData,tempUnit }: { dayData: T_DayData;tempUnit:number }) => {

  const theDate = new Date();
  const CF_Icon= getWeatherInfo(1000+tempUnit).Icon
  return (
    <Container>
      <div className="flex h-full justify-around">
        <LeftDiv>
          <DateDiv className="text-lg ">
            <div>{format(theDate, "E.dd/MM/yyyy")}</div>
            <div className=" text-3xl py-2">
              <span>{format(theDate, "hh")}</span>
              <BlinkSpan >:</BlinkSpan>
              <span>{format(theDate, "mm")}</span>
              <span className="text-base px-1">{format(theDate, "b")}</span>
            </div>
            <WindDiv>
              <div>Wind Speed: <span>{dayData.wind.speed} km/h</span></div>
            </WindDiv>
          </DateDiv>
        </LeftDiv>
        <MidDiv>
          <TempDiv>
            <div className="relative">
              <span className="text-8xl">{dayData.temp.curr}</span>
              <span className=" absolute  inline-block w-16 top-[-10px] right-[-3rem] font-bolder"><CF_Icon /></span>
            </div>
          </TempDiv>
        </MidDiv>
        <RightDiv>
          <dayData.weatherCode.Icon className="w-[5rem] text-white " />
          <div className="text-xl font-mono text-center">{dayData.weatherCode.desc}</div>
          <div className="mt-2 w-20 font-playfair relative">
            <span>Max: </span> <span>{dayData.temp.max}</span>
            <span className="absolute top-[-4px] text-sm pl-1">o</span>
          </div>
          <div className="w-20 font-playfair relative">
            <span>Min: </span> <span>{dayData.temp.min}</span>
            <span className="absolute top-[-4px]  pl-1 text-sm">o</span>
          </div>
        </RightDiv>
      </div>
    </Container>
  );
};
export default WeatherADay;
