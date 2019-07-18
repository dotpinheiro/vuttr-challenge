import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  padding: 5% 10%;
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
  font-size: 3em;
`;

export const MainSubtitle = styled.h2`
  font-size: 1.5em;
`;

export const ControlsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5px;
`;

export const SearchInput = styled.input`
  border: 2px solid #000;
`;

export const AddButton = styled.button`
  text-decoration: none;
  border: 1px solid;
`;
