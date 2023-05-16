import Image from "next/image";
import React, { ReactNode } from "react";
import { currencyFormatter } from "../../../utils/currencyFormatter";

type CategoryCardType = {
  children: ReactNode;
  spent: number;
  icon: string;
};

const CategoryCard = (props: CategoryCardType) => {
  const { icon, spent } = props;

  let iconCard = icon === "Desktop" ? "game-desktop" : "game-mobile";

  const formattedValue = currencyFormatter(spent);

  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image
            src={`/icon/${iconCard}.svg` || "/icon/game-other.svg"}
            width={60}
            height={60}
            alt=""
          />
          <p className="color-palette-1 mb-0 ms-12">{props.children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            {formattedValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
