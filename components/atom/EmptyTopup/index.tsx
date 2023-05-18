import Image from "next/image";
import React from "react";

const EmptyTopup = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="categories-card" style={{ flexGrow: "1" }}>
      <div className="d-flex align-items-center mb-24">
        <Image src={`/icon/${icon}.svg`} width={60} height={60} alt="" />
        <p className="color-palette-1 mb-0 ms-12">
          {title}
          <br />
          Game
        </p>
      </div>
      <div>
        <p className="text-sm color-palette-2 mb-1">Total Spent</p>
        <p className="text-2xl color-palette-1 fw-medium m-0">Rp 0</p>
      </div>
    </div>
  );
};

export default EmptyTopup;
