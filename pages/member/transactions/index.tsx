import jwtDecode from "jwt-decode";
import Sidebar from "../../../components/group/Sidebar/Sidebar";
import TransactionsContent from "../../../components/group/TransactionsContent/TransactionsContent";
import { PayloadTypes, PlayerTypes } from "../../../helpers/data-types";
import { GetServerSideProps } from "../../../helpers/data-types";

const Transactions = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
};

export default Transactions;

export async function getServerSideProps({ req }: GetServerSideProps) {
  const tk = req.cookies.tk;

  if (!tk) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
