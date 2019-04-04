import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          {
            routes.map(route => {
              return (
                <Route 
                  key={route.name} 
                  exact={route.exact} 
                  path={route.path} 
                  component={route.component} 
                />
              )
            })
          }
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
