import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./reducers"
import routes from "./routes";

import NavBar from "./components/NavBar";
import ViewCart from "./components/ViewCart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

import "toastr/build/toastr.min.css";
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Route component={NavBar} />
          <Route component={ViewCart} />
          <Route component={Login} />
          <Route component={Register} />
          <main className="main__wrapper">
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
          </main>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
