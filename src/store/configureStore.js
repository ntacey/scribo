import {createStore, compose, applyMiddleware} from 'redux';
//import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //TODO: find out purpose
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const middlewares = [
    thunk
  ];

  //init store here
  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}