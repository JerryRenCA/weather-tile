import React, { useRef, useState } from "react";
import tw from "tailwind-styled-components";
import getWeatherIcon, {
  T_WeatherIcon,
  T_WeatherInfo,
  weatherInfo_Default,
} from "../dataProvider/weatherCode";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";

//type
export type T_DayHourData = {
  hour: string;
  weatherInfo: T_WeatherInfo;
  temp: number;
};
export const hourData_default: T_DayHourData[] = [
  {
    hour: "01",
    weatherInfo: weatherInfo_Default,
    temp: 5,
  },
];
//Styled components
const Container = tw.div`from-[rgba(44,44,44,0.3)] to-red-400 bg-gradient-to-r
h-36 m-2 rounded-sm flex gap-2 relative`;
const CircleDiv = tw.div`text-3xl w-10 h-10 rounded-full text-center mx-4 bg-[rgba(44,44,44,0.2)] cursor-pointer
text-blue-300 opacity-60 hover:opacity-100`;
//Module
const WeatherHours = ({ hourData }: { hourData: T_DayHourData[] }) => {
  const refWrapper = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const handleSlideLeftRight = (dir: number) => {
    setOffset((prev) => {
      let p = prev + 8*(dir == 0 ? -1 : 1);
      if (p > 0) p = 0;
      if (p <-85) p = -85;
      return p;
    });
  };
  if (refWrapper.current)
    refWrapper.current.style.transform = `translateX(${offset}rem)`;
  return (
    <Container>
      <div className=" overflow-hidden mt-3">
        <div ref={refWrapper} className="m-auto flex gap-6 ml-6 ">
          {hourData.map((d, id) => (
            <HourDataTag hourData={d} key={id} />
          ))}
        </div>
      </div>
      <div className="absolute w-full h-full flex justify-between items-center">
        <CircleDiv
          className=" rotate-180 "
          onClick={(e) => handleSlideLeftRight(0)}
        >
          <DoubleArrowOutlinedIcon fontSize="inherit" />
        </CircleDiv>
        <CircleDiv className=" " onMouseDown={()=>handleSlideLeftRight(1)}>
          <DoubleArrowOutlinedIcon fontSize="inherit" />
        </CircleDiv>
      </div>
    </Container>
  );
};
//Module Sub
const ColWrapper = tw.div`flex flex-col justify-center items-center gap-2`;
const HourDataTag = ({ hourData }: { hourData: T_DayHourData }) => {
  return (
    <ColWrapper>
      <div className="text-xl">{hourData.hour}</div>
      <div className="w-12 mb-1" title={hourData.weatherInfo.desc}>
        <hourData.weatherInfo.Icon />
      </div>
      <div className="relative text-xl">
        <span className=" font-mono">{hourData.temp}</span>
        <span className="absolute top-[-2px] text-base">o</span>
      </div>
    </ColWrapper>
  );
};
export default WeatherHours;
