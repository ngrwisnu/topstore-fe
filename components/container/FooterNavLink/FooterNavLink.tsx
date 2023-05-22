import Link from "next/link";
import React, { ReactNode } from "react";

type FooterNavLink = {
  title?: string;
  href?: string;
  target?: string;
  children?: ReactNode;
};

const FooterNavLink = (props: FooterNavLink) => {
  const { title, href = "", target, children } = props;
  return (
    <li className="mb-6 me-3">
      <Link
        href={href}
        target={target}
        className="text-lg color-palette-1 text-decoration-none"
      >
        {children ? children : title}
      </Link>
    </li>
  );
};

export default FooterNavLink;
