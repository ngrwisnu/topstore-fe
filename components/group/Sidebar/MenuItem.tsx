import Image from "next/image";
import cx from "classnames";
import React from "react";
import Link from "next/link";

type MenuItemType = {
  title: string;
  icon: string;
  active?: boolean;
  href?: string;

  onclick?: () => void;
};

const MenuItem = (props: MenuItemType) => {
  const { title, icon, active, href, onclick } = props;

  const classMenuItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classMenuItem} onClick={onclick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
        {onclick ? (
          <a onClick={onclick} className="text-lg text-decoration-none">
            {title}
          </a>
        ) : (
          <Link href={href!} className="text-lg text-decoration-none">
            {title}
          </Link>
        )}
      </p>
    </div>
  );
};

export default MenuItem;
