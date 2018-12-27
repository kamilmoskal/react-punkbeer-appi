import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Favourites from './Favourites'

class App extends Component {
  state = {
    beers: []
  }
  shouldComponentUpdate() {
    return false; // Will cause component to never re-render.
}
  getId = (beer) => {
  let currentBeers = this.state.beers;
  let isOnList = currentBeers.some(b => {
    return b.id === beer.id
  })
    if(!isOnList) {
      let beers = [...this.state.beers, beer];
        this.setState({
          beers: beers
        })
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={(props) => <Home getId={this.getId}/>}/>
        <Route path='/Favourites' component={(props) => <Favourites beers={this.state.beers}/>}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
