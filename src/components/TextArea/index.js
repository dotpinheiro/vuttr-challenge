import React from "react";
import { TextAreaContainer } from "./styles";

export const TextArea = props => (
  <TextAreaContainer>
    <span>{props.title}</span>
    <textarea
      cols={props.cols}
      rows={props.rows}
      onChange={props.onChange}
      value={props.value}
    />
  </TextAreaContainer>
);
