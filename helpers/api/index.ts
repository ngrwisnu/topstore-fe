import axios, { AxiosRequestConfig } from "axios";

export default async function callAPI({
  url,
  method = "GET",
  data,
}: AxiosRequestConfig) {
  try {
    const response = await axios({
      url,
      method,
      data,
    });

    return {
      error: false,
      message: "success",
      data: response.data.data,
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
