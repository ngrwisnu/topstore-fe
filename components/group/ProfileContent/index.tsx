import React, { useCallback, useEffect, useState } from "react";
import InputField from "../../../components/atom/Input/InputField";
import Image from "next/image";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { PayloadTypes, PlayerTypes } from "../../../helpers/data-types";
import { IMG } from "../../../utils/variables";
import { updateProfile } from "../../../helpers/dashboard";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ProfileContent = () => {
  const [player, setPlayer] = useState({
    id: "",
    avatar: "",
    name: "",
    email: "",
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const router = useRouter();

  const getUserFromTk = useCallback(async () => {
    const tk = Cookies.get("tk");

    if (tk) {
      const beautyTk = window.atob(tk);
      const payload: PayloadTypes = jwtDecode(beautyTk);
      const player: PlayerTypes = payload.player;

      setPlayer(player);
    }
  }, []);

  useEffect(() => {
    getUserFromTk();
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append("name", player.name);
    data.append("image", player.avatar);

    const response = await updateProfile(data);

    if (response?.error) {
      toast.error(response?.message);
    } else {
      localStorage.clear();
      Cookies.remove("tk");
      router.push("/login");
    }
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
        <div className="bg-card pt-30 ps-30 pe-30 pb-30">
          <form action="">
            <div className="photo d-flex">
              <div className="image-upload">
                <label htmlFor="avatar">
                  {avatarPreview ? (
                    <Image
                      src={avatarPreview}
                      width={90}
                      height={90}
                      alt=""
                      style={{ borderRadius: "100px" }}
                    />
                  ) : (
                    <Image
                      src={`${IMG}/${player.avatar}`}
                      width={90}
                      height={90}
                      alt=""
                      style={{ borderRadius: "100px" }}
                    />
                  )}
                </label>
                <input
                  id="avatar"
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={(e: any) => {
                    const img = e.target.files[0];

                    // @ts-ignore
                    setAvatarPreview(URL.createObjectURL(img));
                    return setPlayer({
                      ...player,
                      avatar: img,
                    });
                  }}
                />
              </div>
            </div>
            <div className="pt-30">
              <label
                htmlFor="name"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
              >
                Fullname
              </label>
              <InputField
                id="name"
                type="text"
                placeholder={player.name}
                onchange={(e) => setPlayer({ ...player, name: e.target.value })}
              />
            </div>
            <div className="pt-30">
              <label
                htmlFor="email"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
              >
                Email Address
              </label>
              <InputField
                id="email"
                type="email"
                placeholder={player.email}
                disabled
              />
            </div>
            <div className="button-group d-flex flex-column pt-50">
              <button
                type="button"
                className="btn btn-save fw-medium text-lg text-white rounded-pill"
                onClick={onSubmit}
              >
                Save My Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProfileContent;
