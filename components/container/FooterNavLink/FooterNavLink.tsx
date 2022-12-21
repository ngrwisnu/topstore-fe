import Link from "next/link";
import React from "react";

type FooterNavLink = {
  title: string;
  href?: string;
};

const FooterNavLink = (props: FooterNavLink) => {
  const { title, href = "" } = props;
  return (
    <li className="mb-6">
      <Link
        href={href}
        className="text-lg color-palette-1 text-decoration-none"
      >
        {title}
      </Link>
    </li>
  );
};

export default FooterNavLink;
