import React, { ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";
import Offers from "./views/Offers/Offers";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Offers></Offers>
    </ChakraProvider>
  );
}

export default App;
