import React, {useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

// firebase
import firebase from 'firebase/app'
import "firebase/auth"

// Components
import Home from './components/pages/Home'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import PageNotFound from './components/pages/PageNotFound'
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

import UserContext from './context/userContext'

import firebaseConfig from './config/firebaseConfig'
// INIT FIREBASE
firebase.initializeApp(firebaseConfig)

const App = () => {
  const [user, setUser] = useState(null )
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user, setUser}}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
