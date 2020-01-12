import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import API from './db/API'




class App extends Component {
  state = {
    sushi: [],
    eatenSushi: [],
    currentSushi: [],
    budget: 120, 
    topOff: false 
  }
  // Shuffle array
  displaySushi = (sushis) => {
    let validsushi = sushis.filter( sushi=> !this.state.eatenSushi.includes(sushi.id))
    if (validsushi.length === 0){
      this.componentDidMount();
    }
    const shuffledSushi = validsushi.sort(() => 0.5 - Math.random());
    let selected = shuffledSushi.slice(0, 4);
    return selected; 
  };

  onConsumingSushi = (sushi) => {
    console.log(this.remainingBudget(), sushi.price)
    if (sushi.price > this.remainingBudget()) return; 

    if (!this.state.eatenSushi.includes(sushi.id)){
      this.setState({
        eatenSushi: [
          ...this.state.eatenSushi, 
          sushi.id
        ]
      })
    };
  };
  
  onMoresushi = (event) => {
    event.preventDefault();
    this.setState({
      currentSushi: this.displaySushi(this.state.sushi)
    })
  }
  
//budget (remaining budget) 
  remainingBudget = () => {
    let sushiCount = this.state.sushi.filter(sushi =>{
        return this.state.eatenSushi.find(id=> id === sushi.id)
      });
    let remaining = this.state.budget - sushiCount.reduce((memo, currentValue) => memo + currentValue.price, 0) 
    return remaining; 
  };

// top off feature:
  showTopOff = () => {
    this.setState({
      topOff: !this.state.topOff
    })
  };

  onTopoff = (amount) => {
    this.setState({
      budget:this.state.budget + amount
    })
  }

  render() {
    const { eatenSushi, currentSushi, topOff} = this.state


    return (
      <div className="app">
        <SushiContainer 
          sushi={currentSushi} 
          eatingSushi={this.onConsumingSushi} 
          eatenSushi={eatenSushi} 
          moreSushi={this.onMoresushi}
          showTopOff={this.showTopOff}
          topOff={topOff}
          onTopoff={this.onTopoff}
        />
        <Table eatenSushi={eatenSushi} remainingBudget={this.remainingBudget} />
      </div>
    );
  };



  componentDidMount(){
    API.GET_SUSHI().then(result => {
      this.setState({
        sushi: result, 
        currentSushi: this.displaySushi(result)
      })
    })
  };
}


export default App;