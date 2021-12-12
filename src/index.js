import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { TranslateProvider } from "./core/TranslateProvider";
import {en,vn}from './locals'

ReactDOM.render(
  <React.StrictMode>
    <TranslateProvider translate={{en,vn}}>
    <Provider store={store}>
      <App />
    </Provider>
    </TranslateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
