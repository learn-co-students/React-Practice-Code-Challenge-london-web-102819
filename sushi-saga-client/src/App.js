import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    sushiPage: 0,
    plates: [],
    balance: 100
  };

  componentDidMount = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({ sushis: data }));
  };

  handleMoreSushi = () => {
    this.setState({
      sushiPage: this.state.sushiPage + 1
    });
  };

  handleEatSushi = sushiId => {
    const sushis = [...this.state.sushis];
    const eatenSushi = sushis.find(sushi => sushi.id === sushiId);
    if (eatenSushi.eaten) {
      return;
    }
    if (this.state.balance < eatenSushi.price) {
      window.alert("There is no free meal!");
      return;
    }
    eatenSushi.eaten = true;
    const plates = [...this.state.plates];
    plates.push(eatenSushi);

    this.setState({
      sushis: sushis,
      plates: plates,
      balance: this.state.balance - eatenSushi.price
    });
  };

  render() {
    const { sushis, sushiPage } = this.state;
    return (
      <div className="app">
        <SushiContainer
          sushisToRender={sushis}
          sushiPage={sushiPage}
          handleMoreSushi={this.handleMoreSushi}
          handleEatSushi={this.handleEatSushi}
        />
        <Table
          platesToDisplay={this.state.plates}
          balance={this.state.balance}
        />
      </div>
    );
  }
}

export default App;
