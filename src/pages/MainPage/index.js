import React from "react";
import Tool from "../../components/Tool";
import {
  MainWrapper,
  MainTitle,
  MainSubtitle,
  ControlsContainer,
  Header,
  AddButton
} from "./styles";
import AddToolModal from "../../components/AddToolModal";
import { connect } from "react-redux";
import { Creators as ToolsReducer } from "../../store/ducks/tools";
import Alert from "../../components/Alert";
import { bindActionCreators } from "redux";
import { Button } from "../../components/Button";
import { SearchInput } from "../../components/SearchInput";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: {
        searchInput: "",
        onlyTags: false
      }
    };
  }

  async componentDidMount() {
    this.loadTools();
  }

  loadTools = () => {
    this.props.getToolsRequest(this.state.searchParams);
  };

  removeTool = () => {
    this.props.removeToolRequest(this.props.alert.id);
  };

  render() {
    return (
      <MainWrapper>
        <Header>
          <MainTitle>VUTTR</MainTitle>
          <MainSubtitle>Very Useful Tools to Remember</MainSubtitle>
          <ControlsContainer>
            <SearchInput
              type="text"
              name="search"
              placeholder="Search"
              onChange={event => {
                this.setState(
                  {
                    searchParams: {
                      searchInput: event.target.value,
                      onlyTags: this.state.searchParams.onlyTags
                    }
                  },
                  () => {
                    this.loadTools();
                  }
                );
              }}
            />
            <label forHtml="tags">
              <input
                name="tags"
                type="checkbox"
                value={this.state.searchParams.onlyTags}
                onChange={event => {
                  this.setState(
                    {
                      searchParams: {
                        onlyTags: event.target.checked,
                        searchInput: this.state.searchParams.searchInput
                      }
                    },
                    () => {
                      this.loadTools();
                    }
                  );
                }}
              />
              <span>search in tags only</span>
            </label>
            <Button
              width={"20%"}
              onClick={() => {
                this.props.openModal();
              }}
            >
              <span>
                <i class="fas fa-plus" /> Add
              </span>
            </Button>
          </ControlsContainer>
        </Header>
        {this.props.tools.data.map((tool, index) => (
          <Tool key={index} data={tool} />
        ))}
        <AddToolModal />
        <Alert title={"Remove Tool"} onConfirm={this.removeTool} />
      </MainWrapper>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ToolsReducer, dispatch);

const mapStateToProps = state => ({
  tools: state.tools,
  alert: state.alert
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
