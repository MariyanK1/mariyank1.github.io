import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import { Provider } from '../src/components/context';

ReactDOM.render(
  <Provider>
    <Router>
      <>
        <Navbar />
        <div className="container"></div>
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </>
    </Router>
  </Provider>,
  document.getElementById('root')
);
