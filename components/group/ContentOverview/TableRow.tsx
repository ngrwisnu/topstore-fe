import Image from "next/image";
import cx from "classnames";
import React from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";

type TableRowType = {
  image: string;
  name: string;
  category: "Mobile" | "Desktop";
  item: number;
  price: number;
  status: "Pending" | "Success" | "Failed";
};

const TableRow = (props: TableRowType) => {
  const { image, name, category, item, price, status } = props;

  const formattedPrice = currencyFormatter(price);

  const statusColor = cx({
    "float-start icon-status": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <Image
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt=""
        />
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
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          {formattedPrice}
        </p>
      </td>
      <td>
        <div>
          <span className={statusColor}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
