import axios from "axios";
import { LoginTypes } from "./data-types";

const API_ROOT = process.env.NEXT_PUBLIC_LOCAL_SERVER;

export const uploadUserSignup = async (userData: any) => {
  try {
    const response = await axios.post(`${API_ROOT}/auth/signup`, userData);

    return response;
  } catch (error: any) {
    return error.response.data;
  }
};

export const setLogin = async (userData: LoginTypes) => {
  try {
    const response = await axios.post(`${API_ROOT}/auth/signin`, userData);

    return {
      error: false,
      message: "success",
      data: response.data.data,
    };
  } catch (error: any) {
    console.log("status code: ", error.response.status);
    if (error.response.status > 300) {
      const res = {
        error: true,
        message: error.response.data,
        data: null,
      };

      return res;
    }
  }
};
