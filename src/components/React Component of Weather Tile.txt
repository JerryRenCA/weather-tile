import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import getWeatherData, { T_weatherData } from "./dataProvider/weatherData";
import tw from "tailwind-styled-components";
import { format, formatDistance, subDays } from "date-fns";
import WeatherHeader from "./components/WeatherHeader";
import WeatherADay, {
  T_DayData,
  dayData_default,
} from "./components/WeatherADay";
import WeatherHours, {
  T_DayHourData,
  hourData_default,
} from "./components/WeatherHours";
import WeatherWeek, {
  T_WeekDayData,
  weekDayData_default,
} from "./components/WeatherWeek";
import buildData from "./dataProvider/dataProvider";
import WeatherPage2 from "./components/WeatherPage2";
import WeatherThemeContext, {
  T_theme,
} from "../../contextProviders/themeProvider";

//Style Component
const Container = tw.div`text-white border-red-700 border-2 w-[30rem] h-[50rem] rounded-md 
bg-[url('/images/pexels-abdullah-ghatasheh-1631678.jpg')] bg-cover bg-opacity-80`;
const PageWrapper = tw.div`w-[30rem] inline-block h-[50rem] `;
const Pages = tw.div`w-[120rem] transition-all duration-500 ease-in-out`;
//Module
const WeatherTile = ({
  setThemeData,
}: {
  setThemeData: React.Dispatch<React.SetStateAction<T_theme>>;
}) => {
  const refPages = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const [pageId, setPageId] = useState(0); //0
  const [tempUnit, setTempUnit] = useState(0); //0 is C, 1 is F
  const [cityId, setCityId] = useState(0); // 0 - halifax, 1 - New Minas, 2 - New York, 3 - London, 4 - Beijing
  const [dayData, setDayData] = useState(dayData_default);
  const [hourData, setHourData] = useState(hourData_default);
  const [weekDayData, setWeekDayData] = useState(weekDayData_default);
  const refreshData = useCallback( async () => {
    const { dayDataFetched, dayHourDataFetched, weekDayDataFetched } =
      await buildData(cityId, tempUnit);
    setDayData(dayDataFetched);
    setHourData(dayHourDataFetched);
    setWeekDayData(weekDayDataFetched);
  },[cityId, tempUnit]);

  useEffect(() => {
    refreshData()
  }, [cityId, tempUnit]);

  useEffect(() => {
    if (refPages.current)
      refPages.current.style.transform = `translateX(${-25 * pageId}%)`;
  }, [pageId]);

  const theme = useContext(WeatherThemeContext);
  refContainer.current &&
    (refContainer.current.style.backgroundImage = theme.bgImg);

  return (
    <Container ref={refContainer}>
      <WeatherHeader
        setCityId={setCityId}
        setTempUnit={setTempUnit}
        pageId={pageId}
        setPageId={setPageId}
        tempUnit={tempUnit}
      />
      <div className=" overflow-hidden">
        <Pages ref={refPages}>
          <PageWrapper>
            <WeatherADay dayData={dayData} tempUnit={tempUnit} />
            <WeatherHours hourData={hourData} />
            <WeatherWeek weekDayData={weekDayData} />
          </PageWrapper>
          <PageWrapper className=" align-top pt-56">
            <WeatherPage2 pageId={1} />
          </PageWrapper>
          <PageWrapper className=" align-top pt-56">
            <WeatherPage2 pageId={2} />
          </PageWrapper>
          <PageWrapper className=" align-top pt-56">
            <WeatherPage2 pageId={3} />
          </PageWrapper>
        </Pages>
      </div>
    </Container>
  );
};
export default WeatherTile;
