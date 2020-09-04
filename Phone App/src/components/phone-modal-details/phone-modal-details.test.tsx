import React from 'react';
import { shallow, mount } from 'enzyme';

import PhoneModal from './phone-modal-details';
import { phoneMock } from '../../mocks/phone';

describe('Modal Component', () => {
  test('Component Renders', () => {
    const component = mount(<PhoneModal selectedPhone={phoneMock} />);
    expect(component).toBeTruthy();
  });
});
