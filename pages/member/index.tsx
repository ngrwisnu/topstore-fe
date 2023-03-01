import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ContentOverview from "../../components/group/ContentOverview/ContentOverview";
import Sidebar from "../../components/group/Sidebar/Sidebar";

const MemberPage = () => {
  const router = useRouter();

  useEffect(() => {
    const loginData = localStorage.getItem("player");

    if (!loginData) {
      router.push("/login");
    }
  }, []);
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <ContentOverview />
    </section>
  );
};

export default MemberPage;
