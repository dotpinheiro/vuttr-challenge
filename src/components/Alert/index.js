import React from "react";
import { connect } from "react-redux";
import {
  AlertContainer,
  AlertWrapper,
  BackDrop,
  AlertTitle,
  AlertMessage,
  AlertButtons
} from "./style";
import { Creators as AlertActions } from "../../store/ducks/alert";
import { bindActionCreators } from "redux";
import Proptypes from "prop-types";
import { Button } from "../Button";

const Alert = props => {
  const onClose = () => {
    props.onClose();
    props.closeAlert();
  };

  const onConfirm = () => {
    props.onConfirm();
    props.closeAlert();
  };

  return (
    <AlertContainer visible={props.alert.open}>
      <AlertWrapper>
        <AlertTitle>
          <div>
            <i
              class="fas fa-times"
              onClick={() => {
                onClose();
              }}
            />
          </div>
          <span>{props.title}</span>
        </AlertTitle>
        <AlertMessage>
          <span>{props.alert.message || props.message}</span>
        </AlertMessage>
        <AlertButtons>
          <Button
            height={"50%"}
            width={"15%"}
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            danger
            height={"50%"}
            width={"25%"}
            onClick={() => {
              onConfirm();
            }}
          >
            Yes, remove
          </Button>
        </AlertButtons>
      </AlertWrapper>
      <BackDrop
        onClick={() => {
          onClose();
        }}
      />
    </AlertContainer>
  );
};

Alert.propTypes = {
  title: Proptypes.string,
  message: Proptypes.string,
  onClose: Proptypes.func,
  onConfirm: Proptypes.func,
  alert: Proptypes.object,
  handleAlert: Proptypes.func
};
Alert.defaultProps = {
  title: "Alert",
  message: "Are you sure?",
  onClose: () => {},
  onConfirm: () => {}
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlertActions, dispatch);

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
