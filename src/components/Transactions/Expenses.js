import { useState, useContext } from "react";
import TransactionsContext from "../../store/transactions-context";
import TransactionFilter from "./TransactionFilter";
import TransactionsList from "./TransactionsList";

const Expenses = (props) => {
  const ctx = useContext(TransactionsContext);
  const [filteredMonth, setFilteredMonth] = useState('all');

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  let filteredExpenses;
  if (filteredMonth === "all") {
    filteredExpenses = ctx.transactions.filter((item) => {
        return item.category === 'expense';
    });
  }

  if (filteredMonth !== "all") {
    filteredExpenses = ctx.transactions.filter((item) => {
        return new Date(item.date).getMonth().toString() === filteredMonth && filteredMonth && item.category === "expense";
    });
  }

  return (
    <div>
      <TransactionFilter
        selected={filteredMonth}
        onChangeFilter={filterChangeHandler}
      />
      <TransactionsList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
