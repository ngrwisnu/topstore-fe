import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import TableRow from "./TableRow";
import { getMemberOverview } from "../../../helpers/player";
import { toast } from "react-toastify";
import {
  CategoryTypes,
  PaymentHistoryTypes,
  VoucherTopupHistoryTypes,
} from "../../../helpers/data-types";
import EmptyContent from "../../atom/EmptyContent";
import EmptyTopup from "../../atom/EmptyTopup";

interface HistoryTypes {
  voucherTopupHistory: VoucherTopupHistoryTypes;
  paymentHistory: PaymentHistoryTypes;
  historyUser: {
    name: string;
    phoneNumber: number;
  };
  _id: string;
  name: string;
  tax: number;
  value: number;
  status: string;
  player: string;
  category: "Mobile" | "Desktop";
  user: string;
}

const ContentOverview = () => {
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState([]);

  const memberOverview = useCallback(async () => {
    const response = await getMemberOverview();

    if (response?.error) {
      toast.error(response?.message);
    } else {
      setHistory(response?.data.history);
      setCount(response?.data.count);
    }
  }, []);

  useEffect(() => {
    memberOverview();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {!count.length ? (
                <div
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <EmptyTopup title="PC" icon="game-desktop" />
                  <EmptyTopup title="Mobile" icon="game-mobile" />
                  <EmptyTopup title="Desktop" icon="game-desktop" />
                </div>
              ) : (
                count.map(
                  (item: { _id: string; value: number; name: string }) => {
                    return (
                      <CategoryCard
                        key={item._id}
                        spent={item.value}
                        icon={item.name}
                      >
                        {item.name}
                        <br />
                        Games
                      </CategoryCard>
                    );
                  }
                )
              )}
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
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {!history.length ? (
                  <EmptyContent />
                ) : (
                  history.map((item: HistoryTypes) => {
                    return (
                      <TableRow
                        name={item.voucherTopupHistory.gameName}
                        image={item.voucherTopupHistory.thumbnail}
                        category={item.voucherTopupHistory.category}
                        item={`${item.voucherTopupHistory.coinQuantity} ${item.voucherTopupHistory.coinName}`}
                        price={item.value}
                        status={item.status}
                        key={item._id}
                      />
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentOverview;
