import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { uploadUserSignup } from "../../helpers/auth";
import { GameCategoriesTypes } from "../../helpers/data-types";
import { getGameCategories } from "../../helpers/player";
import { useUserFormStore } from "../../zustand";

const UploadPhotoPage = () => {
  const [categories, setCategories] = useState<any>(null);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState(null);
  const [avatar, setAvatar] = useState("/icon/avatar-profile.svg");
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  const checkUser = useUserFormStore((state: any) => state.data);

  const gameCategories = useCallback(async () => {
    const data = await getGameCategories();

    setCategories(data);
    setFavorite(data.data[0]._id);
  }, []);

  useEffect(() => {
    console.log(checkUser);
    gameCategories();

    // async function getLocalStorage() {
    //   const userData = await localStorage.getItem("user-form");
    //   // @ts-ignore
    //   setUserData(JSON.parse(userData));
    // }
    // getLocalStorage();
  }, []);

  const submitHandler = async () => {
    const data = {
      name: checkUser.fullname,
      username: checkUser.username,
      email: checkUser.email,
      password: checkUser.password,
      image: image,
      favorite: favorite,
    };

    // await uploadUserSignup(data);
    console.log(data);

    // router.push("/sign-up-success");
  };

  const changeHandler = (event: any) => {
    const img = event.target.files[0];
    // @ts-ignore
    setAvatar(URL.createObjectURL(img));
    return setImage(img);
  };

  return (
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
                  {categories?.data.map((item: GameCategoriesTypes) => {
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
  );
};

export default UploadPhotoPage;
