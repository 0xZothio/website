import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import CreateContextProvider from "./Utils/DataContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <CookiesProvider>
        <CreateContextProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </CreateContextProvider>
      </CookiesProvider>
    </BrowserRouter>
  </>
);
