import Image from "next/image";
import React from "react";
import { CategoryTypes } from "../../../helpers/data-types";
import ItemLoading from "./ItemLoading";

type TopUpDetailProps = {
  type: "mobile" | "desktop";
  data: {
    name: string;
    thumbnail: string;
    category: CategoryTypes;
  };
};

const TopUpItem = (props: TopUpDetailProps) => {
  const { type, data } = props;

  if (data === undefined) {
    return <ItemLoading type={type} />;
  }

  if (type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {data.name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">
          Category: {data.category.name}
        </p>
      </div>
    );
  }

  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <Image
          src={`/img/uploads/${data.thumbnail}`}
          width={280}
          height={380}
          className="img-fluid"
          alt=""
        />
      </div>
      {/* <!-- Mobile: Game title --> */}
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {data.name}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Category: {data.category.name}
        </p>
      </div>
    </div>
  );
};

export default TopUpItem;
