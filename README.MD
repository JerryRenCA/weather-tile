
Usage:
S1: npm i
S2: npm run dev
S3: localhost:5173 

a> data fetch from https://open-meteo.com/

b> data url: https://api.open-meteo.com/v1/forecast?latitude=44.65&longitude=-63.57&timezone=AST&hourly=winddirection_10m,windspeed_10m,temperature_2m,weathercode&daily=temperature_2m_max,weathercode,temperature_2m_min,apparent_temperature_max,apparent_temperature_min

c> data format
  type T_weatherData={
    latitude:number;
    longitude:number;
    generationtime_ms:number;
    utc_offset_seconds:number;
    timezone:string;
    timezone_abbreviation:string;
    elevation:number;
    hourly_units:{
        time:string;
        temperature_2m:string
    }
    ............
  }

d> date-fns usage: https://www.section.io/engineering-education/javascript-dates-manipulation-with-date-fns/

e> WMO Weather interpretation codes (WW)
    Code	Description
    0	Clear sky
    1, 2, 3	Mainly clear, partly cloudy, and overcast
    45, 48	Fog and depositing rime fog
    51, 53, 55	Drizzle: Light, moderate, and dense intensity
    56, 57	Freezing Drizzle: Light and dense intensity
    61, 63, 65	Rain: Slight, moderate and heavy intensity
    66, 67	Freezing Rain: Light and heavy intensity
    71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
    77	Snow grains
    80, 81, 82	Rain showers: Slight, moderate, and violent
    85, 86	Snow showers slight and heavy
    95 *	Thunderstorm: Slight or moderate
    96, 99 *	Thunderstorm with slight and heavy hail

f>  npm i vite-plugin-svgr
g>  Vite config
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import svgr from '@honkhonk/vite-plugin-svgr'

    export default defineConfig({
      plugins: [ svgr(), react()]
    })

h>  In vite-env.d.ts file, append : 
    /// <reference types="vite-plugin-svgr/client" />
    import { ReactComponent as FbLogo } from '../Icons/facebook_logo.svg'

i>  Change svg color: in the svg file, append  fill="currentColor"