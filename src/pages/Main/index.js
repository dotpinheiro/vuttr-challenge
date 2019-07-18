import React from "react";
import Tool from "../../components/Tool";
import {
  MainWrapper,
  MainTitle,
  MainSubtitle,
  ControlsContainer,
  Header,
  SearchInput,
  AddButton
} from "./styles";

const Main = () => (
  <MainWrapper>
    <Header>
      <MainTitle>VUTTR</MainTitle>
      <MainSubtitle>Very Useful Tools to Remember</MainSubtitle>
      <ControlsContainer>
        <SearchInput type="text" placeholder="Search" />
        <input type="checkbox" /> <span>search in tags only</span>
        <AddButton>Add</AddButton>
      </ControlsContainer>
    </Header>
    <Tool />
  </MainWrapper>
);

export default Main;
