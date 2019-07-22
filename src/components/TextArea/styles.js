import styled from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "100%")};
  flex-flow: column;
  span {
    color: #170c3a;
    font-weight: 600;
  }
  textarea {
    border: 1px solid #ebeaed;
    font-size: 20px;
    font-family: "Source Sans Pro";
    border-radius: 5px;
    background-color: #f5f4f6;
    outline: none;
    resize: none;
  }
`;
