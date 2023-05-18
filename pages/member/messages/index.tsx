import React from "react";
import Sidebar from "../../../components/group/Sidebar/Sidebar";

const Messages = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="messages" />
    </section>
  );
};

export default Messages;
