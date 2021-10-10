import { useContext } from "react";
import TransactionsContext from "../../store/transactions-context";
import ChartBar from "./ChartBar";
import classes from "./Chart.module.css";
import Card from "../UI/Card";

const Chart = (props) => {
  const ctx = useContext(TransactionsContext);

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of ctx.transactions) {
    if(expense.category === 'expense') {
      const expenseMonth = new Date(expense.date).getMonth();
      chartDataPoints[expenseMonth].value += expense.amount;
    }
  }

  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  const totalMid = totalMaximum / 2;

  return (
    <div className={classes.chartCard}>
      <h2>Yearly Expense Breakdown</h2>
      <Card className={`chart ${classes.chart}`}>
        <div className={classes.points}>
          <p>${totalMaximum}</p>
          <p>${totalMid}</p>
          <p>$0</p>
        </div>
        <div className={classes.bars}>
          {chartDataPoints.map((dataPoint) => (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Chart;
