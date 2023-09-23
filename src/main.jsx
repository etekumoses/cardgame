import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { RecoilRoot } from "recoil";

let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RecoilRoot>
      <App />
    </RecoilRoot>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
