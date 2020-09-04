import { combineReducers } from 'redux';

import appStateReducer from './appState.reducer';

export const rootReducer = combineReducers({
  appState: appStateReducer,
});
