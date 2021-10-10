import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import classes from './Header.module.css';

const Header = ({theme, toggleTheme}) => {

  return (
    <header className={classes.header}>
      <div className={classes.welcome}>
        <h1>My Expense Tracker</h1>
      </div>
      <div onClick={toggleTheme}>
      {theme === 'dark' ? <FiSun /> : <IoMoonOutline />}
      </div>
    </header>
  );
};

export default Header;
