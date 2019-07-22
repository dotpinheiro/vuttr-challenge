import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  /* width: 50px; */
  width: ${props => (props.width ? props.width : "30%")};
  height: ${props => (props.height ? props.height : "25px")};
  color: #fff;
  background-color: #365df0;
  background-color: ${props => props.danger && "#F95E5A"};
  border-radius: 5px;
  transition: 0.3s ease-in;
  cursor: pointer;
  :hover {
    background-color: #2f55cc;
    background-color: ${props => props.danger && "#CC4C4C"};
  }
  :active {
    background-color: #244aa8;
    background-color: ${props => props.danger && "#A53F3F"};
  }
  :disabled {
    background-color: #b9c6fa;
    background-color: ${props => props.danger && "#FCAEAC"};
  }
`;
