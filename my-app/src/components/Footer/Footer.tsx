import React from "react";
import {StyledFooter} from "./Footer.styled";

interface Footer {
  link: string,
}

export const Footer = ({link}: Footer) => {
  return (
    <StyledFooter>
      <a href={link}>Follow the link to the React website</a>
    </StyledFooter>

  )
}