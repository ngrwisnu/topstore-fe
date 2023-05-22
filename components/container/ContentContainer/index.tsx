import React, { ReactNode } from "react";

const ContentContainer = (props: { children: ReactNode }) => {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">{props.children}</div>
    </main>
  );
};

export default ContentContainer;
