import React, { Component }  from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import CarPage from './components/pages/CarPage';
import Testing from './components/pages/Testing';
import homeTest from './components/pages/homeTest';
import Auctions from './components/pages/Auctions';

class App extends Component {
  render(){
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/CarPage' component={CarPage} />
          <Route path='/Testing' component={Testing} />
          <Route path='/homeTest' component={homeTest} />
          <Route path='/Auctions' component={Auctions}/>
        </Switch>
      </Router>
    </>
  );
  }
}

export default App;