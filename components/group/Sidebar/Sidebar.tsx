import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-overview" active />
          <MenuItem title="Transactions" icon="ic-transactions" />
          <MenuItem title="Messages" icon="ic-message" />
          <MenuItem title="Card" icon="ic-card" />
          <MenuItem title="Rewards" icon="ic-reward" />
          <MenuItem title="Settings" icon="ic-setting" />
          <MenuItem title="Logout" icon="ic-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Sidebar;
