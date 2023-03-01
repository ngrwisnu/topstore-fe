import React from "react";

const ItemLoading = (props: { [key: string]: string }) => {
  if (props.type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="mb-10 mt-10 skeleton-text-lg"></h2>
        <p className="mb-0 skeleton-text-sm"></p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="col-md-12 col-4 skeleton-image"></div>
      {/* <!-- Mobile: Game title --> */}
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="mb-10 skeleton-text-lg"></h2>
        <p className="mb-0 skeleton-text-sm"></p>
      </div>
    </div>
  );
};

export default ItemLoading;
