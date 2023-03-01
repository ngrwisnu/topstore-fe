import Image from "next/image";
import cx from "classnames";
import React from "react";
import Link from "next/link";

type MenuItemType = {
  title: string;
  icon: string;
  active?: boolean;
  href?: string;
  onClick?: () => void;
};

const MenuItem = (props: MenuItemType) => {
  const { title, icon, active, href, onClick } = props;

  const classMenuItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classMenuItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a type="button" className="text-lg text-decoration-none">
            {title}
          </a>
        ) : (
          // @ts-ignore
          <Link href={href} className="text-lg text-decoration-none">
            {title}
          </Link>
        )}
      </p>
    </div>
  );
};

export default MenuItem;
