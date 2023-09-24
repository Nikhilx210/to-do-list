import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ListProvider } from "./context/Todolistcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ListProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ListProvider>
);
