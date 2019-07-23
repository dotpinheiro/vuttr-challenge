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
    width: 20px;
    height: 20px;
    padding: 3% 3%;
    color: #b1adb9;
  }
  input {
    background-color: #f5f4f6;
    border: none;
    color: #b1adb9;
    font-size: 20px;
    letter-spacing: 0.05em;
  }
`;
