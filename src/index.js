import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { HandleForm, ChangeNumber } from "./components/reduxReducer/Reducer";
import "./App.scss";
import App from "./App";
const ReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//CombineReducers
const rootReducers = combineReducers({ ChangeNumber, HandleForm });
//create store
const store = createStore(rootReducers, ReduxDevTools);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
