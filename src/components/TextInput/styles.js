import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "100%")};
  flex-flow: column;
  span {
    color: #170c3a;
    font-weight: 600;
  }
  input {
    background-color: #f5f4f6;
    font-size: 20px;
    font-family: "Source Sans Pro";
    border-radius: 5px;
    border: 1px solid #ebeaed;
  }
`;
