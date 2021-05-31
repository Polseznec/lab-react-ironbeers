import { Switch, Route } from "react-router-dom";
import React from 'react';
import Home from './Pages/Home.jsx';
import Beers from './Pages/Beers.jsx';
import RandomBeers from './Pages/RandonBeers.jsx';
import NewBeer from './Pages/NewBeer.jsx';
import Header from './Components/Header.jsx';
import SingleBeer from  './Pages/SingleBeer.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer" component={RandomBeers}/>
        <Route exact path="/new-beer" component={NewBeer}/>

        <Route
          exact
          path="/beers/:beerId"
          component={SingleBeer}
        />
        
      </Switch>
    </div>
  );
}

export default App;
