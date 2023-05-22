import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { IMG } from "../../../utils/variables";

const Auth = () => {
  const [isLogin, setIslogin] = useState(false);
  const [avatar, setAvatar] = useState("/img/placeholder.jpg");
  const router = useRouter();

  useEffect(() => {
    const tk = Cookies.get("tk");

    if (tk) {
      const beautyTk = window.atob(tk!);
      const payload = jwtDecode(beautyTk);
      // @ts-ignore
      const user = payload?.player;

      setIslogin(true);
      setAvatar(user.avatar);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    Cookies.remove("tk");
    setIslogin(false);
    router.reload();
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <Link
            className="dropdown-toggle ms-lg-40"
            href="/"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src={`${IMG}/${avatar}`}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </Link>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/wallet"
              >
                Wallet
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/member/edit-profile"
              >
                Account Settings
              </Link>
            </li>
            <li>
              <button
                className="dropdown-item text-lg color-palette-2"
                type="button"
                onClick={logoutHandler}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        href="/login"
        role="button"
      >
        Sign In
      </Link>
    </li>
  );
};

export default Auth;
