import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Signup";
import ButtonAppBar from "./ButtonAppBar";
import Footer from "./Footer";
import SignInSide from "./Login";
import ListProperty from "./ListProperty";
import SearchPage from "./SearchPage";
import Home from "./Home";
import Card from "./Card";
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact"
import { Login } from ".";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ButtonAppBar/>
        <Switch>
          <Route path="/" exact component={() => <Home/>} />
          <Route path="/About" exact component={() => <About />} />
          <Route path="/SignUp" exact component={() => <SignUp/>} />
          <Route path="/Login" exact component={() => <Login/>} />
          <Route path="/SearchPage" exact component={() => <SearchPage/>} />
          <Route path="/ListProperty" exact component={() => <ListProperty/>} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
