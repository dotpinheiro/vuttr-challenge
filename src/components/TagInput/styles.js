import styled from "styled-components";

export const TagInputContainer = styled.div`
  display: flex;
  width: ${props => (props.width ? props.width : "100%")};
  flex-flow: column;
  justify-content: center;
  span {
    color: #170c3a;
    font-weight: 600;
  }
  input {
    font-size: 20px;
    width: 25%;
    border: none;
    font-family: "Source Sans Pro";
    background-color: #f5f4f6;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const TagInputWrapper = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  border-radius: 5px;
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
`;

export const TagsList = styled.ul`
  display: inline-block;
  li {
    list-style: none;
    margin: 1%;
    display: inline-block;
    border: 1px solid #ebeaed;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      padding: 5px 5px;
      border-radius: 5px;
      height: 15px;
      .tag-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .close-icon {
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          cursor: pointer;
          line-height: inherit !important;
          color: #c7c4cd;
          font-size: 12px;
        }
      }

      span {
        color: #170c3a;
        font-size: 16px;
      }
    }
  }
`;
