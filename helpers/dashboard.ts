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

export const getSingleTransaction = async (id: string, token: string) => {
  const url = `${API_ROOT}/${API_VERSION}/players/history/${id}/detail`;

  return callAPI({
    url,
    serverTk: token,
  });
};

export const updateProfile = async (data: FormData) => {
  const url = `${API_ROOT}/${API_VERSION}/players/profile`;

  return callAPI({
    url,
    method: "PUT",
    data,
    token: true,
  });
};
