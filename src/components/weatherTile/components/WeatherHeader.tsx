import React from "react";
import tw from "tailwind-styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
import LayersIcon from "@mui/icons-material/Layers";
const Container = tw.div`mb-4 mt-2`;
const Location = tw.select` text-center bg-transparent font-playfair outline-none 
rounded-full border-none pr-2`;
const Button = tw.button``;
const Circle = tw.button`w-[10px] h-[10px] rounded-full mx-[2px] border`;

const WeatherHeader = ({
  setCityId,
  setTempUnit,
  tempUnit,
  pageId,
  setPageId,
}: {
  setCityId: React.Dispatch<React.SetStateAction<number>>;
  setTempUnit: React.Dispatch<React.SetStateAction<number>>;
  setPageId: React.Dispatch<React.SetStateAction<number>>;
  pageId: number;
  tempUnit: number;
}) => {
  const handleSwitchTempUnit = (n: number) => {
    setTempUnit(n);
  };
  const handleCityChange = (n: number) => {
    setCityId(n);
  };
  const handleSwitchPage=(n:number)=>{setPageId(n)}
  return (
    <Container>
      <div className="flex justify-between items-center p-3 text-3xl [&>*]:cursor-pointer">
        <LocationOnOutlinedIcon fontSize="inherit" />
        <Location
          id="test"
          onChange={(e) => {
            handleCityChange(+e.target.value);
          }}
        >
          <option value="0">Halifax</option>
          <option value="1">New Minas</option>
          <option value="2">New York</option>
          <option value="3">London</option>
          <option value="4">Beijing</option>
        </Location>
        <LayersIcon fontSize="inherit" titleAccess="Change Theme" />
      </div>
      <div className="flex justify-between">
        <div className="border rounded-md [&>*]:px-[4px] overflow-hidden ml-2">
          <Button
            className={tempUnit ? "bg-red-400" : ""}
            onClick={() => handleSwitchTempUnit(1)}
          >
            F
          </Button>
          <Button
            className={tempUnit ? "" : "bg-red-400"}
            onClick={() => handleSwitchTempUnit(0)}
          >
            C
          </Button>
        </div>
        <div className="">
          <Circle className={pageId === 0 ? "bg-red-400" : ""} onClick={()=>handleSwitchPage(0)}></Circle>
          <Circle className={pageId === 1 ? "bg-red-400" : ""} onClick={()=>handleSwitchPage(1)}></Circle>
          <Circle className={pageId === 2 ? "bg-red-400" : ""} onClick={()=>handleSwitchPage(2)}></Circle>
          <Circle className={pageId === 3 ? "bg-red-400" : ""} onClick={()=>handleSwitchPage(3)}></Circle>
        </div>
        <div className="w-16 text-transparent">FC</div>
      </div>
    </Container>
  );
};
export default WeatherHeader;
