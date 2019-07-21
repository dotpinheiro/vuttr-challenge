/**
 * Types
 */
export const Types = {
  OPEN_MODAL: "tools/OPEN_MODAL",
  CLOSE_MODAL: "tools/CLOSE_MODAL",
  GET_TOOLS_REQUEST: "GET_TOOLS_REQUEST",
  GET_TOOLS_SUCCESS: "GET_TOOLS_SUCCESS",
  ADD_TOOL_REQUEST: "ADD_TOOL_REQUEST",
  ADD_TOOL_SUCCESS: "ADD_TOOL_SUCCESS",
  REMOVE_TOOL_REQUEST: "tools/REMOVE_TOOL_REQUEST",
  REMOVE_TOOL_SUCCESS: "tools/REMOVE_TOOL_SUCCESS"
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  visible: false,
  data: []
};

export default function tools(state = INITIAL_STATE, action) {
  const { payload } = action;
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, visible: true };
    case Types.CLOSE_MODAL:
      return { ...state, visible: false };
    case Types.GET_TOOLS_SUCCESS:
      return { ...state, data: payload.data };
    case Types.ADD_TOOL_SUCCESS:
      state.data.push(payload.data);
      return { ...state, data: state.data };
    case Types.REMOVE_TOOL_SUCCESS:
      return {
        ...state,
        data: state.data.filter(tool => tool.id !== payload.id)
      };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  openModal: visible => ({
    type: Types.OPEN_MODAL,
    payload: { visible }
  }),

  closeModal: visible => ({
    type: Types.CLOSE_MODAL
  }),
  getToolsRequest: params => ({
    type: Types.GET_TOOLS_REQUEST,
    payload: params
  }),
  getToolsSuccess: data => {
    return {
      type: Types.GET_TOOLS_SUCCESS,
      payload: { data }
    };
  },
  addToolRequest: data => ({
    type: Types.ADD_TOOL_REQUEST,
    payload: { data }
  }),
  addToolSuccess: data => ({
    type: Types.ADD_TOOL_SUCCESS,
    payload: { data }
  }),
  removeToolRequest: id => ({
    type: Types.REMOVE_TOOL_REQUEST,
    payload: { id }
  }),
  removeToolSuccess: id => ({
    type: Types.REMOVE_TOOL_SUCCESS,
    payload: { id }
  })
};
