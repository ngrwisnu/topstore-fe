import { PlayerTypes } from "./data-types";
import { useFetchAPI } from "./hooks";

const URL = process.env.NEXT_PUBLIC_SERVER;
const ENDPOINT = "players.json";

export const uploadUserSignup = async (userData: PlayerTypes) => {
  try {
    const url = `${URL}/${ENDPOINT}`;

    const result = await useFetchAPI({
      url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: userData,
    });

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getPlayers = async () => {
  try {
    const url = `${URL}/${ENDPOINT}`;

    const result = await useFetchAPI({
      url,
    });

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
