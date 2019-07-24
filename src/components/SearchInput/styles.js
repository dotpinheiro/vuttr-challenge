import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${props => (props.width ? props.width : "50%")};
  justify-content: center;
  border-radius: 5px;
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  i {
    font-size: 14px;
    width: 15px;
    height: 15px;
    padding: 3% 3%;
    color: #b1adb9;
  }
  input {
    background-color: #f5f4f6;
    width: 100%;
    border: none;
    color: #b1adb9;
    font-size: 14px;
    letter-spacing: 0.05em;
  }
`;
