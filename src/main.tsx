import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import VideoContextProvider from "./Context/Context.tsx";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <VideoContextProvider>
      <React.StrictMode>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </React.StrictMode>
    </VideoContextProvider>
  </QueryClientProvider>
);
