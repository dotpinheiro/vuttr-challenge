import styled from "styled-components";

export const TagInputContainer = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "100%")};
  flex-flow: column;
  span {
  }
  input {
    border: 1px solid;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const TagInputWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const TagsList = styled.ul`
  display: flex;
  li {
    list-style: none;
  }
`;
