import { useState } from "react";
import WeatherTile from "./components/weatherTile/WeatherTile";
import WeatherThemeContext, {
  T_theme,
  themeDefault,
} from "./contextProviders/themeProvider";

function App() {
  const [themeData, setThemeData] = useState<T_theme>(themeDefault);
  return (
    <div>
      <WeatherThemeContext.Provider value={themeData}>
        <WeatherTile setThemeData={setThemeData}/>
      </WeatherThemeContext.Provider>
    </div>
  );
}

export default App;
