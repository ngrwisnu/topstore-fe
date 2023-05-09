import { LoginTypes } from "./data-types";
import callAPI from "./api";

const API_ROOT = process.env.NEXT_PUBLIC_LOCAL_SERVER;

export const uploadUserSignup = async (data: any) => {
  const url = `${API_ROOT}/auth/signup`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
};

export const setLogin = async (data: LoginTypes) => {
  const url = `${API_ROOT}/auth/signin`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
};
