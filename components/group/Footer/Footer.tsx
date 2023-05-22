import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkCategory from "../../container/FooterNavLink/LinkCategory";
import FooterNavLink from "../../container/FooterNavLink/FooterNavLink";
import {
  AiOutlineSlack,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

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
              <p
                className="mt-30 color-palette-1 mb-30"
                style={{ fontSize: "12px" }}
              >
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <LinkCategory category="Company">
                  <FooterNavLink title="About Us" />
                  <FooterNavLink title="Press Release" />
                  <FooterNavLink title="Terms of Use" />
                  <FooterNavLink title="Privacy & Policy" />
                </LinkCategory>
                <LinkCategory category="Support">
                  <FooterNavLink
                    title="topstore@support.com"
                    href="mailto:topstore@support.com"
                  />
                </LinkCategory>
                <LinkCategory category="Connect" icons>
                  <FooterNavLink href="https://slack.com/" target="_blank">
                    <AiOutlineSlack />
                  </FooterNavLink>
                  <FooterNavLink href="https://discord.com/" target="_blank">
                    <FaDiscord />
                  </FooterNavLink>
                  <FooterNavLink href="https://twitter.com/" target="_blank">
                    <AiOutlineTwitter />
                  </FooterNavLink>
                  <FooterNavLink href="https://instagram.com/" target="_blank">
                    <AiOutlineInstagram />
                  </FooterNavLink>
                </LinkCategory>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
