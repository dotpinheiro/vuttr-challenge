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
  padding: 0 0 3% 0;
  text-transform: "uppercase";
  font-weight: 600;
  color: #170c3a;
`;

export const MainSubtitle = styled.h2`
  font-size: 36px;
  padding: 0 0 5% 0;
  color: #170c3a;
`;

export const ControlsContainer = styled.div`
  display: flex;
  width: 100%;
  label {
    display: flex;
    cursor: pointer;
    align-items: center;
    margin: 0 3%;
    width: 100%;
    span {
      margin: 0 3%;
      font-size: 20px;
    }
    input {
      cursor: pointer;
    }
  }
`;

export const AddButton = styled.button`
  text-decoration: none;
  border: 1px solid;
`;

export const ErrorMsg = styled.span`
  margin: 20% 0 0 0;
  font-size: 20px;
`;

export const WarnMsg = styled.span`
  margin: 20% 0 0 0;
  cursor: pointer;
  font-size: 20px;
`;
