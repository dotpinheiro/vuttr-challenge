import React, { useState } from "react";
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
import TagInput from "../TagInput";
import { Button } from "../Button";

const AddToolModal = props => {
  const [toolName, setToolName] = useState("");
  const [toolLink, setToolLink] = useState("");
  const [toolDescription, setToolDescription] = useState("");
  const [toolTags, setToolTags] = useState("");

  const clearForm = () => {
    setToolName("");
    setToolLink("");
    setToolDescription("");
    setToolTags([]);
  };

  const addTool = () => {
    let data = {
      title: toolName,
      link: toolLink,
      description: toolDescription,
      tags: toolTags
    };
    props.addToolRequest(data);
    props.closeModal();
    clearForm();
  };
  return (
    <AddToolContainer visible={props.tools.visible}>
      <AddToolContent>
        <MainTitle>
          <span>
            <i class="fas fa-plus" /> Add new tool
          </span>
        </MainTitle>
        <FormWrapper>
          <TextInput
            type={"text"}
            title={"Tool Name"}
            required
            value={toolName}
            onChange={event => {
              setToolName(event.target.value);
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
            onTagAdded={tags => {
              setToolTags(tags.value);
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
  bindActionCreators(toolsActions, dispatch);
const mapStateToProps = state => ({
  tools: state.tools
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToolModal);
