import Head from "next/head";
import Image from "next/image";
import React from "react";
import Input from "../../components/atom/Input/Input";
import Sidebar from "../../components/group/Sidebar/Sidebar";

const EditProfilePage = () => {
  return (
    <>
      <Head>
        <title>TopStore | Edit Profile</title>
        <meta name="description" content="TopStore's Edit Profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="edit-profile overflow-auto">
        <Sidebar activeMenu="edit-profile" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <Image
                      alt=""
                      src="/img/avatar-1.png"
                      width={90}
                      height={90}
                      className="avatar img-fluid"
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <Image
                        src="/icon/avatar-profile.svg"
                        width={90}
                        height={90}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <Image
                        src="/icon/avatar-profile.svg"
                        width={90}
                        height={90}
                        alt=""
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
                <div className="pt-30">
                  <Input
                    id="name"
                    label="Full Name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="pt-30">
                  <Input
                    id="email"
                    label="Email Address"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="pt-30">
                  <Input
                    id="phone"
                    label="Phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="submit"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default EditProfilePage;
