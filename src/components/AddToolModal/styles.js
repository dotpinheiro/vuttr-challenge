import styled from "styled-components";

export const AddToolContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: ${props => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-flow: column;
  top: 0;
  overflow: auto;
  left: 0;
  transition: 300ms ease-in all;
`;

export const BackDrop = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const AddToolContent = styled.div`
  position: relative;
  z-index: 2;
  width: 35%;
  height: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column;
`;

export const MainTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  span {
    padding: 3%;
    width: 100%;
    font-size: 1.5em;
    font-weight: bold;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 80%;
  height: 100%;
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    text-decoration: none;
    border: 1px solid;
  }
`;
