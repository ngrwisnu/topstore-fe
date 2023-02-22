const URL = process.env.NEXT_PUBLIC_SERVER;
const ENDPOINT = "players.json";

export const uploadUserSignup = async (userData: any) => {
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
  } catch (error) {
    console.log(error);
  }
};

export const getPlayers = async () => {
  try {
    const data = await fetch(`${URL}/${ENDPOINT}`);
    const response = await data.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};
