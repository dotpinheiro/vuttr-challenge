import React from "react";
import {
  ToolWrapper,
  TagsWrapper,
  ToolHeader,
  ToolTitle,
  RemoveButton,
  Tag,
  ToolDescription
} from "./styles";

const Tool = () => (
  <ToolWrapper>
    <ToolHeader>
      <ToolTitle href="#">Notion</ToolTitle>
      <RemoveButton>x remove</RemoveButton>
    </ToolHeader>
    <ToolDescription>
      All in one tool to organize teams and ideas
    </ToolDescription>
    <TagsWrapper>
      <Tag>#organization</Tag>
      <Tag>#planning</Tag>
      <Tag>#collaboration</Tag>
    </TagsWrapper>
  </ToolWrapper>
);

export default Tool;
