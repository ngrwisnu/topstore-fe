import Head from "next/head";

import jwtDecode from "jwt-decode";
import Sidebar from "../../../components/group/Sidebar/Sidebar";
import TransactionDetailContent from "../../../components/group/TransactionDetailContent/TransactionDetailContent";
import {
  GetServerSideProps,
  PayloadTypes,
  PlayerTypes,
  TransactionHistoryTypes,
} from "../../../helpers/data-types";
import { getSingleTransaction } from "../../../helpers/dashboard";

interface TransactionDetailProps {
  transaction: TransactionHistoryTypes;
}

const TransactionDetailPage = (props: TransactionDetailProps) => {
  const { transaction } = props;

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
        <TransactionDetailContent data={transaction} />
      </section>
    </>
  );
};

export default TransactionDetailPage;

interface GetServerSideTransactions extends GetServerSideProps {
  params: {
    transactionId: string;
  };
}

export async function getServerSideProps({
  req,
  params,
}: GetServerSideTransactions) {
  const tk = req.cookies.tk;
  const { transactionId } = params;

  if (!tk) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const beautyTk = Buffer.from(tk, "base64").toString("ascii");
  const payload: PayloadTypes = jwtDecode(beautyTk);
  const user: PlayerTypes = payload.player;

  const response = await getSingleTransaction(transactionId, beautyTk);

  return {
    props: {
      transaction: response?.data,
    },
  };
}
