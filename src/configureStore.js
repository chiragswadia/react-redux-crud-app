import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      ...enhancers
    )
  );
};

export default configureStore;
