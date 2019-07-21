import styled from "styled-components";

export const AlertContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: ${props => (props.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const BackDrop = styled.div`
  position: fixed;
  left: 0;
  bottom: 0%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const AlertWrapper = styled.div`
  z-index: 2;
  width: 30%;
  height: 15%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;
