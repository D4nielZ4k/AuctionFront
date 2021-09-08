import { Button, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddOffer from "./views/AddOffer/AddOffer";
import AddProduct from "./views/AddProduct/AddProduct";
import Offers from "./views/Offers/Offers";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Route exact path="/">
          <Button mb={5} colorScheme="blue">
            Add offer
          </Button>
          <Offers />
        </Route>
        <Route path="/AddOffer">
          <AddOffer />
        </Route>
        <Route path="/addOffer"></Route>
      </ChakraProvider>
    </Router>
  );
}

export default App;
