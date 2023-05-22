import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setOrder } from "../../../helpers/player";

import { CheckoutDataTypes } from "../../../helpers/data-types";

const CheckoutConfirmation = ({ voucher, topup, orderId }: any) => {
  const [isPaid, setIsPaid] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    if (!isPaid) {
      toast.warn("Complete the payment first!");
    } else {
      const data: CheckoutDataTypes = {
        voucher: voucher._id,
        nominal: topup.nominal.id,
        payment: topup.payment.id,
        bank: topup.payment.bankId,
        name: topup.bankHolder,
        accountUser: topup.id,
        orderId,
      };

      const response = await setOrder(data);

      if (response?.error) {
        toast.error(response.message);
      } else {
        localStorage.clear();
        router.push("/complete-checkout");
      }
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={isPaid}
          onChange={() => setIsPaid(!isPaid)}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
};

export default CheckoutConfirmation;
