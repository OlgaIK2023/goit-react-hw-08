// import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "modern-normalize";
import { store } from './redux/store.js'
// import { persistor, store } from "./redux/store.js";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
     
        <App />
      
    </Provider>
  // </React.StrictMode>,
);
