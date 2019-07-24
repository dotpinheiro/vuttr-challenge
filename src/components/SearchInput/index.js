import React from "react";
import { SearchInputContainer } from "./styles";
import { debounce } from "lodash";
export const SearchInput = props => {
  const onChangeHandler = debounce(value => {
    props.onChange(value);
  }, 500);

  return (
    <SearchInputContainer width={props.width}>
      <i className="fas fa-search" />
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => onChangeHandler(e.target.value)}
      />
    </SearchInputContainer>
  );
};
