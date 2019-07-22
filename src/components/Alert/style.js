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
  height: 20%;
  background-color: #fff;
  display: flex;
  border-radius: 3px;
  flex-flow: column;
`;

export const AlertTitle = styled.div`
  display: flex;
  width: 100%;
  margin: 5%;
  align-items: center;
  justify-content: flex-start;
  div {
    height: 24px;
    width: 24px;
    i {
      height: 100%;
      padding: 2px;
      font-size: 20px;
      width: 100%;
      cursor: pointer;
    }
  }

  span {
    margin: 0 2%;
  }
`;

export const AlertMessage = styled.div`
  display: flex;
  width: 100%;
  margin: 0 5%;
  align-items: center;
  justify-content: flex-start;
`;

export const AlertButtons = styled.div`
  display: flex;
  width: 90%;
  padding: 0 5%;
  align-items: center;
  justify-content: flex-end;
  button {
    margin: 5% 3%;
  }
`;
