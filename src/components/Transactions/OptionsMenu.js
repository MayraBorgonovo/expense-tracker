import { useState } from "react";
import {BiTrash} from 'react-icons/bi';
import classes from "./OptionsMenu.module.css";

const OptionsMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className={classes.container} onClick={() => setIsOpen((prevState) => !prevState)}>
      <div className={classes.dots}></div>

    <div className={`secondary ${classes.optionsMenu} ${isOpen ? classes.visible : ""}`}>
      <ul>
        <li onClick={props.onClick}><BiTrash /> Delete</li>
      </ul>
    </div>
    </div>
    </>
  );
};

export default OptionsMenu;
