import { Button, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddOffer from "./views/AddOffer/AddOffer";
import AddUser from "./views/AddUsers/AddUser";
import Offers from "./views/Offers/Offers";
import SigIn from "./views/SigIn/SigIn";

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
        <Route path="/addOffer">
          <AddOffer />
        </Route>
        <Route path="/registration">
          <AddUser />
        </Route>
        <Route path="/login">
          <SigIn />
        </Route>
      </ChakraProvider>
    </Router>
  );
}

export default App;
