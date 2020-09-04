import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { State } from './models/State';

const middlewares = composeWithDevTools(
  applyMiddleware(
    // logger,
    thunk
  )
);

export function createReduxStore(): Store<State> {
  return createStore(rootReducer, middlewares);
}
