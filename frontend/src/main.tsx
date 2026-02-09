import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



// AICI:
import "./index.css"; // <- trebuie să fie asta


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
