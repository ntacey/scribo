/*
 * 2017-07-23
 *
 * Combines all reducers into single root reducer
 * 
 */

import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import noteReducer from './noteReducer';
import tagReducer from './tagReducer';

const rootReducer = combineReducers({
  noteReducer, 
  tagReducer,
  routing: routerReducer
});

export default rootReducer;