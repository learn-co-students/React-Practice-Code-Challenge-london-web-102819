import React, {useEffect, useState} from 'react';

function Wallet(props) {

    const [amount, setAmount] = useState(10);

    const { addMoney } = props

    return (
        <form 
            onSubmit = {e => {e.preventDefault(); addMoney(parseInt(amount, 10))} }>
            <input type="text" 
                value = {amount} 
                onChange = {e => setAmount(e.target.value)}>
            </input>
            <br></br>
            <input type = "submit" value = "Add Money To Wallet" ></input>
        </form>
    )

}

export default Wallet;
