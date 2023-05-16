import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverTk?: string;
}

export default async function callAPI({
  url,
  method = "GET",
  data,
  token,
  serverTk,
}: CallAPIProps) {
  try {
    let headers = {};

    if (serverTk) {
      headers = {
        Authorization: `Bearer ${serverTk}`,
      };
    } else if (token) {
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
