import './App.css';
import NAVBAR from './component/NAVBAR';
import SIGNUP from './component/SIGNUP';
import React from "react";
import LOGIN from './component/LOGIN';
import HOME from './component/HOME';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";



function App() {
  return (
   <>
      
     <div>

    <Router>
    <NAVBAR/>
     <Switch>
          <Route exact path="/home" ><HOME/></Route> 
          <Route exact path="/login" ><LOGIN/></Route>
          <Route exact path="/signup" ><SIGNUP/></Route> 
      </Switch>

      </Router>
     </div>


   </>
  );
}

export default App;
