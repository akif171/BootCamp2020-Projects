import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Trans from './Trans';

const Transactions = () => {

    const { transactions } = useContext(GlobalContext)



    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Trans key={transaction.id} transaction={transaction} />))}


            </ul>
        </div>
    )
}


export default Transactions;