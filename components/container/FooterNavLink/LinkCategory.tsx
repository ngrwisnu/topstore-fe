import React from "react";
import FooterNavLink from "./FooterNavLink";

type FooterLinksType = {
  category: "Company" | "Support" | "Connect";
};

const LinkCategory = ({ category }: FooterLinksType) => {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{category}</p>
      <ul className="list-unstyled">
        <FooterNavLink title="About Us" />
        <FooterNavLink title="Press Release" />
        <FooterNavLink title="Terms of Use" />
        <FooterNavLink title="Privacy & Policy" />
      </ul>
    </div>
  );
};

export default LinkCategory;
