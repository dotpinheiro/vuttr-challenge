import api from "../../services/api";
import { call, put } from "redux-saga/effects";
import { Creators as ToolsActions } from "../ducks/tools";

export function* getTools(action) {
  const { payload } = action;
  let params = "";
  payload.onlyTags
    ? (params = `/tools?tags_like=${payload.searchInput}`)
    : (params = `/tools?q=${payload.searchInput}`);
  try {
    const { data } = yield call(api.get, params);
    yield put(ToolsActions.getToolsSuccess(data));
  } catch (ex) {
    const errors = [
      {
        error: true,
        type: "load",
        message: "Oops! an error has ocurred, check your connection."
      }
    ];
    yield put(ToolsActions.getToolsFailure(errors));
  }
}

export function* addTool(action) {
  const { payload } = action;
  try {
    const { data } = yield call(api.post, "/tools", payload.data);
    yield put(ToolsActions.addToolSuccess(data));
  } catch (ex) {
    const errors = [
      {
        error: true,
        type: "add",
        message: "an error has ocurred, please check your connection."
      }
    ];
    yield put(ToolsActions.addToolFailure(errors));
  }
}

export function* removeTool(action) {
  const { payload } = action;
  try {
    yield call(api.delete, `/tools/${payload.id}`);
    yield put(ToolsActions.removeToolSuccess(payload.id));
  } catch (ex) {
    const errors = [
      {
        error: true,
        type: "remove",
        message: "Oops! an error has ocurred, check your connection."
      }
    ];
    yield put(ToolsActions.removeToolFailure(errors));
  }
}
