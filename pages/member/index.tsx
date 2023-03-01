import ContentOverview from "../../components/group/ContentOverview/ContentOverview";
import Sidebar from "../../components/group/Sidebar/Sidebar";
import { usePrivateRouter } from "../../helpers/hooks";

const MemberPage = () => {
  usePrivateRouter();

  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <ContentOverview />
    </section>
  );
};

export default MemberPage;
