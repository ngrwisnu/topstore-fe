import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignUpForm from "../../components/group/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>TopStore | Sign Up</title>
        <meta name="description" content="TopStore's Sign Up page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="" method="POST">
            <div className="pb-50">
              <Link className="navbar-brand" href="/">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </Link>
            </div>
            <SignUpForm />
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
