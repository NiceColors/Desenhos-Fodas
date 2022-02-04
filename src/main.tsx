import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ColorModeScript />
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);