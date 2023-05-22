import React from "react";
import Sidebar from "../../../components/group/Sidebar/Sidebar";
import ContentContainer from "../../../components/container/ContentContainer";

const Cards = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="cards" />
      <ContentContainer>
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Cards</h2>
        <div className="content_wrapper">
          <p className="text"></p>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Cards;
