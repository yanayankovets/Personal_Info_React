import React from "react";
import {StyledCityInfo} from "./CityComponent.styled";

interface CityInfo {
  city: string;
  population: number;
  temperature: number;
  humidity: string;
  windSpeed: string;
  atmPressure: string;
  precipitation: string;
}

export const CityInfo = ({city, population, temperature, humidity, windSpeed, atmPressure, precipitation}: CityInfo) => {
  return (
    <StyledCityInfo>
      <div><b>City</b>: {city}</div>
      <div><b>Population</b>: {population}</div>
      <div><b>Temperature</b>: {temperature}</div>
      <div><b>Humidity</b>: {humidity}</div>
      <div><b>Wind Speed</b>: {windSpeed}</div>
      <div><b>Atmosphere Pressure</b>: {atmPressure}</div>
      <div><b>Precipitation</b>: {precipitation}</div>
    </StyledCityInfo>
  )
}