import React, {useEffect, useState} from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './components/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

function App() {
     const BUDGET = 200;
    const [sushis, setSushis] = useState([]);
    const [firstSushiIndex, setFirstSushiIndex] = useState(0);
    const [eatenSushi , setEatenSushi] = useState([]);
    const [remainingMoney , setRemainingMoney] = useState(150);

    useEffect(() => {
        fetch(API)
            .then(data => data.json())
            .then(sushis => (sushis.map(s => ({...s, eaten: false}))))
            .then(returnedSushis => setSushis(returnedSushis));
    }, []);

    function eatSushi(sushi) {
        if (sushi.price > remainingMoney) return;

        setSushis(sushis.map(s => {
            if (s.id === sushi.id) s.eaten = true;
            return s;
        }))

        setEatenSushi([...eatenSushi, 1]);
        setRemainingMoney(remainingMoney - sushi.price);
    }

    function changeSushiList() {
        if (firstSushiIndex + 4 >= sushis.length) setFirstSushiIndex(0);
        else setFirstSushiIndex(firstSushiIndex + 4);
    }

    return (
        <div className="app">
            <Wallet addMoney = 
                {amount  => remainingMoney + amount > BUDGET ? null : setRemainingMoney(remainingMoney + amount)} 
            />
            <SushiContainer 
                sushis = {sushis.slice(firstSushiIndex, firstSushiIndex + 4)}  
                changeSushiList = {changeSushiList} 
                eatSushi = {eatSushi}
            />
            <Table 
                remainingMoney = {remainingMoney} 
                eatenSushi = {eatenSushi} 
            />
        </div>
    );
}


export default App;
