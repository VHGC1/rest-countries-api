import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/header/Header"
import Countries from "../pages/countries/Countries";
import Country from "../pages/country/Country";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Countries />
      </Route>
      <Route path="/countries/:alpha2Code" >
        <Country/>
      </Route>
    </Router>
  );
};

export default Routes;
