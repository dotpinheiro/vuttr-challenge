import React from "react";
import Tool from "../../components/Tool";
import {
  MainWrapper,
  MainTitle,
  MainSubtitle,
  ControlsContainer,
  ErrorMsg,
  Header,
  WarnMsg
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

  renderTools = () => {
    if (this.props.tools.errors && this.props.tools.data.length === 0) {
      return this.props.tools.errors.map((error, index) =>
        error.type == "load" ? (
          <ErrorMsg key={index}>{error.message}</ErrorMsg>
        ) : null
      );
    }

    if (this.props.tools.data.length === 0) {
      return (
        <WarnMsg
          onClick={() => {
            this.props.openModal();
          }}
        >
          There's no tool yet, click on me to add the first one (:
        </WarnMsg>
      );
    }

    return this.props.tools.data.map((tool, index) => (
      <Tool key={index} data={tool} />
    ));
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
              width={"40%"}
              placeholder="Search"
              onChange={value => {
                this.setState(
                  {
                    searchParams: {
                      searchInput: value,
                      onlyTags: this.state.searchParams.onlyTags
                    }
                  },
                  () => {
                    this.loadTools();
                  }
                );
              }}
            />
            <label forhtml="tags">
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
                <i className="fas fa-plus" /> Add
              </span>
            </Button>
          </ControlsContainer>
        </Header>
        {this.renderTools()}
        <AddToolModal />
        <Alert />
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
