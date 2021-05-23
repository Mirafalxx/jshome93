import eventsListSlice from '../slices/eventsListSlice';

export const {
  fetchEventsListsRequest,
  fetchEventsListsSuccess,
  fetchEventsListsFailure,
  createEventsListRequest,
  createEventsListSuccess,
  createEventsListFailure,
} = eventsListSlice.actions;
