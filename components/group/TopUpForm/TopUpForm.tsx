import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  NominalTopUpProps,
  PaymentProps,
  TopUpFormProps,
} from "../../../helpers/data-types";
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

const TopUpForm = (props: TopUpFormProps) => {
  const { payments, nominals } = props;
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

  // const continueToCheckout = () => {
  //   if (
  //     nominalTopup === initialNominal ||
  //     paymentMethod === initialPaymentMethod ||
  //     playerId === "" ||
  //     bankHolderName === ""
  //   ) {
  //     toast.warn("Please complete the field!");
  //   } else {
  //     const data = {
  //       voucherDetails: {
  //         category: props.voucherDetails.category,
  //         name: props.voucherDetails.name,
  //         thumbnail: props.voucherDetails.thumbnail,
  //       },
  //       playerId,
  //       bankHolderName,
  //       nominalTopup,
  //       paymentMethod,
  //     };

  //     localStorage.setItem("topup-data", JSON.stringify(data));
  //     router.push("/checkout");
  //   }
  // };

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
          {nominals?.map((item) => {
            return (
              <NominalItem
                id={item._id}
                coinName={item.coinName}
                coinQuantity={item.coinQuantity}
                price={item.price}
                onChange={nominalChangeHandler}
                key={item._id}
              />
            );
          })}
          <div className="col-lg-4 col-sm-6">{/* <!-- Blank --> */}</div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments?.map((payment) => {
              return payment.banks?.map((bank) => {
                return (
                  <PaymentItem
                    bankId={bank._id}
                    type={payment.type}
                    bankName={bank.bankName}
                    onChange={paymentChangeHandler}
                    key={bank._id}
                  />
                );
              });
            })}
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
          onClick={() => {}}
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
