import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "100%")};
  flex-flow: column;
  span {
  }
  input {
    border: 1px solid;
  }
`;
