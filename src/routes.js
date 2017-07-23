import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MainPage from './components/MainPage';
import NoteList from './containers/NoteList'; 
import NotFoundPage from './components/PageNotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage}/>
    <Route path="notelist" component={NoteList}/>
    <Route path="listnotes" component={NoteList}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
);