import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import NavBar from './NavBar/NavBar'
import Home from './Home'
import Help from './Help'

const Host = ()=> <h1>Become a Host</h1>
const SignUp = ()=> <h1>SignUp</h1>
const SignIn = ()=> <h1>Signin</h1>

function App() {
  return (
      <Router>
        <NavBar/>
        <Route exact path="/" render={()=>{
          return <Home title="Home" />
        }} />
        <Route exact path="/host" component={Host} />
        <Route  path="/help" component={Help} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Router>
  );
}

export default App;
