import Head from "next/head";
import Image from "next/image";
import React from "react";

import Sidebar from "../../components/group/Sidebar/Sidebar";
import ProfileContent from "../../components/group/ProfileContent";
import { GetServerSideProps } from "../../helpers/data-types";

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
        <ProfileContent />
      </section>
    </>
  );
};

export default EditProfilePage;

export async function getServerSideProps({ req }: GetServerSideProps) {
  const tk = req.cookies.tk;

  if (!tk) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
