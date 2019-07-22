import styled from "styled-components";

export const ToolWrapper = styled.div`
  width: 94%;
  margin: 2% 0;
  padding: 5% 3%;
  background-color: #fff;
  box-shadow: 0 5px 7px #ebeaed;
  :first-child {
    margin-top: 0 !important;
  }
`;

export const ToolHeader = styled.div`
  width: 100%;
  display: flex;
  button {
    i {
      font-size: 12px;
      margin: 0 5%;
    }
    span {
      font-size: 14px;
    }
  }
`;

export const ToolTitle = styled.a`
  flex-grow: 1;
  width: 100%;
  justify-content: flex-start;
`;

export const ToolDescription = styled.p`
  font-size: 0.8em;
  margin: 1% 0 2% 0;
`;

export const RemoveButton = styled.button`
  align-items: flex-end;
`;

export const TagsWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Tag = styled.li`
  font-size: 0.8em;
  margin: 0 1%;
  font-weight: 600;
  :first-child {
    margin-left: 0;
  }
`;
