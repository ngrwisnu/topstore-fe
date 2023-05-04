import { CheckoutDataTypes } from "./data-types";
import axios from "axios";

const API_ROOT = process.env.NEXT_PUBLIC_LOCAL_SERVER;
const API_VERSION = "api/v1";
const API_ENDPOINT = "players/landingpage";

export const getGameFeature = async () => {
  let response = await axios.get(`${API_ROOT}/${API_VERSION}/${API_ENDPOINT}`);

  return response.data;
};

export const getVoucherFeature = async (id: any) => {
  const API_ENDPOINT = `players/${id}/detail`;

  let response = await axios.get(`${API_ROOT}/${API_VERSION}/${API_ENDPOINT}`);

  return response.data;
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
