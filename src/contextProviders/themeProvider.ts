import { createContext } from "react";

export type T_theme={
    bgImg:string;
}

export const themeDefault:T_theme={
    bgImg:""
}

const WeatherThemeContext=createContext<T_theme>(themeDefault);

export default WeatherThemeContext