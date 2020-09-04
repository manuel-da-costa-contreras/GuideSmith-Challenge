// Actions
import { AppStateActions } from '../actions/appState.actions';

// Constants
import { SET_PHONE, SET_LOADING } from '../actions/constants';

// Model
import { AppState } from '../models/AppState';

export default function appStateReducer(
  state: AppState = { phones: [], loading: true },
  action: AppStateActions
): AppState {
  switch (action.type) {
    case SET_PHONE:
      return {
        ...state,
        phones: action.payload.phones,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
}
