import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {


	state = {
		sushis: [],
		firstSushiIndex: 0,
		eatenSushi: [],
		remainingMoney: 150
	}


	fetchSushi = () => {
		fetch(API)
			.then(data => data.json())
			.then(sushis => (sushis.map(s => ({...s, eaten: false}))))
			.then(sushis => this.setState({sushis}));
	}

	componentDidMount() {
		this.fetchSushi();
	}

	changeSushiList = () => {
		this.setState(previousState => {
			if (this.state.firstSushiIndex + 4 === this.state.sushis.length) {
				return {firstSushiIndex: 0}
			}
			return {
				firstSushiIndex: previousState.firstSushiIndex + 4
			}
		})
	}

	eatSushi= (sushi) => {
		if (sushi.price > this.state.remainingMoney) return;
		this.setState({
			sushis: this.state.sushis.map(s => {
				if (s.id === sushi.id) s.eaten = true;
				return s;
			}),
			eatenSushi: [...this.state.eatenSushi, 1],
			remainingMoney: this.state.remainingMoney - sushi.price
		})


	}

	addMoney = amount  => {
		this.setState({
			remainingMoney: this.state.remainingMoney + amount
		})
	}
	render() {
		const index = this.state.firstSushiIndex;
		return (
			<div className="app">
				<Wallet addMoney = {this.addMoney} />
				<SushiContainer 
					sushis = {this.state.sushis.slice(index, index + 4)}  
					changeSushiList = {this.changeSushiList}
					eatSushi = {this.eatSushi}
				/>
				<Table 
					remainingMoney = {this.state.remainingMoney} 
					eatenSushi = {this.state.eatenSushi} 
				/>
			</div>
		);
	}
}

export default App;
