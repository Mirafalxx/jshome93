import { createSlice } from '@reduxjs/toolkit';

const name = 'eventsList';

const eventsListSlice = createSlice({
  name,
  initialState: {
    eventsList: [],
    eventsListsLoading: false,
    createEventsListsLoading: false,
    createEventsListsError: null,
  },
  reducers: {
    fetchEventsListsRequest: (state) => {
      state.eventsListsLoading = true;
    },
    fetchEventsListsSuccess: (state, { payload: eventsList }) => {
      state.eventsListsLoading = false;
      state.eventsList = eventsList;
    },
    fetchEventsListsFailure: (state) => {
      state.eventsListsLoading = false;
    },
    createEventsListRequest: (state) => {
      state.createEventsListsLoading = true;
    },
    createEventsListSuccess: (state) => {
      state.createEventsListsLoading = false;
    },
    createEventsListFailure: (state, { payload: error }) => {
      state.createEventsListsLoading = false;
      state.createEventsListsError = error;
    },
  },
});

export default eventsListSlice;
