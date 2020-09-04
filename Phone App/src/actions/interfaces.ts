import { SET_PHONE, SET_LOADING } from './constants';

import { AppState } from '../models/AppState';

export interface SetPhoneAction {
  type: typeof SET_PHONE;
  payload: Partial<AppState>;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: Partial<AppState>;
}
