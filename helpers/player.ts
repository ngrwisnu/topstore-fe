import callAPI from "./api";
import { CheckoutDataTypes } from "./data-types";

const API_ROOT = process.env.NEXT_PUBLIC_ONLINE_SERVER;
const API_VERSION = "api/v1";

export const getGameFeature = async () => {
  let url = `${API_ROOT}/${API_VERSION}/players/landingpage`;

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

export const setOrder = async (data: CheckoutDataTypes) => {
  let url = `${API_ROOT}/${API_VERSION}/players/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
};

export const getMemberOverview = async () => {
  const url = `${API_ROOT}/${API_VERSION}/players/dashboard`;

  return callAPI({
    url,
    token: true,
  });
};
