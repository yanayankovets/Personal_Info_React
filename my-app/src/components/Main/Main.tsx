import React from "react";
import {PersonInfo} from "../Person/PersonComponent";
import {CityInfo} from "../City/CityComponent";
import {StyledMain} from "./Main.styled";

export const Main = () => {
  return (
    <StyledMain>
      <PersonInfo
        firstName="Yana"
        lastName="Yankovets"
        age={22}
        email="yana.yankovets@gmail.com"
        github="https://github.com/yanayankovets"
      />

      <CityInfo
        city="Minsk"
        population={1.975}
        temperature={22}
        humidity="72%"
        windSpeed="18 km/h"
        atmPressure="743-744 mmHg"
        precipitation="light rain"
      />
    </StyledMain>
  )
}