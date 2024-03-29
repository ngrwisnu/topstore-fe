import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { uploadUserSignup } from "../../helpers/auth";
import {
  CategoryTypes,
  GameCategoriesTypes,
  PlayerTypes,
} from "../../helpers/data-types";
import { getGameCategories } from "../../helpers/player";

import { useUserFormStore } from "../../zustand";
import { toast } from "react-toastify";

const UploadPhotoPage = () => {
  const [categories, setCategories] = useState<any>(null);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("/icon/avatar-profile.svg");
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  const checkUser = useUserFormStore((state: any) => state.data);

  const gameCategories = useCallback(async () => {
    const response = await getGameCategories();
    setCategories(response?.data);
    setFavorite(response?.data[0]._id);
  }, []);

  useEffect(() => {
    gameCategories();
  }, []);

  const submitHandler = async () => {
    const data = new FormData();
    data.append("image", image);
    data.append("name", checkUser.fullname);
    data.append("username", checkUser.username);
    data.append("email", checkUser.email);
    data.append("password", checkUser.password);
    data.append("favorite", favorite);

    const response = await uploadUserSignup(data);

    if (response?.error) {
      toast.error("Email has been registered!");
    } else {
      router.push("/sign-up-success");
    }
  };

  const changeHandler = (event: any) => {
    const img = event.target.files[0];
    // @ts-ignore
    setAvatar(URL.createObjectURL(img));
    return setImage(img);
  };

  return (
    <>
      <Head>
        <title>TopStore | Sign Up</title>
        <meta name="description" content="TopStore's Sign Up page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      <Image
                        src={avatar}
                        width={120}
                        height={120}
                        alt="upload photo"
                        style={{ borderRadius: "100%" }}
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {userData?.fullname}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {userData?.email}
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    value={favorite}
                    // @ts-ignore
                    onChange={(e) => setFavorite(e.target.value)}
                  >
                    {categories?.map((item: GameCategoriesTypes) => {
                      return (
                        <option value={item._id} key={item._id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  type="button"
                  onClick={submitHandler}
                >
                  Create My Account
                </button>

                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href="#"
                  role="button"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UploadPhotoPage;
