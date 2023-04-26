import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setOrder } from "../../../helpers/player";
import { loggedInUser } from "../../../zustand";

const CheckoutConfirmation = () => {
  const [isPaid, setIsPaid] = useState(false);
  const router = useRouter();

  const user = loggedInUser((state: any) => state.data);

  useEffect(() => {
    console.log(user);
  }, []);

  const onSubmit = async () => {
    const checkoutDataLocal = localStorage.getItem("topup-data");
    const checkoutData = JSON.parse(checkoutDataLocal!);

    if (!isPaid) {
      toast.warn("Complete the payment first!");
    } else {
      const data = {
        ...checkoutData,
        status: "Pending",
      };

      const response = await setOrder(data);
      localStorage.removeItem("topup-data");
      router.push("/complete-checkout");
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
