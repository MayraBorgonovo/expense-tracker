import { useState, useContext } from "react";
import TransactionsContext from "../../store/transactions-context";
import { AiFillPlusCircle } from "react-icons/ai";
import TransactionForm from "./TransactionForm";
import classes from "./NewTransaction.module.css";

const NewTransaction = (props) => {
  const ctx = useContext(TransactionsContext);
  const [isEditing, setIsEditing] = useState(false);

  const saveTransactionDataHandler = (enteredTransactionData) => {
    const transactionData = {
      ...enteredTransactionData,
      id: Math.random().toString(),
    };
    ctx.onAddTransaction(transactionData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={`newTransaction ${classes.container}`}>
      {!isEditing && (
        <button
          className={`btn ${classes.btnPrimary}`}
          onClick={startEditingHandler}
        >
          <AiFillPlusCircle /> <span>New Transaction</span>
        </button>
      )}
      <TransactionForm
        isEditing={isEditing}
        onSaveTransactionData={saveTransactionDataHandler}
        onCancel={stopEditingHandler}
      />
    </div>
  );
};

export default NewTransaction;
