import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Submit from "./components/partials/SuccessAndError/Submit";
import Error from "./components/partials/SuccessAndError/Error";

const App = () => {
  // useState[position, setPosition] = ("sticky");

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/submit" component={Submit}></Route>
          <Route exact path="/error" component={Error}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
