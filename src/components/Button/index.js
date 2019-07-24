import React from "react";
import { StyledButton } from "./styles";
export const Button = props => (
  <StyledButton
    type={props.type}
    width={props.width}
    heigth={props.heigth}
    onClick={props.onClick}
  >
    <span>{props.children}</span>
  </StyledButton>
);
