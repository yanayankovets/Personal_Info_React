import React from "react";
import {StyledPersonInfo} from "./PersonComponent.styled";


interface PersonInfo {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  github: string;
}

export const PersonInfo = ({firstName, lastName, age, email, github}: PersonInfo) => {
  return (
    <StyledPersonInfo>
      <div><b>First Name</b>: {firstName}</div>
      <div><b>Last Name</b>: {lastName}</div>
      <div><b>Age</b>: {age}</div>
      <div><b>E-mail</b>: {email}</div>
      <div><b>GitHub</b>: {github}</div>
    </StyledPersonInfo>
  )
}