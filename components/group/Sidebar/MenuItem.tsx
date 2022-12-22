import Image from "next/image";
import cx from "classnames";
import React from "react";
import Link from "next/link";

type MenuItemType = {
  title: string;
  icon: string;
  active?: boolean;
  href: string;
};

const MenuItem = (props: MenuItemType) => {
  const { title, icon, active, href } = props;

  const classMenuItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classMenuItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
        <Link href={href} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
};

export default MenuItem;
