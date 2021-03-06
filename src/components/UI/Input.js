import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}:</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        step={props.step}
        min={props.min}
        max={props.max}
        onChange={props.onChange}
        onBlur={props.onBlur}
        defaultValue={props.defaultValue}
      />
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Input;
