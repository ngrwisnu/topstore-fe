import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { GameCategoriesTypes } from "../../helpers/data-types";
import { getGameCategories } from "../../helpers/player";

const UploadPhotoPage = () => {
  const [categories, setCategories] = useState<any>(null);
  const [favourite, setFavourite] = useState("");

  const gameCategories = useCallback(async () => {
    const data = await getGameCategories();

    setCategories(data);
    setFavourite(data.data[0]._id);
  }, []);

  useEffect(() => {
    gameCategories();
  }, []);

  const clickHandler = () => {
    console.log(favourite);
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
                      src="/icon/avatar-profile.svg"
                      width={120}
                      height={120}
                      alt="upload photo"
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                Shayna Anne
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                shayna@anne.com
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
                  value={favourite}
                  // @ts-ignore
                  onChange={(e) => setFavourite(e.target.value)}
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
                onClick={clickHandler}
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
