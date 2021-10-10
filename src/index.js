import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TransactionsContextProvider } from "./store/transactions-context";

ReactDOM.render(
  <TransactionsContextProvider>
    <App />
  </TransactionsContextProvider>,
  document.getElementById("root")
);
