import Sidebar from "../../../components/group/Sidebar/Sidebar";
import TransactionsContent from "../../../components/group/TransactionsContent/TransactionsContent";
import { usePrivateRouter } from "../../../helpers/hooks";

const Transactions = () => {
  usePrivateRouter();

  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
};

export default Transactions;
