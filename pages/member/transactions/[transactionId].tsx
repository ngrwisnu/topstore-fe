import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "../../../components/group/Sidebar/Sidebar";
import TransactionDetailContent from "../../../components/group/TransactionDetailContent/TransactionDetailContent";

const TransactionDetailPage = () => {
  const router = useRouter();

  useEffect(() => {
    const loginData = localStorage.getItem("player");

    if (!loginData) {
      router.push("/login");
    }
  }, []);

  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionDetailContent />
    </section>
  );
};

export default TransactionDetailPage;
