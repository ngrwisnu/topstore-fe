import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { NominalTopUpProps, PaymentProps } from "../../../helpers/data-types";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

const initialNominal = {
  id: "",
  coinName: "",
  coinQuantity: 0,
  price: 0,
};

const initialPaymentMethod = {
  bankId: "",
  type: "",
  bankName: "",
};

const TopUpForm = (props: any) => {
  const [playerId, setPlayerId] = useState("");
  const [bankHolderName, setBankHolderName] = useState("");
  const [nominalTopup, setNominalTopup] = useState(initialNominal);
  const [paymentMethod, setPaymentMethod] = useState(initialPaymentMethod);
  const router = useRouter();

  const nominalChangeHandler = (data: NominalTopUpProps) => {
    setNominalTopup(data);
  };

  const paymentChangeHandler = (data: PaymentProps) => {
    setPaymentMethod(data);
  };

  const continueToCheckout = () => {
    if (
      nominalTopup === initialNominal ||
      paymentMethod === initialPaymentMethod ||
      playerId === "" ||
      bankHolderName === ""
    ) {
      toast.warn("Please complete the field!");
    } else {
      const data = {
        playerId,
        bankHolderName,
        nominalTopup,
        paymentMethod,
      };

      localStorage.setItem("topup-data", JSON.stringify(data));
      router.push("/checkout");
    }
  };
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={playerId}
            onChange={(event) => setPlayerId(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          <NominalItem
            id="603152e0a4dd027eefaccf61"
            coinName="GOLD"
            coinQuantity={50}
            price={1250000}
            onChange={nominalChangeHandler}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf62"
            coinName="GOLD"
            coinQuantity={100}
            price={2250000}
            onChange={nominalChangeHandler}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf63"
            coinName="GOLD"
            coinQuantity={125}
            price={3250000}
            onChange={nominalChangeHandler}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf64"
            coinName="GOLD"
            coinQuantity={500}
            price={5000000}
            onChange={nominalChangeHandler}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf65"
            coinName="GOLD"
            coinQuantity={225}
            price={4250000}
            onChange={nominalChangeHandler}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf66"
            coinName="GOLD"
            coinQuantity={225}
            price={4250000}
            onChange={nominalChangeHandler}
          />
          <div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <PaymentItem
              bankId="60ae2431196ccd27e6587ab3"
              type="VISA"
              bankName="Credit card"
              onChange={paymentChangeHandler}
            />
            <PaymentItem
              bankId="60ae2431196ccd27e6587ab1"
              type="Tranfer"
              bankName="BCA"
              onChange={paymentChangeHandler}
            />

            <div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankHolderName}
          onChange={(event) => setBankHolderName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          onClick={continueToCheckout}
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </button>
        {/* <button
                  type="submit"
                  className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                >
                  Continue
                </button> */}
      </div>
    </form>
  );
};

export default TopUpForm;
