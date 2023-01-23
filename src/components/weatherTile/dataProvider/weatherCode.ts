import { ReactComponentElement } from "react";
import { ReactComponent as WCode_0 } from "/src/assets/usedSvgs/0-wi-day-sunny.svg";
import { ReactComponent as WCode_1 } from "../../../assets/usedSvgs/1-wi-day-cloudy-high.svg";
import { ReactComponent as WCode_2 } from "/src/assets/usedSvgs/2-wi-day-cloudy.svg";
import { ReactComponent as WCode_3 } from "/src/assets/usedSvgs/3-wi-cloudy.svg";
import { ReactComponent as WCode_45 } from "/src/assets/usedSvgs/45-wi-fog.svg";
import { ReactComponent as WCode_48 } from "/src/assets/usedSvgs/48-wi-windy.svg";
import { ReactComponent as WCode_51 } from "/src/assets/usedSvgs/51-wi-rain-mix.svg";
import { ReactComponent as WCode_53 } from "/src/assets/usedSvgs/53-wi-rain-wind.svg";
import { ReactComponent as WCode_55 } from "/src/assets/usedSvgs/55-wi-rain.svg";
import { ReactComponent as WCode_56 } from "/src/assets/usedSvgs/56-wi-day-rain-mix.svg";
import { ReactComponent as WCode_57 } from "/src/assets/usedSvgs/57-wi-day-rain-wind.svg";
import { ReactComponent as WCode_61 } from "/src/assets/usedSvgs/61-wi-rain-mix.svg";
import { ReactComponent as WCode_63 } from "/src/assets/usedSvgs/63-wi-rain-wind.svg";
import { ReactComponent as WCode_65 } from "/src/assets/usedSvgs/65-wi-rain.svg";
import { ReactComponent as WCode_66 } from "/src/assets/usedSvgs/66-wi-day-rain-mix.svg";
import { ReactComponent as WCode_67 } from "/src/assets/usedSvgs/67-wi-day-rain-wind.svg";
import { ReactComponent as WCode_71 } from "/src/assets/usedSvgs/71-wi-snow.svg";
import { ReactComponent as WCode_73 } from "/src/assets/usedSvgs/73-wi-sleet.svg";
import { ReactComponent as WCode_75 } from "/src/assets/usedSvgs/75-wi-showers.svg";
import { ReactComponent as WCode_77 } from "/src/assets/usedSvgs/77-wi-hail.svg";
import { ReactComponent as WCode_80 } from "/src/assets/usedSvgs/80-wi-rain-mix.svg";
import { ReactComponent as WCode_81 } from "/src/assets/usedSvgs/81-wi-rain-wind.svg";
import { ReactComponent as WCode_82 } from "/src/assets/usedSvgs/82-wi-rain.svg";
import { ReactComponent as WCode_85 } from "/src/assets/usedSvgs/85-wi-showers.svg";
import { ReactComponent as WCode_86 } from "/src/assets/usedSvgs/86-wi-sleet.svg";
import { ReactComponent as WCode_95 } from "/src/assets/usedSvgs/95-wi-day-lightning.svg";
import { ReactComponent as WCode_96 } from "/src/assets/usedSvgs/96-wi-day-sleet-storm.svg";
import { ReactComponent as WCode_99 } from "/src/assets/usedSvgs/99-wi-day-thunderstorm.svg";
import { ReactComponent as WCode_C } from "/src/assets/usedSvgs/C-wi-celsius.svg";
import { ReactComponent as WCode_F } from "/src/assets/usedSvgs/F-wi-fahrenheit.svg";

export type T_WeatherIcon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
export type T_WeatherInfo = { Icon: T_WeatherIcon; desc: string };
export const weatherInfo_Default={Icon:WCode_0,desc:"Clear Sky"}

export const WeatherIconSet: { [key: number]: T_WeatherInfo } = {
  0: { Icon: WCode_0, desc: "Clear Sky" },
  1: { Icon: WCode_1, desc: "Mainly clear" },
  2: { Icon: WCode_2, desc: "Partly cloudy" },
  3: { Icon: WCode_3, desc: "Overcast" },
  45: { Icon: WCode_45, desc: "Fog" },
  48: { Icon: WCode_48, desc: "Depositing rime fog" },
  51: { Icon: WCode_51, desc: "Light drizzle" },
  53: { Icon: WCode_53, desc: "Moderate drizzle" },
  55: { Icon: WCode_55, desc: "Dense drizzle" },
  56: { Icon: WCode_56, desc: "Light freezing drizzle" },
  57: { Icon: WCode_57, desc: "Dense freezing drizzle" },
  61: { Icon: WCode_61, desc: "Slight rain" },
  63: { Icon: WCode_63, desc: "Moderate rain" },
  65: { Icon: WCode_65, desc: "Heavy rain" },
  66: { Icon: WCode_66, desc: "Light freezing rain" },
  67: { Icon: WCode_67, desc: "Heavy freezing rain" },
  71: { Icon: WCode_71, desc: "Slight snow" },
  73: { Icon: WCode_73, desc: "Moderate snow" },
  75: { Icon: WCode_75, desc: "Heavy snow" },
  77: { Icon: WCode_77, desc: "Snow grains" },
  80: { Icon: WCode_80, desc: "Slight shower" },
  81: { Icon: WCode_81, desc: "Moderate shower" },
  82: { Icon: WCode_82, desc: "Heavy shower" },
  85: { Icon: WCode_85, desc: "Light snow shower" },
  86: { Icon: WCode_86, desc: "Heavy snow shower" },
  95: { Icon: WCode_95, desc: "Thunderstorm" },
  96: { Icon: WCode_96, desc: "Thunderstorm with slight hail" },
  99: { Icon: WCode_99, desc: "Thunderstorm with heavy hail" },
  1000: { Icon: WCode_C, desc: "Temp unit C" },
  1001: { Icon: WCode_F, desc: "Temp unit F" },
};

const getWeatherInfo = (weatherCode: number) => {
  const weatherInfo = WeatherIconSet[weatherCode];
  // console.log('weatherCode',weatherCode,weatherInfo)
  weatherInfo || console.log("Icon null");
  return weatherInfo;
};


export default getWeatherInfo;
