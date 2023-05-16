import { useCallback, useEffect, useState } from "react";
import TableRow from "./TableRow";
import Tabs from "./Tabs";
import { getMemberTransactions } from "../../../helpers/dashboard";
import { toast } from "react-toastify";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import { VoucherTopupHistoryTypes } from "../../../helpers/data-types";

interface TransactionsTypes {
  status: string;
  value: number;
  voucherTopupHistory: VoucherTopupHistoryTypes;
  _id: string;
}

const TransactionsContent = () => {
  const [tab, setTab] = useState("all");
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const memberTransactions = useCallback(async (value: string) => {
    const response = await getMemberTransactions(value);

    if (response?.error) {
      toast.error(response?.message);
    } else {
      setTotal(response?.data.total);
      setTransactions(response?.data.data);
      console.log(response);
    }
  }, []);

  useEffect(() => {
    memberTransactions("");
  }, []);

  const IMG = `${process.env.NEXT_PUBLIC_LOCAL_SERVER}/uploads`;

  const tabHandler = (value: string) => {
    setTab(value);
    memberTransactions(value);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            {currencyFormatter(total)}
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <Tabs
                title="All"
                onclick={() => tabHandler("all")}
                isActive={tab === "all"}
              />
              <Tabs
                title="Pending"
                onclick={() => tabHandler("pending")}
                isActive={tab === "pending"}
              />
              <Tabs
                title="Success"
                onclick={() => tabHandler("success")}
                isActive={tab === "success"}
              />
              <Tabs
                title="Failed"
                onclick={() => tabHandler("failed")}
                isActive={tab === "failed"}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transactions.map((item: TransactionsTypes) => {
                  return (
                    <TableRow
                      key={item._id}
                      name={item.voucherTopupHistory.gameName}
                      image={`${IMG}/${item.voucherTopupHistory.thumbnail}`}
                      category={item.voucherTopupHistory.category}
                      item={`${item.voucherTopupHistory.coinQuantity} ${item.voucherTopupHistory.coinName}`}
                      price={item.value}
                      status={item.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionsContent;
