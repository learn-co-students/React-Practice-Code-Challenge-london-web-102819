import React, { Component } from 'react';

class AddCash extends Component {

    handleCash = e => {
        e.preventDefault()
        this.props.addCash(parseInt(e.target.amount.value))
    }

    render() {
        return (
            <div> 
                <p>Looks like you're running low on cash. Go ahead and add some</p>
                <form onSubmit={this.handleCash}> 
                    <input name="amount" placeholder="$100" type="number"/>
                    <button>Add Cash</button>
                </form>
            </div>
        );
    }
}

export default AddCash;