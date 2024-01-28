import { useState } from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import DisplayTransactions from './components/DisplayTransactions/DisplayTransactions';

function App() {

  const [showingAddTransaction, setShowingAddTransaction] = useState(false);
  const [showingDisplayTransactions, setShowingDisplayTransactions] = useState(false);

  function goToAddTransaction() {

    let nav = !showingAddTransaction;

    setShowingAddTransaction(nav);
    setShowingDisplayTransactions(false);
  }

  function goToDisplayTransactions() {

    let nav = !showingDisplayTransactions;

    setShowingDisplayTransactions(nav);
    setShowingAddTransaction(false);
  }

  return (
    <>
      <button className="nav-button" onClick={(goToAddTransaction)}>Add Transaction</button>
      <button className="nav-button" onClick={(goToDisplayTransactions)}>View Transactions</button>

      {showingAddTransaction ? <AddTransaction></AddTransaction> : null}
      {showingDisplayTransactions ? <DisplayTransactions></DisplayTransactions> : null}
    </>
  );
}

export default App;
