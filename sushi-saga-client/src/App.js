import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [], 
    n: 0, 
    size: 4, 
    cash: 100, 
    eatenDishes: []
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => this.setState({sushi}))
  }

  moreSushi = () =>{
    this.setState({
      n: this.state.n === 96? 0 : this.state.n +4,
      size: this.state.size === 100? 4 : this.state.size +4
    })
  }

  handleEatDish = sushi => {
    this.setState({
      eatenDishes: this.state.eatenDishes.concat([sushi]),
      cash: this.state.cash > sushi.price? this.state.cash - sushi.price : this.state.cash
    })
    
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatDish={this.handleEatDish} n={this.state.n} size={this.state.size} moreSushi={this.moreSushi} sushi={this.state.sushi} eatenDishes={this.state.eatenDishes}/>
        <Table eatenDishes={this.state.eatenDishes} cash={this.state.cash}/>
      </div>
    );
  }
}

export default App;