import React from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";

type TransactionDataType = {
  name: string;
  value: string | number;
  isColored?: boolean;
};

const TransactionData = (props: TransactionDataType) => {
  const { name, value, isColored } = props;

  let namesValue;
  if (typeof value === "number") {
    namesValue = currencyFormatter(value);
  }

  return (
    <p className="text-lg color-palette-1 mb-20">
      {name}{" "}
      <span className={`purchase-details ${isColored && "color-palette-4"}`}>
        {typeof value === "number" ? namesValue : value}
      </span>
    </p>
  );
};

export default TransactionData;
