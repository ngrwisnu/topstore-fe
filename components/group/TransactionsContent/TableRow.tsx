import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import React from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";

type TransactionTableRowType = {
  image: string;
  name: string;
  category: string;
  item: string;
  price: number;
  status: string;
};

const TableRow = (props: TransactionTableRowType) => {
  const { image, name, category, item, price, status } = props;

  const formattedPrice = currencyFormatter(price);

  const statusColor = cx({
    "float-start icon-status": true,
    pending: status === "pending",
    success: status === "success",
    failed: status === "failed",
  });

  return (
    <tr data-category={status} className="align-middle">
      <th scope="row">
        <div
          className="float-start me-3 mb-lg-0 mb-3"
          style={{
            width: "80px",
            height: "60px",
            overflow: "hidden",
            borderRadius: "0.75rem",
          }}
        >
          <Image src={image} width="80" height="80" alt="" />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {name}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">{formattedPrice}</p>
      </td>
      <td>
        <div>
          <span className={statusColor}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <Link
          href="/member/transactions/detail"
          className="btn btn-status rounded-pill text-sm"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
