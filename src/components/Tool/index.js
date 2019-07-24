import React, { useEffect } from "react";
import {
  ToolWrapper,
  TagsWrapper,
  ToolHeader,
  ToolTitle,
  Tag,
  ToolDescription
} from "./styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as AlertActions } from "../../store/ducks/alert";
import { Creators as ToolActions } from "../../store/ducks/tools";
import { Button } from "../Button";

const Tool = props => {
  const { errors } = props.tools;
  const { openAlert } = props;

  /**
   * Errors Effect
   */
  useEffect(() => {
    if (errors) {
      errors.map((error, index) => {
        if (error.type === "remove") {
          let params = {
            title: "Oops!",
            message: error.message
          };
          openAlert(params);
        }
      });
    }
  }, [errors]);

  return (
    <ToolWrapper>
      <ToolHeader>
        <ToolTitle href={props.data.link ? props.data.link : null}>
          {props.data.title}
        </ToolTitle>
        <Button
          onClick={() => {
            let params = {
              id: props.data.id,
              title: "Remove Tool",
              message: `Are you sure you want to remove ${props.data.title}?`,
              buttons: [
                {
                  text: "Cancel"
                },
                {
                  text: "Yes, remove",
                  type: "danger",
                  action: () => {
                    props.removeToolRequest(props.data.id);
                  }
                }
              ]
            };
            props.openAlert(params);
          }}
        >
          <i className="fas fa-times" />
          <span>remove</span>
        </Button>
      </ToolHeader>
      <ToolDescription>{props.data.description}</ToolDescription>
      <TagsWrapper>
        {props.data.tags.map((tag, index) => (
          <Tag key={index}>#{tag}</Tag>
        ))}
      </TagsWrapper>
    </ToolWrapper>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...AlertActions, ...ToolActions }, dispatch);

const mapStateToProps = state => ({
  alert: state.alert,
  tools: state.tools
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tool);
