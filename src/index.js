import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import manageTasks from './reducers/manageTasks';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(manageTasks, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);