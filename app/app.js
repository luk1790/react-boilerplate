import React from "react";
import ReactDOM from "react-dom";

import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducers from './reducers';
import Main from './Main'

import "./app.scss";

const store = createStore(reducers);



ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);


