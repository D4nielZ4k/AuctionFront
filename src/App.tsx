import React, { ReactNode } from "react";
import logo from "./logo.svg";
import "./App.css";
import Offers from "./views/Offers/Offers";
import { ChakraProvider, Switch } from "@chakra-ui/react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import AddProduct from "./views/AddProduct/AddProduct";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Route exact path="/">
          <Offers />
        </Route>
        <Route path="/AddProduct">
          <AddProduct />
        </Route>
      </ChakraProvider>
    </Router>
  );
}

export default App;
