import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/configureStore";


import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>
    , rootElement);


