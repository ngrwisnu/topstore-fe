import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

type SidebarType = {
  activeMenu: string;
};

const Sidebar = (props: SidebarType) => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            href="/member"
            title="Overview"
            icon="ic-overview"
            active={props.activeMenu === "overview"}
          />
          <MenuItem
            active={props.activeMenu === "transactions"}
            href="/member/transactions"
            title="Transactions"
            icon="ic-transactions"
          />
          <MenuItem href="/member" title="Messages" icon="ic-message" />
          <MenuItem href="/member" title="Card" icon="ic-card" />
          <MenuItem href="/member" title="Rewards" icon="ic-reward" />
          <MenuItem
            href="/member/edit-profile"
            title="Settings"
            icon="ic-setting"
            active={props.activeMenu === "edit-profile"}
          />
          <MenuItem href="/login" title="Logout" icon="ic-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Sidebar;
