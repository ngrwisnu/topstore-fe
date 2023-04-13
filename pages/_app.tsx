import "../styles/detail.css";
import "../styles/edit-profile.css";
import "../styles/checkout.css";
import "../styles/complete-checkout.css";
import "../styles/homepage.css";
import "../styles/login.css";
import "../styles/navbar-log-in.css";
import "../styles/sign-up.css";
import "../styles/sign-up-photo.css";
import "../styles/sign-up-success.css";
import "../styles/404-not-found.css";
import "../styles/overview.css";
import "../styles/sidebar.css";
import "../styles/transactions.css";
import "../styles/transactions-detail.css";
import "../styles/utilities.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        {/* <!-- Google Font --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      {/* <!-- Calling Bootstrap --> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} position="top-center" />
    </Fragment>
  );
}
