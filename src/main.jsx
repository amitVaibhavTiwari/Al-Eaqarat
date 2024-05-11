// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./saas_styles/_Global.scss";
import GlobalContext from "./GlobalContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <GlobalContext>
    <App />
  </GlobalContext>
  // </React.StrictMode>
);
