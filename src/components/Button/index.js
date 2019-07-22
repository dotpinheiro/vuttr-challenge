import React from "react";
import { StyledButton } from "./styles";
export const Button = props => (
  <StyledButton
    danger={props.danger}
    width={props.width}
    heigth={props.heigth}
    onClick={props.onClick}
  >
    {props.children}
  </StyledButton>
);
