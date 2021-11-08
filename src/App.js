import './App.css';
import NAVBAR from './component/NAVBAR';
import SIGNUP from './component/SIGNUP';
import React from "react";
import LOGIN from './component/LOGIN';
import HOME from './component/HOME';
import BUY from  './component/BUY';
import SELL from  './component/SELL';
import RENT from  './component/RENT';

import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";



function App() {
  return (
   <>
      
     <div>

    <Router>
    <NAVBAR/>
     <Switch>
          <Route exact path="/" ><HOME/></Route> 
          <Route exact path="/home" ><HOME/></Route> 
          <Route exact path="/login" ><LOGIN/></Route>
          <Route exact path="/signup" ><SIGNUP/></Route> 
          <Route exact path="/buy" ><BUY/></Route>
          <Route exact path="/sell" ><SELL/></Route>
          <Route exact path="/rent" ><RENT/></Route>
          <Route exact path="/rentit" ><HOME/></Route>

      </Switch>

      </Router>
     </div>


   </>
  );
}

export default App;

