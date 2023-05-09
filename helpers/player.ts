import callAPI from "./api";
import { CheckoutDataTypes } from "./data-types";

const API_ROOT = process.env.NEXT_PUBLIC_LOCAL_SERVER;
const API_VERSION = "api/v1";
const API_ENDPOINT = "players/landingpage";

export const getGameFeature = async () => {
  let url = `${API_ROOT}/${API_VERSION}/${API_ENDPOINT}`;

  return callAPI({
    url,
  });
};

export const getVoucherFeature = async (id: any) => {
  const url = `${API_ROOT}/${API_VERSION}/players/${id}/detail`;

  return callAPI({
    url,
  });
};

export const getGameCategories = async () => {
  let url = `${API_ROOT}/${API_VERSION}/players/category`;

  return callAPI({
    url,
  });
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
