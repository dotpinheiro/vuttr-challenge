import styled from "styled-components";

export const ToolWrapper = styled.div`
  width: 80%;
  margin: 2% 0;
  padding: 5% 10%;
  background-color: #fff;
  box-shadow: 0 5px 7px #ebeaed;
  :first-child {
    margin-top: 0 !important;
  }
`;

export const ToolHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const ToolTitle = styled.a`
  flex-grow: 1;
  padding: 0 5px;
  align-items: flex-start;
`;

export const ToolDescription = styled.p`
  font-size: 1em;
`;

export const RemoveButton = styled.button`
  align-items: flex-end;
`;

export const TagsWrapper = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
`;

export const Tag = styled.li`
  font-size: 0.8em;
  white-space: pre-line;
`;
