import React from 'react';
import Header from './Components/header';
import './App.css';
import Balance from './Components/Balance';
import Income from './Components/income';
import Transactions from './Components/Transactions';
import AddTransaction from './Components/AddTransctions';
import { GlobalProvider } from './context/GlobalState';



const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container" >
        <Balance />
        <Income />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}


export default App;