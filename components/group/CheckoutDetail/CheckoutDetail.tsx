import React from "react";
import { NominalTopUpProps, PaymentProps } from "../../../helpers/data-types";
import { getCurrency } from "../../../helpers/NumberFormatter";
import randomNumber from "../../../utils/randomNumber";

interface CheckoutDetailProps {
  pid: string;
  bankHolder: string;
  nominal: NominalTopUpProps;
  payment: PaymentProps;
}

const CheckoutDetail = (props: CheckoutDetailProps) => {
  const { pid, bankHolder, nominal, payment } = props;

  const price = nominal.price;
  const tax = price * (10 / 100);
  const total = price + tax;

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID <span className="purchase-details">{pid}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID{" "}
          <span className="purchase-details">{`#TS${randomNumber()}`}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {nominal.coinQuantity} {nominal.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price <span className="purchase-details">{getCurrency(price)}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%) <span className="purchase-details">{getCurrency(tax)}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            {getCurrency(total)}
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{bankHolder}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type <span className="payment-details">{payment.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name <span className="payment-details">{payment.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">{payment.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">{payment.accountNumber}</span>
        </p>
      </div>
    </>
  );
};

export default CheckoutDetail;
