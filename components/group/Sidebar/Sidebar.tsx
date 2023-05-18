import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type SidebarType = {
  activeMenu: string;
};

const Sidebar = (props: SidebarType) => {
  const router = useRouter();

  const logoutHandler = () => {
    localStorage.clear();
    Cookies.remove("tk");
    router.push("/");
  };

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
          <MenuItem
            active={props.activeMenu === "messages"}
            href="/member/messages"
            title="Messages"
            icon="ic-message"
          />
          <MenuItem
            active={props.activeMenu === "cards"}
            href="/member/cards"
            title="Cards"
            icon="ic-card"
          />
          <MenuItem
            active={props.activeMenu === "rewards"}
            href="/member/rewards"
            title="Rewards"
            icon="ic-reward"
          />
          <MenuItem
            href="/member/edit-profile"
            title="Settings"
            icon="ic-setting"
            active={props.activeMenu === "edit-profile"}
          />
          <MenuItem onclick={logoutHandler} title="Logout" icon="ic-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Sidebar;
