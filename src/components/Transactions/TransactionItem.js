import { useContext } from "react";
import TransactionsContext from "../../store/transactions-context";
import Card from "../UI/Card";
import OptionsMenu from "./OptionsMenu";
import { FaMoneyBillWave } from "react-icons/fa";
import {
  AiOutlineBank,
  AiOutlineHeart,
  AiOutlineInbox,
  AiOutlineBulb,
} from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import classes from "./TransactionItem.module.css";

const TransactionItem = (props) => {
  const ctx = useContext(TransactionsContext);

  const month = new Date(props.date).toLocaleString("en-GB", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-GB", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();
  const date = day + "/" + month + "/" + year;

  let itemIcon;
  if (props.category === "income") {
    itemIcon = <FaMoneyBillWave style={{ background: "#81d181" }} />;
  }
  if (props.category === "expense") {
    switch (props.subcategory) {
      case "rent":
        itemIcon = <AiOutlineBank />;
        break;
      case "utilities":
        itemIcon = <AiOutlineBulb />;
        break;
      case "healthcare":
        itemIcon = <AiOutlineHeart />;
        break;
      case "groceries":
        itemIcon = <GiKnifeFork />;
        break;
      case "clothing":
        itemIcon = <IoShirtOutline />;
        break;
      case "entertainment":
        itemIcon = <BiCameraMovie />;
        break;
      case "other":
        itemIcon = <AiOutlineInbox />;
        break;
      default:
        itemIcon = <FaMoneyBillWave />;
        break;
    }
  }

  return (
    <li>
      <Card className={`transaction ${classes.item}`}>
        <div className={classes.title}>
          {itemIcon}
          <h2>{props.title}</h2>
        </div>
        <div className={classes.description}>
          <div>
            <p className={classes.price}>${props.amount}</p>
            <p className={classes.date}>{date}</p>
          </div>
          <OptionsMenu onClick={() => ctx.onDelete(props.id)} />
        </div>
      </Card>
    </li>
  );
};

export default TransactionItem;
