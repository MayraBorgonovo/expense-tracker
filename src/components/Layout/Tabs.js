import { useState } from "react";
import Expenses from "../Transactions/Expenses";
import Income from "../Transactions/Income";
import classes from './Tabs.module.css'

const TabPanel = ({children, value, index}) => {
  return (
    <>
      {value===index && children}
    </>
  )
}

const Tabs= () => {
  const [value, setValue] = useState(1);

  const getActiveClass = (index, className) =>
    value === index ? className : "";

  return (
    <div className={classes.container}>
      <ul className={classes.tabList}>
        <li
          className={`${classes.tabs} ${getActiveClass(1, `active ${classes.active}`)}`}
          onClick={() => setValue(1)}
        >
          Expenses
        </li>
        <li
          className={`${classes.tabs} ${getActiveClass(2, `active ${classes.active}`)}`}
          onClick={() => setValue(2)}
        >
          Income
        </li>
      </ul>
      <div className={classes.tabContent}>
       <TabPanel value={value} index={1}>
         <Expenses />
       </TabPanel>
       <TabPanel value={value} index={2}>
         <Income />
       </TabPanel>
      </div>
    </div>
  );
};

export default Tabs;

