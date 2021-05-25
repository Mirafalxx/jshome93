import { put, takeEvery } from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  createEventsListRequest,
  createEventsListFailure,
  createEventsListSuccess,
  fetchEventsListsFailure,
  fetchEventsListsRequest,
  fetchEventsListsSuccess,
} from "../actions/eventsListActions";
import { historyPush } from "../actions/historyActions";
import { addNotification } from "../actions/notifierActions";

export function* fetchEventsLists() {
  try {
    let url = "/eventsList";
    const response = yield axiosApi.get(url);
    yield put(fetchEventsListsSuccess(response.data));
  } catch (error) {
    yield put(fetchEventsListsFailure());
    yield put(addNotification({ message: "Fetch Events List failed", options: { variant: "error" } }));
  }
}

export function* createEventsList({ payload: eventsListData }) {
  // try {
  const response = yield axiosApi.post("/eventsList", eventsListData);
  yield put(createEventsListSuccess(response.data));
  yield put(historyPush("/"));
  yield put(addNotification({ message: "Event created successfully", options: { variant: "success" } }));
  // } catch (error) {
  //   yield put(createEventsListFailure(error.response.data));
  //   yield put({ message: "Create event failed", options: { variant: "error" } });
  // }
}

const eventsListSagas = [
  takeEvery(fetchEventsListsRequest, fetchEventsLists),
  takeEvery(createEventsListRequest, createEventsList),
];

export default eventsListSagas;
