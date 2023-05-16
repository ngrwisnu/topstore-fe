import callAPI from "./api";

const API_ROOT = process.env.NEXT_PUBLIC_LOCAL_SERVER;
const API_VERSION = "api/v1";

export const getMemberTransactions = async (value: string) => {
  let params = "";

  if (value === "all") {
    params = "";
  } else {
    params = `?status=${value}`;
  }

  const url = `${API_ROOT}/${API_VERSION}/players/history${params}`;

  return callAPI({
    url,
    token: true,
  });
};
