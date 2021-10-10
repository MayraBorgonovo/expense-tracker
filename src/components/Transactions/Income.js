import { useState, useContext } from "react";
import TransactionsContext from "../../store/transactions-context";
import TransactionFilter from "./TransactionFilter";
import TransactionsList from "./TransactionsList";

const Income = (props) => {
  const ctx = useContext(TransactionsContext);
  const [filteredMonth, setFilteredMonth] = useState("all");

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  let filteredIncome;
  if (filteredMonth === "all") {
    filteredIncome = ctx.transactions.filter((item) => {
        return item.category === 'income';
    });
  }

  if (filteredMonth !== "all") {
    filteredIncome = ctx.transactions.filter((item) => {
        return new Date(item.date).getMonth().toString() === filteredMonth && item.category === "income";
    });
  }

  return (
    <div>
      <TransactionFilter
        selected={filteredMonth}
        onChangeFilter={filterChangeHandler}
      />
      <TransactionsList items={filteredIncome} />
    </div>
  );
};

export default Income;
