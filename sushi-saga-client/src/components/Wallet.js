import React from 'react';

class Wallet extends React.Component {

	state = {
		amount: 10
	}

	changeAmount =  e => {
		this.setState({
			amount: e.target.value
		})
	}

	render() {
		const { addMoney } = this.props

		return (
			<form 
				onSubmit = {e => {e.preventDefault(); addMoney(parseInt(this.state.amount, 10))} }>
				<input type="text" 
					value = {this.state.amount} 
					onChange = {this.changeAmount}>
				</input>
			<br></br>
				<input type = "submit" value = "Add Money To Wallet" ></input>
			</form>
		)

	}
}

export default Wallet;
