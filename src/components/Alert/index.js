import React from "react";
import { connect } from "react-redux";
import { AlertContainer, AlertWrapper, BackDrop } from "./style";
import { Creators as AlertActions } from "../../store/ducks/alert";
import { bindActionCreators } from "redux";
import Proptypes from "prop-types";

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
        <div>
          <span>{props.title}</span>
        </div>
        <div>
          <span>{props.alert.message || props.message}</span>
        </div>
        <div>
          <button
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
            }}
          >
            Yes
          </button>
        </div>
      </AlertWrapper>
      <BackDrop />
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
