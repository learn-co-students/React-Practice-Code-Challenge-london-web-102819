import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      money: 100,
      moneyMessage: false
    };
  }

  removeSushi = sushiId => {
    let index = this.state.sushis.findIndex(s => {
      return s.id == sushiId;
    });
    if (this.state.money - this.state.sushis[index].price >= 0) {
      this.state.sushis[index].eated = true;
      this.setState({
        sushis: this.state.sushis,
        money: this.state.money - this.state.sushis[index].price,
        moneyMessage: false
      });
    } else {
      this.setState({ moneyMessage: true });
    }
  };

  beltFinished = () => {
    this.setState({
      sushis: this.state.sushis.filter(s => {
        return s.eated === false;
      })
    });
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          sushis: data.map(sushi => {
            sushi["eated"] = false;
            return sushi;
          })
        })
      );
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiArray={this.state.sushis}
          removeSushi={this.removeSushi}
          onBeltFinished={this.beltFinished}
        />
        <Table money={this.state.money} message={this.state.moneyMessage} />
      </div>
    );
  }
}

export default App;
