import React from "react";
import Sidebar from "../../../components/group/Sidebar/Sidebar";
import ContentContainer from "../../../components/container/ContentContainer";

const Rewards = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="rewards" />
      <ContentContainer>
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Rewards</h2>
        <div className="content_wrapper">
          <p className="text">You have no any rewards</p>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Rewards;
