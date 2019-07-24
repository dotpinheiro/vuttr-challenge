import React from "react";
import { InputContainer, ErrorMessage } from "./styles";

export const TextInput = props => (
  <InputContainer error={props.error} width={props.width}>
    <span className={"input-title"}>
      {props.title}
      {props.required && "*"}
    </span>
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
    {props.error && (
      <ErrorMessage>
        <span>{props.error}</span>
      </ErrorMessage>
    )}
  </InputContainer>
);
