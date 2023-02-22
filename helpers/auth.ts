const LOCAL_API = process.env.NEXT_PUBLIC_LOCAL_SERVER;

export const uploadUserSignup = async (userData: any) => {
  localStorage.setItem("signup-data", JSON.stringify(userData));

  const response = await localStorage.getItem("signup-data");
  console.log(JSON.parse(response!));

  //   const API_ENDPOINT = "auth/signup";

  //   let data = await fetch(`${LOCAL_API}/${API_ENDPOINT}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   });

  //   let response = await data.json();
  //   return response;
};
