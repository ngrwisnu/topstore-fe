import Sidebar from "../../../components/group/Sidebar/Sidebar";
import TransactionDetailContent from "../../../components/group/TransactionDetailContent/TransactionDetailContent";

const TransactionDetailPage = () => {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent />
    </section>
  );
};

export default TransactionDetailPage;
