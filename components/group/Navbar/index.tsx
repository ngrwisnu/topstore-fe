import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Auth from "./Auth";
import NavLink from "./NavLink";
import ToggleNav from "./ToggleNav";

const Navbar = () => {
  return (
    <section className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="" />
          </a>
          <ToggleNav />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavLink link="Home" active href="/" />
              <NavLink link="Games" href="#games" />
              <NavLink link="Rewards" href="/member/rewards" />
              <NavLink link="Global Rank" />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
