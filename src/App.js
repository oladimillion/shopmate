import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./reducers"
import Footer from "./components/Footer";
import ProtectRoutes from "./routes/ProtectedRoutes";
import routes, { components } from "./routes/routes";

import "toastr/build/toastr.min.css";
import "semantic-ui-css/semantic.min.css";

/**
 * App
 *
 * @name App
 * @function
 * @returns {jsx}
 */
const App = () => {
  return (
    <Provider store={store} >
      <Router>
        {
          components.map(({component}, index) => {
            return (
              <Route key={index} component={component} /> 
            )
          })
        }
        <main className="main__wrapper">
          <Switch>
            {
              routes.map(({component, ...route}, index) => {
                return (
                  route.protected ? 
                  (
                    <Route 
                      key={index} 
                      exact={route.exact} 
                      path={route.path} 
                      render={(props) => {
                        return (
                          <ProtectRoutes component={component} {...props} />
                        )
                      }}
                    />
                  ):
                  (
                    <Route 
                      key={route.name} 
                      exact={route.exact} 
                      path={route.path} 
                      component={component} 
                    />
                  )
                )
              })
            }
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
