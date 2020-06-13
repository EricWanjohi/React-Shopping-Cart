import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import '../node_modules/materialize-css/dist/css/materialize.min.css';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/cart" component={Cart}/>
            </Switch>
          <Home/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
