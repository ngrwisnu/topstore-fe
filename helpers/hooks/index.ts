import { useRouter } from "next/router";
import { useEffect } from "react";

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

  // return isLoggedIn;
};
