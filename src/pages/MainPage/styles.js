import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  padding: 5% 30%;
  align-items: center;
  flex-flow: column;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-flow: column;
  position: relative;
`;

export const MainTitle = styled.h1`
  font-size: 42px;
  text-transform: "uppercase";
  font-weight: 600;
  color: #170c3a;
`;

export const MainSubtitle = styled.h2`
  font-size: 36px;
  color: #170c3a;
`;

export const ControlsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5px;
  label {
    span {
      font-size: 20px;
    }
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    border: 1px solid #ebeaed;
    background-color: #f5f4f6;
    border-radius: 5px;
    color: #b1adb9;
    font-size: 20px;
    letter-spacing: 0.05em;
  }
`;

export const AddButton = styled.button`
  text-decoration: none;
  border: 1px solid;
`;
