import React, { useState, useEffect } from "react";

const TransactionsContext = React.createContext({
  transactions: [],
  onDelete: () => {},
  onAddTransaction: () => {}
});

const getLocalStorage = () => {
  let transactionList = localStorage.getItem("transactions");
  if (transactionList) {
    return (transactionList = JSON.parse(transactionList));
  } else {
    return [];
  }
};

export const TransactionsContextProvider = (props) => {
  const [transactions, setTransactions] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransactionHandler = (transaction) => {
    setTransactions((prevTransactions) => {
      return [transaction, ...prevTransactions];
    });
  };

  const deleteTransactionHandler = (id) => {
    const transactionsList = transactions.filter(item => item.id !== id);
    setTransactions(transactionsList);
  };

  return <TransactionsContext.Provider value={{ transactions, onAddTransaction: addTransactionHandler, onDelete: deleteTransactionHandler }}>{props.children}</TransactionsContext.Provider>;
};

export default TransactionsContext;
