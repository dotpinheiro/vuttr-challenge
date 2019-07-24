import React, { useState, useEffect } from "react";
import {
  AddToolContainer,
  AddToolContent,
  MainTitle,
  Footer,
  FormWrapper,
  BackDrop
} from "./styles";
import { TextInput } from "../TextInput";
import { TextArea } from "../TextArea";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as toolsActions } from "../../store/ducks/tools";
import { Creators as alertActions } from "../../store/ducks/alert";
import TagInput from "../TagInput";
import { Button } from "../Button";

const AddToolModal = props => {
  const [toolName, setToolName] = useState("");
  const [toolLink, setToolLink] = useState("");
  const [toolDescription, setToolDescription] = useState("");
  const [toolTags, setToolTags] = useState([]);
  const { errors } = props.tools;
  const { openAlert } = props;
  const [formError, setFormError] = useState({
    toolName: { error: false }
  });

  /**
   * Errors Effect
   */
  useEffect(() => {
    if (errors) {
      errors.map((error, index) => {
        if (error.type === "add") {
          let params = {
            title: "Oops!",
            message: error.message
          };
          openAlert(params);
        }
      });
    }
  }, [errors]);

  const clearForm = () => {
    setToolName("");
    setToolLink("");
    setToolDescription("");
    setToolTags([]);
  };

  const validateForm = () => {
    if (toolName.trim() === "") {
      let data = {
        toolName: { error: "Insert a tool name" }
      };
      setFormError(data);
      return false;
    }
    let data = {
      toolName: { error: false }
    };
    setFormError(data);
    return true;
  };

  const addTool = () => {
    let data = {
      title: toolName,
      link: toolLink,
      description: toolDescription,
      tags: toolTags
    };
    let formValidation = validateForm();
    if (formValidation) {
      props.addToolRequest(data);
      props.closeModal();
      clearForm();
    }
  };
  return (
    <AddToolContainer visible={props.tools.visible}>
      <AddToolContent>
        <MainTitle>
          <span>
            <i className="fas fa-plus" /> Add new tool
          </span>
        </MainTitle>
        <FormWrapper>
          <TextInput
            type={"text"}
            title={"Tool Name"}
            required
            error={formError.toolName.error}
            value={toolName}
            onChange={event => {
              setToolName(event.target.value);
              validateForm();
            }}
          />
          <TextInput
            type={"text"}
            title={"Tool Link"}
            value={toolLink}
            onChange={event => {
              setToolLink(event.target.value);
            }}
          />
          <TextArea
            title={"Tool Description"}
            cols={20}
            rows={3}
            value={toolDescription}
            onChange={event => {
              setToolDescription(event.target.value);
            }}
          />
          <TagInput
            title={"Tags"}
            value={toolTags}
            onChange={tags => {
              setToolTags(tags);
            }}
          />
          <Footer>
            <Button
              width={"20%"}
              onClick={() => {
                addTool();
              }}
            >
              <span>Add Tool</span>
            </Button>
          </Footer>
        </FormWrapper>
      </AddToolContent>
      <BackDrop
        onClick={() => {
          props.closeModal();
        }}
      />
    </AddToolContainer>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...toolsActions, ...alertActions }, dispatch);
const mapStateToProps = state => ({
  tools: state.tools
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToolModal);
