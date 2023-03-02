/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/group/Navbar";
import Hero from "../components/group/Hero";
import TransactionSteps from "../components/group/TransactionSteps";
import Games from "../components/group/Games/Games";
import Reached from "../components/group/Reached/Reached";
import Story from "../components/group/Story/Story";
import Footer from "../components/group/Footer/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <title>TopStore</title>
        <meta
          name="description"
          content="We provide many way to top up your game and you are ready to improve your game"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og: title"
          content="TopStore - Your place to improve your game"
        />
        <meta
          property="og: description"
          content="We provide many way to top up your game and you are ready to improve your game"
        />
      </Head>
      <main>
        {/* <!-- Navbar --> */}
        <Navbar />

        {/* <!-- Hero --> */}
        <Hero />

        {/* <!-- 3 Column - Feature --> */}
        <TransactionSteps />

        {/* <!-- 5 Column - Featured-game --> */}
        <Games />

        {/* <!-- Reached --> */}
        <Reached />

        {/* <!-- Story --> */}
        <Story />

        {/* <!-- Footer --> */}
        <Footer />
      </main>
    </Fragment>
  );
}
