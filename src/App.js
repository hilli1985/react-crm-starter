//don't forget :
//You should highlight which section the user is currently on in the navbar using state
//cross-origin issues - why use this and why not in real project??

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Clients from "./Components/Clients";
import Actions from "./Components/Actions";
import Analytics from "./Components/Analytics";
import Home from "./Components/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBars);

class App extends Component {
  state = {
    showNavSide: false
  };

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar-sm navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="nav-hide navbar-header nav navbar-nav nav-bar-fit">
              <li>
                <NavLink className="nav-item navbar-brand" activeClassName='nav-item-active' exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item navbar-brand" activeClassName='nav-item-active' to="/Clients">
                  Clients
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item navbar-brand" activeClassName='nav-item-active' to="/Actions">
                  Actions
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-item navbar-brand" activeClassName='nav-item-active' to="/Analytics">
                  Analytics
                </NavLink>
              </li>
            </ul>
            <ul className="burger-hide navbar-header nav navbar-nav nav-bar-fit">
              <li>
                <Link
                  className="bar-item navbar-brand"
                  to="#"
                  onClick={() =>
                    this.setState({ showNavSide: !this.state.showNavSide })
                  }
                >
                  <span>
                    <FontAwesomeIcon icon="bars" />
                  </span>
                </Link>
              </li>
            </ul>
            {this.state.showNavSide && (
              <ul className="nav-bar-side navbar-header nav navbar-nav nav-bar-fit">
                <li>
                  <Link className="nav-item navbar-brand" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item navbar-brand" to="/Clients">
                    Clients
                  </Link>
                </li>
                <li>
                  <Link className="nav-item navbar-brand" to="/Actions">
                    Actions
                  </Link>
                </li>
                <li>
                  <Link className="nav-item navbar-brand" to="/Analytics">
                    Analytics
                  </Link>
                </li>
              </ul>
            )}
          </nav>

          <Route path="/" exact render={() => <Home />} />
          <Route path="/Clients" exact render={() => <Clients />} />
          <Route path="/Actions" exact render={() => <Actions />} />
          <Route path="/Analytics" exact render={() => <Analytics />} />
        </div>
      </Router>
    );
  }
}

export default App;
