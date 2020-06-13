import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

const About = ()=>{
  return <h1>About</h1>
}

function App() {
  return (
    <div className="App">
      <Router>
        <h3>Header</h3>
        <Link to="/" >Home</Link> <br/>
        <Link to='/about' >About</Link>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <h3>Footer</h3>
      </Router>
    </div>
  );
}

export default App;
