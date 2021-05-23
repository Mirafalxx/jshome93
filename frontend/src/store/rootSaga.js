import { all } from 'redux-saga/effects';
import history from '../history';
import historySagas from './sagas/historySagas';
import eventsListSagas from './sagas/eventsListSagas';
import usersSagas from './sagas/usersSagas';

export default function* rootSaga() {
  yield all([...historySagas(history), ...usersSagas, ...eventsListSagas]);
}
