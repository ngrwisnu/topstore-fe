import Image from "next/image";
import React from "react";

interface CheckoutItemProps {
  voucherDetails: {
    name: string;
    thumbnail: string;
    category: string;
  };
}

const CheckoutItem = (props: CheckoutItemProps) => {
  const { name, thumbnail, category } = props.voucherDetails;

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <Image
            src={`/img/uploads/${thumbnail}`}
            width={500}
            height={500}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{name}</p>
        <p className="color-palette-2 m-0">Category: {category}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
