import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "100%")};
  flex-flow: column;
  .input-title {
    color: #170c3a;
    font-weight: 600;
  }
  input {
    background-color: ${props => (props.error ? "#FEEFEE" : "#f5f4f6")};
    border: ${props =>
      props.error ? "1px solid #F95E5A" : "1px solid #ebeaed"};
    font-size: 20px;
    font-family: "Source Sans Pro";
    border-radius: 5px;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  span {
    font-size: 14px;
    color: #f95e5a;
  }
`;
