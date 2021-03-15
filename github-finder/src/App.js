import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import User from "./components/users/User";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/">
                  <Search />
                  <Users />
                </Route>
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
