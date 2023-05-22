import Head from "next/head";
import ContentOverview from "../../components/group/ContentOverview/ContentOverview";
import Sidebar from "../../components/group/Sidebar/Sidebar";

import {
  GetServerSideProps,
  PayloadTypes,
  PlayerTypes,
} from "../../helpers/data-types";
import jwtDecode from "jwt-decode";

const MemberPage = () => {
  return (
    <>
      <Head>
        <title>TopStore | Dashboard</title>
        <meta name="description" content="TopStore's Dashboard page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <ContentOverview />
      </section>
    </>
  );
};

export default MemberPage;

export async function getServerSideProps({ req }: GetServerSideProps) {
  const tk = req.cookies.tk;

  if (!tk) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const beautyTk = Buffer.from(tk, "base64").toString("ascii");
  const payload: PayloadTypes = jwtDecode(beautyTk);
  const user: PlayerTypes = payload.player;

  return {
    props: {
      user,
    },
  };
}
