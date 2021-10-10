import { useContext } from "react";
import TransactionsContext from "../../store/transactions-context";
import classes from "./Balance.module.css";

const Balance = () => {
  const ctx = useContext(TransactionsContext);


  let totalExpenses = 0;
  if(ctx.transactions.length > 0) {
    for (const expense of ctx.transactions) {
      if(expense.category === 'expense') {
        totalExpenses += expense.amount;
      }
    }
  }

  let totalIncome = 0;
  if(ctx.transactions.length > 0) {
    for (const income of ctx.transactions) {
      if(income.category === 'income') {
        totalIncome += income.amount;
      }
    }
  }
  
  let balance = totalIncome - totalExpenses;

  return (
    <div className={classes.balance}>
      <div>
        <h2>Total Balance</h2>
        <p className={classes.total}>${balance.toFixed(2)}</p>
      </div>
      <div className={classes.detail}>
        <div className={classes.income}>
          <span>+</span>
          <div>
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
          </div>
        </div>
        <div className={classes.expenses}>
          <span>-</span>
          <div>
          <h3>Total Expenses</h3>
          <p>${totalExpenses.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
