import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PayloadTypes } from "../../../helpers/data-types";

const Profile = () => {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const tk = Cookies.get("tk");

    if (tk) {
      const beautyTk = window.atob(tk);
      const payload: PayloadTypes = jwtDecode(beautyTk);

      setUser((prev) => ({
        ...prev,
        ...payload?.player,
      }));
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <div
        className="img-wrapper"
        style={{
          width: "90px",
          height: "90px",
          overflow: "hidden",
          borderRadius: "100px",
          margin: "0 auto",
        }}
      >
        <Image
          src={
            `${process.env.NEXT_PUBLIC_LOCAL_SERVER}/uploads/${user.avatar}` ||
            "/img/avatar-1.png"
          }
          width={90}
          height={90}
          alt="profile-picture"
          className="img-fluid mb-20"
        />
      </div>
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
};

export default Profile;
