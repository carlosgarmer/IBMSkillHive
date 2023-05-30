import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/stylesheets/application.bootstrap.scss";
import { AuthProvider } from "./authcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AuthProvider><App /></AuthProvider>);
