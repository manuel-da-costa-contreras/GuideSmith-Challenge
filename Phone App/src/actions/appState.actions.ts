import { AppState } from '../models/AppState';

import { SET_PHONE, SET_LOADING } from './constants';

import { SetPhoneAction, SetLoadingAction } from './interfaces';

export type AppStateActions =
  | SetPhoneAction
  | SetLoadingAction
  | { type: 'unknown' };

export function setPhoneList(phoneList: Partial<AppState>): SetPhoneAction {
  return {
    type: SET_PHONE,
    payload: phoneList,
  };
}

export function setLoadingAction(loading: Partial<AppState>): SetLoadingAction {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}
