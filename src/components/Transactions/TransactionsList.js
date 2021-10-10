import TransactionItem from "./TransactionItem";
import classes from './TransactionsList.module.css';

const TransactionsList = (props) => {
  if (props.items.length === 0 ) {
    return <h2 className={classes.fallback} >No transactions found.</h2>
  }

  return (
      <ul className={classes.transactionsList} >
        {props.items.map((expense) => (
            <TransactionItem
            key={expense.id}
            id={expense.id}
            category={expense.category}
            subcategory={expense.subcategory}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}  
      </ul>
  );
};

export default TransactionsList;