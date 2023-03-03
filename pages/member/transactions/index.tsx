import Head from "next/head";
import Sidebar from "../../../components/group/Sidebar/Sidebar";
import TransactionsContent from "../../../components/group/TransactionsContent/TransactionsContent";
import { usePrivateRouter } from "../../../helpers/hooks";

const Transactions = () => {
  usePrivateRouter();

  return (
    <>
      <Head>
        <title>TopStore | Transactions</title>
        <meta name="description" content="TopStore's Transactions page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionsContent />
      </section>
    </>
  );
};

export default Transactions;
