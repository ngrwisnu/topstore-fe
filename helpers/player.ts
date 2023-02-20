export const getGameFeature = async () => {
  const API_ROOT = process.env.NEXT_PUBLIC_ROOT_API;
  const API_VERSION = "api/v1";
  const API_ENDPOINT = "players/landing-page";

  let data = await fetch(`${API_ROOT}/${API_VERSION}/${API_ENDPOINT}`, {
    headers: {
      "x-api-key": `${process.env.NEXT_PUBLIC_KEY}`,
    },
  });

  let response = await data.json();
  return response;
};
