import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CheckoutConfirmation from "../../components/group/CheckoutConfirmation/CheckoutConfirmation";
import CheckoutDetail from "../../components/group/CheckoutDetail/CheckoutDetail";
import CheckoutItem from "../../components/group/CheckoutItem/CheckoutItem";

const initialData = {
  playerId: "",
  bankHolderName: "",
  nominalTopup: {
    id: "",
    coinName: "",
    coinQuantity: 0,
    price: 0,
  },
  paymentMethod: {
    bankId: "",
    bankName: "",
    type: "",
  },
  voucherDetails: {
    name: "",
    thumbnail: "",
    category: {
      _id: "",
      name: "",
      __v: 0,
    },
  },
};

const CheckoutPage = () => {
  const [topUpData, setTopUpData] = useState(initialData);
  const router = useRouter();

  useEffect(() => {
    const loginData = localStorage.getItem("player");

    if (!loginData) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const topUpFromLocal = localStorage.getItem("topup-data");
    setTopUpData(JSON.parse(topUpFromLocal!));
  }, []);

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="">
            <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutItem voucherDetails={topUpData.voucherDetails} />
        <hr />
        <CheckoutDetail
          pid={topUpData.playerId}
          nominalTopup={topUpData.nominalTopup}
          paymentMethod={topUpData.paymentMethod}
          bankHolderName={topUpData.bankHolderName}
        />
        <CheckoutConfirmation />
      </div>
    </section>
  );
};

export default CheckoutPage;
