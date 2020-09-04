import appStateReducer from './appState.reducer';

import { SetLoadingAction, SetPhoneAction } from '../actions/interfaces';
import { setLoadingAction, setPhoneList } from '../actions/appState.actions';
import { AppState } from '../models/AppState';

const phonesMock = [
  {
    id: 0,
    name: 'test1',
    manufacturer: 'Apple',
    description:
      'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
    color: 'black',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
  {
    id: 0,
    name: 'test2',
    manufacturer: 'Apple',
    description:
      'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
    color: 'black',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
];

describe('AppState reducer test', () => {
  const defaultState: AppState = {
    loading: true,
    phones: [],
  };

  it('should call unknown type action', () => {
    const result = appStateReducer(undefined, { type: 'unknown' });

    expect(result).toEqual({ ...defaultState });
  });

  it('should call the reducer using SET_LOADING', () => {
    const action: SetLoadingAction = setLoadingAction({ loading: false });
    const result = appStateReducer(defaultState, action);

    expect(result).toEqual({ ...defaultState, ...action.payload });
  });

  it('should call the reducer using SET_PHONE', () => {
    const action: SetPhoneAction = setPhoneList({ phones: phonesMock });
    const result = appStateReducer(defaultState, action);

    expect(result).toEqual({ ...defaultState, ...action.payload });
  });
});
