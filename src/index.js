/*
 * 2017-07-23
 *
 * Renders the provider component.
 * Provider component wraps app and configures the store. 
 * Alternatively, AppContainer can be used to wrap Provider if using react-hot-loader
 * 
 */

import React from 'react'; 
import { render } from 'react-dom'; 
import { Provider } from 'react-redux'; 
import App from './containers/App'; 
import configureStore from './store/configureStore'; 

const store = configureStore(); 

// entry point will be dom node with id='root'
render( 
  <Provider store={store}> 
    	<App /> 
  </Provider>, 
    document.getElementById('root') 
);