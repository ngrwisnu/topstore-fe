import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { uploadUserSignup } from "../../helpers/auth";
import { CategoryTypes, PlayerTypes } from "../../helpers/data-types";
import { getGameCategories } from "../../helpers/player";
import { userDataStore } from "../../zustand";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

const initialCategories = [
  {
    _id: "",
    name: "",
    __v: 0,
  },
];

const UploadPhotoPage = () => {
  const [categories, setCategories] =
    useState<CategoryTypes[]>(initialCategories);
  const [favourite, setFavourite] = useState("");
  const [avatar, setAvatar] = useState("/icon/avatar-profile.svg");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadImage, setUploadImage] = useState(false);
  const router = useRouter();

  // Zustand
  const currentUserData = userDataStore((state: any) => state.data);
  const resetUserData = userDataStore((state: any) => state.resetData);

  const gameCategories = useCallback(async () => {
    const data = await getGameCategories();

    setCategories(data.data);
    setFavourite(data.data[0]._id);
  }, []);

  useEffect(() => {
    gameCategories();
  }, []);

  const submitHandler = async () => {
    // * create user database
    const data: PlayerTypes = {
      ...currentUserData,
      image: imageUrl,
      favorite: favourite,
    };

    uploadUserSignup(data);

    router.push("/sign-up-success");
    resetUserData();
  };

  const changeHandler = (event: any) => {
    const img = event.target.files[0];
    setAvatar(img);

    // @ts-ignore
    const imgName = new Date().getTime() + img.name;

    const storageRef = ref(storage, imgName);
    // @ts-ignore
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress < 100) {
          setUploadImage(true);
        } else {
          setUploadImage(false);
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
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
                        src={imageUrl || avatar}
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
                {/* <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {currentUserData?.fullname}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {userData?.email}
                </p> */}
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
                    value={favourite}
                    // @ts-ignore
                    onChange={(e) => setFavourite(e.target.value)}
                  >
                    {categories?.map((item: CategoryTypes) => {
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
                  disabled={uploadImage}
                >
                  {uploadImage ? "Uploading..." : "Create My Account"}
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
