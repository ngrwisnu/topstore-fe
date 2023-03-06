import { CheckoutDataTypes } from "./data-types";
import { useFetchAPI } from "./hooks";

const MOCK_API = process.env.NEXT_PUBLIC_MOCK_SERVER;
const API_VERSION = "api/v1";
const URL = process.env.NEXT_PUBLIC_SERVER;
const ENDPOINT = "orders.json";

export const getGameFeature = async () => {
  const url = `${MOCK_API}/${API_VERSION}/players/landing-page`;

  const result = await useFetchAPI({
    url,
    headers: {
      "x-api-key": `${process.env.NEXT_PUBLIC_KEY}`,
    },
  });

  return result;
};

export const getVoucherFeature = async (id: any) => {
  const url = `${MOCK_API}/${API_VERSION}/players/${id}/detail`;

  const result = await useFetchAPI({
    url,
    headers: {
      "x-api-key": `${process.env.NEXT_PUBLIC_KEY}`,
    },
  });

  return result;
};

export const getGameCategories = async () => {
  const url = `${MOCK_API}/${API_VERSION}/players/categories`;

  const result = await useFetchAPI({
    url,
    headers: {
      "x-api-key": `${process.env.NEXT_PUBLIC_KEY}`,
    },
  });

  return result;
};

export const setOrder = async (checkoutData: CheckoutDataTypes) => {
  try {
    const url = `${URL}/${ENDPOINT}`;

    const result = await useFetchAPI({
      url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: checkoutData,
    });

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
