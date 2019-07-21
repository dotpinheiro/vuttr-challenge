import styled from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "100%")};
  flex-flow: column;
  span {
  }
  textarea {
    border: 1px solid;
    outline: none;
    resize: none;
  }
`;
