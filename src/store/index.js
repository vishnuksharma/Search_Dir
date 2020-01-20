import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import * as models from './modals';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const persistAuth = store => {
    return next => {
      return action => {
        const result = next(action);
        const state = store.getState();

        const serializedAuth = JSON.stringify(state.auth);
        sessionStorage.setItem('auth', serializedAuth);

        return result;
      };
    };
  };
  middlewares.push(persistAuth);
}

if (process.env.DEV_MODE === true) {
  // Logging components
  const storeLogger = createLogger({
    collapsed: true, // takes a Boolean or optionally a Function that receives `getState` function for accessing current store state and `action` object as parameters. Returns `true` if the log group should be collapsed, `false` otherwise.
  });

  middlewares.push(storeLogger);
}

const store = init({
  models: {
    ...models,
  },
  plugins: [selectPlugin()],
});

export const { select, dispatch, getState } = store;

export default store;
