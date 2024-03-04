import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import VideoContextProvider from "./Context/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <VideoContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </VideoContextProvider>
);
