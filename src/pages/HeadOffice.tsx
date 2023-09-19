import Layout from "../components/layout/Layout";
import Header from "../components/headOffice/Header";

import { useAppSelector } from "../app/hooks";
import { view } from "../appSlices/headOfficeSlice";
import Overview from "../components/headOffice/overview/Overview";
import Staffs from "../components/headOffice/staffs/Staffs";

const HeadOffice = () => {
  const headOfficeView = useAppSelector(view);
  return (
    <Layout>
      <Header />
      {headOfficeView === "overview" && <Overview />}
      {headOfficeView === "staffs" && <Staffs />}
    </Layout>
  );
};

export default HeadOffice;
