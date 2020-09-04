import React from 'react';
import { shallow } from 'enzyme';

import PhoneList from './phone-list';
import { phoneMock } from '../../mocks/phone';

const mockClick = jest.fn();

describe('Phone List Component', () => {
  test('component Renders', () => {
    const component = shallow(<PhoneList phoneList={phoneMock} />);
    expect(component).toBeTruthy();
  });
  test('click event', () => {
    const component = shallow(
      <PhoneList phoneList={phoneMock} onCardClick={mockClick} />
    );
    component.find('div[className*="phone-card"]').simulate('click');
    expect(mockClick.mock.calls.length).toBe(1);
  });
});
