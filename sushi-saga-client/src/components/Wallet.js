import React from 'react'

class WalletForm extends React.Component {

  state = {
    value: ""
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.isPositiveInteger(this.state.value)) {this.props.addToWallet(parseInt(this.state.value))};
    this.setState({value: ""})
  }

  isPositiveInteger = n => {
    return n >>> 0 === parseFloat(n);
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
      <label>
      Add to wallet:
      <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
    </label>
    <input type="submit" value="Submit" /></form>
    )
  }
}

export default WalletForm