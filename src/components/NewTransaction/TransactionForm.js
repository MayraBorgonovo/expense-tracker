import useInput, { isEmpty, validateAmount } from "../../hooks/use-input";
import Input from "../UI/Input";
import { AiOutlineBank, AiOutlineHeart, AiOutlineInbox, AiOutlineBulb } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import classes from "./TransactionForm.module.css";

const TransactionForm = ({ isEditing, onCancel, onSaveTransactionData }) => {
  const {
    value: enteredCategory,
    isValid: categoryIsValid,
    valueChangeHandler: categoryChangeHandler,
    reset: resetCategory,
  } = useInput(isEmpty);

  const {
    value: enteredSubcategory,
    valueChangeHandler: subcategoryChangeHandler,
    reset: resetSubcategory,
  } = useInput(isEmpty);

  const {
    value: enteredDescription,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescription,
  } = useInput(isEmpty);

  const {
    value: enteredAmount,
    isValid: amountIsValid,
    hasError: amountHasError,
    valueChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
    reset: resetAmount,
  } = useInput(validateAmount);

  const {
    value: enteredDate,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isEmpty);

  const formIsValid =
    categoryIsValid && descriptionIsValid && amountIsValid && dateIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const transactionData = {
      category: enteredCategory,
      subcategory: enteredSubcategory,
      title: enteredDescription,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveTransactionData(transactionData);

    resetCategory();
    resetSubcategory();
    resetDescription();
    resetAmount();
    resetDate();
  };

  const formClasses = `${classes.transactionForm} ${
    isEditing ? classes.open : ""
  }`;

  return (
    <form className={formClasses} onSubmit={submitHandler}>
      <div className={classes.actions}>
        <button
          type="button"
          className={`btn ${classes.closeBtn}`}
          aria-label="Cancel"
          onClick={onCancel}
        >
          &times;
        </button>
        <button type="submit" className={`btn addBtn`} disabled={!formIsValid}>
          Add
        </button>
      </div>

      <div className={classes.controls}>
        <div className={`categories ${classes.categories}`}>
          <input
            type="radio"
            id="expense"
            name="category"
            value="expense"
            checked={enteredCategory === "expense"}
            onChange={categoryChangeHandler}
          />
          <label htmlFor="expense">Expense</label>

          <input
            type="radio"
            id="income"
            name="category"
            value="income"
            checked={enteredCategory === "income"}
            onChange={categoryChangeHandler}
          />
          <label htmlFor="income">Income</label>
        </div>

        {enteredCategory === "expense" && (
          <div>
            <p className={classes.categoriesLabel}>Choose a category:</p>
            <div className={classes.subcategories}>
            <input
                type="radio"
                id="rent"
                name="subcategory"
                value="rent"
                checked={enteredSubcategory === "rent"}
                onChange={subcategoryChangeHandler}
              />
              <label htmlFor="rent">
                <AiOutlineBank /> Rent
              </label>

              <input
                type="radio"
                id="utilities"
                name="subcategory"
                value="utilities"
                checked={enteredSubcategory === "utilities"}
                onChange={subcategoryChangeHandler}
              />
              <label htmlFor="utilities"><AiOutlineBulb />Utilities</label>

              <input
                type="radio"
                id="healthcare"
                name="subcategory"
                value="healthcare"
                checked={enteredSubcategory === "healthcare"}
                onChange={subcategoryChangeHandler}
              />
              <label htmlFor="healthcare"><AiOutlineHeart />Healthcare</label>

              <input
                type="radio"
                id="groceries"
                name="subcategory"
                value="groceries"
                checked={enteredSubcategory === "groceries"}
                onChange={subcategoryChangeHandler}
              />
              <label htmlFor="groceries"><GiKnifeFork />Groceries</label>

              <input
                type="radio"
                id="clothing"
                name="subcategory"
                value="clothing"
                checked={enteredSubcategory === "clothing"}
                onChange={subcategoryChangeHandler}
              />
              <label htmlFor="clothing"><IoShirtOutline />Clothing</label>

              <input
                type="radio"
                id="entertainment"
                name="subcategory"
                value="entertainment"
                checked={enteredSubcategory === "entertainment"}
                onChange={subcategoryChangeHandler}
              />
              <label htmlFor="entertainment"><BiCameraMovie />Entertainment</label>

              <input
                type="radio"
                id="other"
                name="subcategory"
                value="other"
                checked={enteredSubcategory === "other"}
                onChange={subcategoryChangeHandler}
              />
              <label htmlFor="other"><AiOutlineInbox />Other</label>
            </div>
          </div>
        )}

        <Input
          id="description"
          label="Description"
          type="text"
          isValid={descriptionHasError}
          onChange={descriptionChangeHandler}
          onBlur={descriptionBlurHandler}
          value={enteredDescription}
          error={descriptionHasError && "Please enter a description."}
        />
        <Input
          id="amount"
          label="Amount"
          type="text"
          isValid={amountHasError}
          onChange={amountChangeHandler}
          onBlur={amountBlurHandler}
          value={enteredAmount}
          error={amountHasError && "Please enter an amount greater than 0."}
        />
        <Input
          id="date"
          label="Date"
          type="date"
          min="2021-01-01"
          max="2021-12-31"
          isValid={dateHasError}
          onChange={dateChangeHandler}
          onBlur={dateBlurHandler}
          value={enteredDate}
          error={dateHasError && "Please enter a date."}
        />
      </div>
    </form>
  );
};

export default TransactionForm;
