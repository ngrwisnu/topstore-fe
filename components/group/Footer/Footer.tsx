import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkCategory from "../../container/FooterNavLink/LinkCategory";

const Footer = () => {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <LinkCategory category="Company" />
                <LinkCategory category="Support" />
                <LinkCategory category="Connect" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
