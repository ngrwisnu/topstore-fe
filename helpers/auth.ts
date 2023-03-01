import { PlayerTypes } from "./data-types";

const URL = process.env.NEXT_PUBLIC_SERVER;
const ENDPOINT = "players.json";

export const uploadUserSignup = async (userData: PlayerTypes) => {
  try {
    const data = await fetch(`${URL}/${ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const response = await data.json();
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getPlayers = async () => {
  try {
    const data = await fetch(`${URL}/${ENDPOINT}`);
    const response = await data.json();

    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
