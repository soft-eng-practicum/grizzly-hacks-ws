import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import contact from './contact';
import header from './header';
import './App.css';

const routing = (
    <Router>
      <div>
       
          <Route exact path="/" component={App} />
          <Route path="/header" component={header} />
          <Route path="/contact" component={contact} />
          {/* <Route component={Notfound} /> */}
          </div>
    </Router>
  );
  



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
