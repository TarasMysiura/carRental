import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import "./index.css";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "redux/store.js";
import { GlobalStyles } from "./style/GlobalStyle.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <PersistGate loading={<p>loading...</p>} persistor={persistor}> */}
    <BrowserRouter
    basename="/carRental"
    >
      <GlobalStyles />
      <App />
    </BrowserRouter>

    {/* </PersistGate> */}
  </Provider>
);
