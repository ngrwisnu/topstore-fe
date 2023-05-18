import React from "react";
import Sidebar from "../../../components/group/Sidebar/Sidebar";

const Cards = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="cards" />
    </section>
  );
};

export default Cards;
