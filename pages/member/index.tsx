import React from "react";
import ContentOverview from "../../components/group/ContentOverview/ContentOverview";
import Sidebar from "../../components/group/Sidebar/Sidebar";

const MemberPage = () => {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <ContentOverview />
    </section>
  );
};

export default MemberPage;
