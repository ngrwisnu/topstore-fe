import Image from "next/image";
import React from "react";

interface CheckoutItemProps {
  voucherDetails: {
    name: string;
    thumbnail: string;
    category: {
      name: string;
    };
  };
}

const CheckoutItem = (props: CheckoutItemProps) => {
  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <Image
            src={`/img/uploads/${props.voucherDetails.thumbnail}`}
            width={500}
            height={500}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {props.voucherDetails.name}
        </p>
        <p className="color-palette-2 m-0">
          Category: {props.voucherDetails.category.name}
        </p>
      </div>
    </div>
  );
};

export default CheckoutItem;
