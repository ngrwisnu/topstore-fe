import React from "react";
import cx from "classnames";
import Link from "next/link";

type NavLinkType = {
  link: string;
  active?: boolean;
  href?: string;
};

const NavLink = (props: NavLinkType) => {
  const { link, active, href = "/" } = props;

  const classNavLink = cx({
    "nav-link": true,
    active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href} className={classNavLink}>
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
