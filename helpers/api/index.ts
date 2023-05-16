import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
}

export default async function callAPI({
  url,
  method = "GET",
  data,
  token,
}: CallAPIProps) {
  try {
    let headers = {};

    if (token) {
      const tk = Cookies.get("tk");

      if (tk) {
        const jwtTk = window.atob(tk);
        headers = {
          Authorization: `Bearer ${jwtTk}`,
        };
      }
    }

    const response = await axios({
      url,
      method,
      data,
      headers,
    });

    let length = Object.keys(response.data).length;

    return {
      error: false,
      message: "success",
      data: length > 1 ? response.data : response.data.data,
    };
  } catch (error: any) {
    if (error.response.status > 300) {
      const res = {
        error: true,
        message: error.response.data,
        data: null,
      };

      return res;
    }
  }
}
