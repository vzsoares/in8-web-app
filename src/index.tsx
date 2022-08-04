import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AppCtxProvider } from "./features/AppCtx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <AppCtxProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppCtxProvider>
  </ChakraProvider>
);
