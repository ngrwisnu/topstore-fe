import React from "react";

import Sidebar from "../../components/group/Sidebar/Sidebar";
import ProfileContent from "../../components/group/ProfileContent";
import { GetServerSideProps } from "../../helpers/data-types";

const EditProfilePage = () => {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="edit-profile" />
      <ProfileContent />
    </section>
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
