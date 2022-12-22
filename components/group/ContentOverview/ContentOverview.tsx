import Image from "next/image";
import React from "react";
import CategoryCard from "./CategoryCard";
import TableRow from "./TableRow";

const ContentOverview = () => {
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
              <CategoryCard spent={18000500} icon="game-desktop">
                Desktop
                <br />
                Games
              </CategoryCard>
              <CategoryCard spent={8455000} icon="game-mobile">
                Mobile
                <br />
                Games
              </CategoryCard>
              <CategoryCard spent={5000000} icon="game-other">
                Other
                <br />
                Games
              </CategoryCard>
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
                <TableRow
                  name="Mobile Legends: The New Battle 2021"
                  image="overview-1"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                />
                <TableRow
                  name="Call of Duty:Modern"
                  image="overview-2"
                  category="Desktop"
                  item={550}
                  price={740000}
                  status="Pending"
                />
                <TableRow
                  name="Clash of Clans"
                  image="overview-3"
                  category="Mobile"
                  item={100}
                  price={120000}
                  status="Success"
                />
                <TableRow
                  name="The Royal Game"
                  image="overview-4"
                  category="Mobile"
                  item={200}
                  price={200000}
                  status="Failed"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentOverview;
