import NewTransaction from "./components/NewTransaction/NewTransaction";
import Layout from "./components/Layout/Layout";
import Balance from "./components/Balance/Balance";
import Chart from "./components/Chart/Chart";
import Tabs from "./components/Layout/Tabs";

const App = () => {

  return (
      <Layout>
        <Balance />
        <Chart />
        <Tabs />
        <NewTransaction />
      </Layout>
  );
};

export default App;
