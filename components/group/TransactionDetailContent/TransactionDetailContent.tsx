import Image from "next/image";
import React from "react";
import TransactionData from "./TransactionData";
import { TransactionHistoryTypes } from "../../../helpers/data-types";
import { IMG } from "../../../utils/variables";

interface TransactionDetailContentProps {
  data: TransactionHistoryTypes;
}

const TransactionDetailContent = (props: TransactionDetailContentProps) => {
  const { data } = props;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details {data.orderId}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <Image
                        src={`${IMG}/${data.voucherTopupHistory.thumbnail}`}
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {data.voucherTopupHistory.gameName}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category: {data.voucherTopupHistory.category}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="fw-medium text-center label pending m-0 rounded-pill">
                    {data.status}
                  </p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <TransactionData name="Your Game ID" value={data.accountUser} />
                <TransactionData name="Order ID" value={data.orderId} />
                <TransactionData
                  name="Item"
                  value={`${data.voucherTopupHistory.coinQuantity} ${data.voucherTopupHistory.coinName}`}
                />
                <TransactionData
                  name="Price"
                  value={data.voucherTopupHistory.price}
                />
                <TransactionData name="Tax (10%)" value={data.tax} />
                <TransactionData name="Total" value={data.value} isColored />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <TransactionData name="Your Account Name" value={data.name} />
                <TransactionData name="Type" value={data.paymentHistory.type} />
                <TransactionData
                  name="Bank Name"
                  value={data.paymentHistory.bankName}
                />
                <TransactionData
                  name="Bank Account Name"
                  value={data.paymentHistory.name}
                />
                <TransactionData
                  name="Bank Number"
                  value={data.paymentHistory.noRekening}
                />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransactionDetailContent;
