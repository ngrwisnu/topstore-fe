import { useRouter } from "next/router";
import { useEffect } from "react";
import { FetchAPIProps } from "../data-types";

export const useFetchAPI = async ({
  url,
  method = "GET",
  headers,
  data,
}: FetchAPIProps) => {
  let res = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(data),
  });

  let response = await res.json();
  return response;
};

export const usePrivateRouter = () => {
  const router = useRouter();

  useEffect(() => {
    const loginData = localStorage.getItem("player");

    if (loginData) {
      return;
    } else {
      router.push("/login");
    }
  }, []);
};
