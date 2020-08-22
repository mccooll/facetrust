import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';
import reducer from './redux/reducer/reducer';

const store = createStore(reducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);