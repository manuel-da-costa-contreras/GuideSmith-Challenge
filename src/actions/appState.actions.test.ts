import { SET_LOADING, SET_PHONE } from './constants';
import { SetPhoneAction, SetLoadingAction } from './interfaces';
import { setLoadingAction, setPhoneList } from './appState.actions';

const phoneMock = [
  {
    id: 0,
    name: 'iPhone 7',
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
    id: 1,
    name: 'iPhone 8',
    manufacturer: 'Apple',
    description:
      'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
    color: 'black',
    price: 245,
    imageFileName: '',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2,
  },
];

describe('AppState Actions', () => {
  it('Should set Loader to false', () => {
    const expected: SetLoadingAction = {
      type: SET_LOADING,
      payload: { loading: false },
    };
    expect(setLoadingAction({ loading: false })).toEqual(expected);
  });

  it('Should set a Phone', () => {
    const expected: SetPhoneAction = {
      type: SET_PHONE,
      payload: { phones: phoneMock },
    };
    expect(setPhoneList({ phones: phoneMock })).toEqual(expected);
  });
});
