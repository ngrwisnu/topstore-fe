import { CheckoutDataTypes } from "./data-types";

const MOCK_API = process.env.NEXT_PUBLIC_MOCK_SERVER;
const API_VERSION = "api/v1";
const URL = process.env.NEXT_PUBLIC_SERVER;
const ENDPOINT = "orders.json";

export const getGameFeature = async () => {
  const API_ENDPOINT = "players/landing-page";

  let data = await fetch(`${MOCK_API}/${API_VERSION}/${API_ENDPOINT}`, {
    headers: {
      "x-api-key": `${process.env.NEXT_PUBLIC_KEY}`,
    },
  });

  let response = await data.json();
  return response;
};

export const getVoucherFeature = async (id: any) => {
  const API_ENDPOINT = `players/${id}/detail`;

  let data = await fetch(`${MOCK_API}/${API_VERSION}/${API_ENDPOINT}`, {
    headers: {
      "x-api-key": `${process.env.NEXT_PUBLIC_KEY}`,
    },
  });

  let response = await data.json();
  return response;
};

export const getGameCategories = async () => {
  const API_ENDPOINT = `players/categories`;

  let data = await fetch(`${MOCK_API}/${API_VERSION}/${API_ENDPOINT}`, {
    headers: {
      "x-api-key": `${process.env.NEXT_PUBLIC_KEY}`,
    },
  });

  let response = await data.json();
  return response;
};

export const setOrder = async (checkoutData: CheckoutDataTypes) => {
  try {
    const data = await fetch(`${URL}/${ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkoutData),
    });

    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
