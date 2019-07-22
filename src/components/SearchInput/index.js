import React from "react";
import { SearchInputContainer } from "./styles";

export const SearchInput = props => (
  <SearchInputContainer>
    <i class="fas fa-search" />
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </SearchInputContainer>
);
