import React from 'react';
import './App.css';
// Remeber if you add a new page to import it first, if you try to use it here it wihtout importing first it won't work & will cry 
import Nav from './Nav';
import FAQ from './FAQ';
import Schedule from './Schedule';
import Home from './Home';
import Footer from './footer';
import Sponsor from './Sponsor';
import About from './about';
import Practice from './Practice';
import NotFoundPage from './NotFoundPage';
// We are using {} because we are importing specific things from react-router-dom
// BrowserRouter. Using the "as" word helps us rename the name "BrowserRouter" into something shorter
// Like we do in MySQL it's just making an alias name. In this case the alias is "Router"
// BroswerRouter: Gives us the ablilty to handle routing in React; Move to different pages
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    // Since we gave BrowserRouter an alias of "Router"
    // We will be using that name and wrapping it around the <div> in order to use it
    // Everything in <Router> will give us the ability to use routing
    <Router>
    <div className="App">
      {/* Since we want the Nav bar to load into every page, we won't put it into <Switch>. Saame goes for the Footer at the bottom */}
      <Nav />
        {/* 
        We are using Switch becuase as soon it finds the route with that speific path
        that is the only compoennt that will render out. Everything else doesn't matter
              */}
        <Switch>
          {/* Route: Renders out a component based on the URL

          Path: Define path that should render out
          need to specify the componenet aka {Componenet}
          When you enter the name in the URL
          Ex: www.blank.com/about
          This will render the about page. If we did www.blank.com/FAQ
          The it will render FAQ page. etc

          You may notice that we have a path = "/" this is basically
          what the page will load first AKA Homepage.
          As soon as it reaches "/" it will render that page AKA Home. Fix that by using the
          "exact". So when you specifically ask for "/" that component will render out
          Anything that comes after won't work (Try it)

          I also added a 404 page incase the user tries entering a path that does not exist.
          You can try it if you want. Do something like http://localhost:3000/wrong and it'll give you the 404 page 
           Maybe we can make it look nicer later 

           I believe the order of these matter but I'm not sure but you know what they say "If it's not broken  don't touch it!"
          
          */}
            <Route path = "/" exact component = {Home}/>
            <Route path = "/Home"  component = {Home}/>
            <Route path = "/FAQ" component = {FAQ}/>
            <Route path = "/schedule" component = {Schedule}/>
            <Route path = "/sponsor" component = {Sponsor}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/footer" component = {Footer}/>
            <Route path = "/practice" component = {Practice}/>
            <Route path = "/404" component = {NotFoundPage}/>
            <Route component = {NotFoundPage}/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );  
}


export default App;