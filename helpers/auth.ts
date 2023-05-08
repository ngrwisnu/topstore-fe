import axios from "axios";

const API_ROOT = process.env.NEXT_PUBLIC_LOCAL_SERVER;
const ENDPOINT = "players.json";

export const uploadUserSignup = async (userData: any) => {
  try {
    const response = await axios.post(`${API_ROOT}/auth/signup`, userData);

    return response;
  } catch (error: any) {
    return error.response.data;
  }
};
