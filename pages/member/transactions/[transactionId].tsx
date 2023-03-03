import Head from "next/head";
import Sidebar from "../../../components/group/Sidebar/Sidebar";
import TransactionDetailContent from "../../../components/group/TransactionDetailContent/TransactionDetailContent";
import { usePrivateRouter } from "../../../helpers/hooks";

const TransactionDetailPage = () => {
  usePrivateRouter();

  return (
    <>
      <Head>
        <title>TopStore | Transactions</title>
        <meta name="description" content="TopStore's Transactions page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="transactions-detail overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionDetailContent />
      </section>
    </>
  );
};

export default TransactionDetailPage;
