import Image from "next/image";
import React from "react";
import { loggedInUser } from "../../../zustand";

const Profile = () => {
  const user = loggedInUser((state: any) => state.data);

  return (
    <div className="user text-center pb-50 pe-30">
      <div className="profile-img-wrapper">
        <Image
          src={user.image}
          width={90}
          height={90}
          alt="profile"
          className="img-fluid mb-20"
        />
      </div>
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.fullname}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
};

export default Profile;
