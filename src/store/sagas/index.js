import { all, takeLatest } from "redux-saga/effects";
import { getTools, addTool, removeTool } from "./tools";
import { Types as ToolTypes } from "../ducks/tools";

export default function* rootSaga() {
  yield all([
    takeLatest(ToolTypes.GET_TOOLS_REQUEST, getTools),
    takeLatest(ToolTypes.ADD_TOOL_REQUEST, addTool),
    takeLatest(ToolTypes.REMOVE_TOOL_REQUEST, removeTool)
  ]);
}
