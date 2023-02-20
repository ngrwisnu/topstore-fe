import React from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";

type TransactionDataType = {
  name: string;
  value?: string | number;
  isColored?: boolean;
  isTaxed?: boolean;
  tax?: number;
};

const TransactionData = (props: TransactionDataType) => {
  const { name, value, isColored, isTaxed, tax } = props;

  //   let namesValue;

  //   if (typeof value === "number") {
  //     const newPrice = new Price(value, tax);

  //     if (isTaxed) {
  //       namesValue = newPrice.taxValue();
  //     } else if (isColored) {
  //       namesValue = newPrice.totalPrice();
  //     } else {
  //       namesValue = newPrice.formattedPrice();
  //     }
  //   }

  return (
    <p className="text-lg color-palette-1 mb-20">
      {name}{" "}
      <span className={`purchase-details ${isColored && "color-palette-4"}`}>
        {typeof value === "number" ? currencyFormatter(value) : value}
      </span>
    </p>
  );
};

export default TransactionData;
