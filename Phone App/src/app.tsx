import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

//Third Parties
import 'normalize.css/normalize.css';

// Local Components
import { CatalogueApp } from './components/phone/phone';
import './styles/styles.scss';
import { createReduxStore } from './store';

const AppWrapper = () => {
  const store = createReduxStore();

  return (
    <Provider store={store}>
      <CatalogueApp />
    </Provider>
  );
};

render(AppWrapper(), document.getElementById('app'));
