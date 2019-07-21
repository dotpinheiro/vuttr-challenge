import React from "react";
import { InputContainer } from "./styles";

export const TextInput = props => (
  <InputContainer>
    <span>{props.title}</span>
    <input type={props.type} onChange={props.onChange} value={props.value} />
  </InputContainer>
);
