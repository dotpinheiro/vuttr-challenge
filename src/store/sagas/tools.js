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
  } catch (ex) {}
}

export function* addTool(action) {
  const { payload } = action;
  try {
    const { data } = yield call(api.post, "/tools", payload.data);
    yield put(ToolsActions.addToolSuccess(data));
  } catch (ex) {}
}

export function* removeTool(action) {
  const { payload } = action;
  try {
    yield call(api.delete, `/tools/${payload.id}`);
    yield put(ToolsActions.removeToolSuccess(payload.id));
  } catch (ex) {}
}
