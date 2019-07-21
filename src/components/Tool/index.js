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
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as AlertActions } from "../../store/ducks/alert";

const Tool = props => (
  <ToolWrapper>
    <ToolHeader>
      <ToolTitle href={props.data.link}>{props.data.title}</ToolTitle>
      <RemoveButton
        onClick={() => {
          let params = {
            id: props.data.id,
            message: `Are you sure you want to remove ${props.data.title}?`
          };
          props.openAlert(params);
        }}
      >
        x remove
      </RemoveButton>
    </ToolHeader>
    <ToolDescription>{props.data.description}</ToolDescription>
    <TagsWrapper>
      {props.data.tags.map((tag, index) => (
        <Tag key={index}>
          <pre>#{tag} </pre>
        </Tag>
      ))}
    </TagsWrapper>
  </ToolWrapper>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlertActions, dispatch);

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tool);
