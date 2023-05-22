import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CheckoutConfirmation from "../../components/group/CheckoutConfirmation/CheckoutConfirmation";
import CheckoutDetail from "../../components/group/CheckoutDetail/CheckoutDetail";
import CheckoutItem from "../../components/group/CheckoutItem/CheckoutItem";

import jwtDecode from "jwt-decode";
import {
  GetServerSideProps,
  PayloadTypes,
  PlayerTypes,
} from "../../helpers/data-types";
import randomNumber from "../../utils/randomNumber";

const initialData = {
  id: "",
  bankHolder: "",
  nominal: {
    id: "",
    coinName: "",
    coinQuantity: 0,
    price: 0,
  },
  payment: {
    id: "",
    bankId: "",
    bankName: "",
    type: "",
    name: "",
    accountNumber: "",
  },
};

interface CheckoutProps {
  user: PlayerTypes;
}

const CheckoutPage = (props: CheckoutProps) => {
  const [topUpData, setTopUpData] = useState(initialData);

  const [game, setGame] = useState({
    thumbnail: "",
    name: "",
    category: "",
    _id: "",
  });
  const [orderId, setOrderId] = useState("#TS0000");

  useEffect(() => {
    const orderid = randomNumber();
    const gameDetails = JSON.parse(localStorage.getItem("game-details")!);
    const topupDetails = JSON.parse(localStorage.getItem("topup-details")!);

    setGame({
      thumbnail: gameDetails?.thumbnail,
      name: gameDetails?.name,
      category: gameDetails?.category.name,
      _id: gameDetails?._id,
    });
    setTopUpData(topupDetails);
    setOrderId(`#TS${orderid}`);
  }, []);

  return (
    <>
      <Head>
        <title>TopStore | Checkout</title>
        <meta name="description" content="TopStore's Checkout page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          <CheckoutItem voucherDetails={game} />
          <hr />
          <CheckoutDetail
            pid={topUpData.id}
            nominal={topUpData.nominal}
            payment={topUpData.payment}
            bankHolder={topUpData.bankHolder}
            orderId={orderId}
          />
          <CheckoutConfirmation
            orderId={orderId}
            voucher={game}
            topup={topUpData}
          />
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;

export async function getServerSideProps({ req }: GetServerSideProps) {
  const tk = req.cookies.tk;

  if (!tk) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const beautyTk = Buffer.from(tk, "base64").toString("ascii");
  const payload: PayloadTypes = jwtDecode(beautyTk);
  const user: PlayerTypes = payload.player;

  return {
    props: {
      user,
    },
  };
}
