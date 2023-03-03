import Head from "next/head";
import ContentOverview from "../../components/group/ContentOverview/ContentOverview";
import Sidebar from "../../components/group/Sidebar/Sidebar";
import { usePrivateRouter } from "../../helpers/hooks";

const MemberPage = () => {
  usePrivateRouter();

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
