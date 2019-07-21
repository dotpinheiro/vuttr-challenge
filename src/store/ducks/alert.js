/**
 * Types
 */
export const Types = {
  OPEN_ALERT: "alert/OPEN_ALERT",
  CLOSE_ALERT: "alert/CLOSE_ALERT"
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  open: false,
  id: null,
  message: ""
};

export default function(state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
    case Types.OPEN_ALERT:
      return {
        ...state,
        open: true,
        id: payload.id,
        message: payload.message
      };
    case Types.CLOSE_ALERT:
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
/**
 * Actions
 */
export const Creators = {
  openAlert: payload => ({ type: Types.OPEN_ALERT, payload }),
  closeAlert: () => ({
    type: Types.CLOSE_ALERT,
    payload: { open: false }
  })
};
