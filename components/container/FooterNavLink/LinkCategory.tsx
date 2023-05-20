import React, { ReactNode } from "react";

type FooterLinksType = {
  category: "Company" | "Support" | "Connect";
  children: ReactNode;
  icons?: boolean;
};

const LinkCategory = ({ category, children, icons }: FooterLinksType) => {
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{category}</p>
      <ul className={`list-unstyled ${icons && "d-flex"}`}>{children}</ul>
    </div>
  );
};

export default LinkCategory;
