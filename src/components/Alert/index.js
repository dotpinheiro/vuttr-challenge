import React, { Fragment } from "react";
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

  const renderButtons = () => {
    if (props.alert.buttons.length > 0) {
      return props.alert.buttons.map((button, index) => (
        <Button
          key={index}
          height={"50%"}
          type={button.type}
          width={"20%"}
          onClick={() => {
            if (!!button.action) button.action();
            props.closeAlert();
          }}
        >
          {button.text}
        </Button>
      ));
    } else {
      return (
        <Button
          height={"50%"}
          onClick={() => {
            props.closeAlert();
          }}
        >
          Ok
        </Button>
      );
    }
  };

  return (
    <AlertContainer visible={props.alert.open}>
      <AlertWrapper>
        <AlertTitle>
          <div>
            <i
              className="fas fa-times"
              onClick={() => {
                onClose();
              }}
            />
          </div>
          <span>{props.alert.title}</span>
        </AlertTitle>
        <AlertMessage>
          <span>{props.alert.message || props.message}</span>
        </AlertMessage>
        <AlertButtons>{renderButtons()}</AlertButtons>
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
