import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    budget: 100,
    sushi: [],
    purchasedSushi: [],
    viewRota: 1
  }

  componentDidMount () {
    fetch(API)
      .then(resp => resp.json())
      .then(this.setSushiList)
  }

  setSushiList = sushiArray => {
    this.setState({
      sushi: sushiArray
    })
  }

  sushiPurchased = sushiID => {
    return !this.state.purchasedSushi.find(id => id === sushiID)
  }

  tryToBuySushi = sushiID => {
    let sushi = this.state.sushi[sushiID - 1]
    if (this.state.budget >= sushi.price && this.sushiPurchased(sushiID)) {
      let purchasedSushiDeepClone = JSON.parse(JSON.stringify(this.state.purchasedSushi));
      purchasedSushiDeepClone.push(sushi.id);
      this.setState({purchasedSushi: purchasedSushiDeepClone})
      this.setState({budget: this.state.budget - sushi.price})
    }
  }

  showMoreSushi = () => {
    if (this.state.viewRota < 25) {this.setState({viewRota: this.state.viewRota + 1})}
    else {this.setState({viewRota: 1})}
  }

  addToWallet = amount => {
    this.setState({
      budget: this.state.budget + amount
    })
  }

  render() {
    return (
      <div className="app">
        <WalletForm addToWallet={amount => this.addToWallet(amount)}/>
        <SushiContainer 
          appState = {this.state}
          tryToBuySushi={sushiID => this.tryToBuySushi(sushiID)}
          showMoreSushi={() => this.showMoreSushi()}
          sushiPurchased={sushiID => this.sushiPurchased(sushiID)}
        />
        <Table budget={this.state.budget} purchasedSushi={this.state.purchasedSushi}/>
      </div>
    );
  }
}

export default App;