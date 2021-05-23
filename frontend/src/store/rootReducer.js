import { combineReducers } from 'redux';
import eventsListSlice from './slices/eventsListSlice';
import usersSlice from './slices/usersSlice';
import notifierSlice from './slices/notifierSlice';

const rootReducer = combineReducers({
  eventsLists: eventsListSlice.reducer,
  users: usersSlice.reducer,
  notifier: notifierSlice.reducer,
});

export default rootReducer;
