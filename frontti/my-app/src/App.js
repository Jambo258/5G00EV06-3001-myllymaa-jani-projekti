import Home from "./Home";

import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Characters from "./Characters";
import Movies from "./Movies";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  let [characters, setCharacters] = React.useState([
    {
      id: 0,
      name: "Test Character",
      height: "180",
      mass: "80",
      movies: [],
    },
  ]);

  let [idnumber, setIdnumber] = React.useState(1);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Star wars API</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to={"/"}
                exact
                activeStyle={{ color: "red" }}
                className="nav-link"
              >
                Homeview
              </NavLink>
              <NavLink
                to={"/Characters"}
                exact
                activeStyle={{ color: "red" }}
                className="nav-link"
              >
                View content
              </NavLink>
              <NavLink
                to={"/Movies"}
                exact
                activeStyle={{ color: "red" }}
                className="nav-link"
              >
                View characters movies
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home
            idnumber={idnumber}
            setIdnumber={setIdnumber}
            characters={characters}
            setCharacters={setCharacters}
          />
        </Route>
        <Route exact path="/Characters">
          <Characters characters={characters} setCharacters={setCharacters} />
        </Route>
        <Route exact path="/Movies">
          <Movies characters={characters} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
