import React from 'react';
import './App.css';
import BankAccount from './components/BankAccount/BankAccount';
import Bidder from './components/Bidder/Bidder';


function App() {
  const [BidList, setBidList] = React.useState([100]);

  const addBid = () => {
    const newBid = [...BidList , parseInt(BidList[BidList.length-1]) + 5];

    setBidList(newBid)

  }
  return (
    <div className="app">
      <h2>Bank Account</h2>
      <BankAccount></BankAccount>
      <h2>Listado de Pujas</h2>
      <ul>
        {BidList.map(bid => <li key={bid}>{bid.toString()}</li>)}
      </ul>
      <h2>Pujadores</h2>
      <Bidder name="Pedro" addBid={addBid}></Bidder>
      <Bidder name="Gonzalo" addBid={addBid}></Bidder>
      <Bidder name="Edu" addBid={addBid}></Bidder>
    </div>
  );
}

export default App;
