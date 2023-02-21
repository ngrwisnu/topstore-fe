import Link from "next/link";
import React from "react";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

const TopUpForm = (props: any) => {
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
          />
          <NominalItem
            id="603152e0a4dd027eefaccf62"
            coinName="GOLD"
            coinQuantity={100}
            price={2250000}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf63"
            coinName="GOLD"
            coinQuantity={125}
            price={3250000}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf64"
            coinName="GOLD"
            coinQuantity={500}
            price={5000000}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf65"
            coinName="GOLD"
            coinQuantity={225}
            price={4250000}
          />
          <NominalItem
            id="603152e0a4dd027eefaccf66"
            coinName="GOLD"
            coinQuantity={225}
            price={4250000}
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
            />
            <PaymentItem
              bankId="60ae2431196ccd27e6587ab1"
              type="Tranfer"
              bankName="BCA"
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
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <Link
          href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </Link>
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
