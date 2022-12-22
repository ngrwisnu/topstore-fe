import Sidebar from "../../../components/group/Sidebar/Sidebar";
import TransactionsContent from "../../../components/group/TransactionsContent/TransactionsContent";

const Transactions = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
};

export default Transactions;
