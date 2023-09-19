import CardGroup from "../components/dashboard/CardGroup";
import ClientStaffChat from "../components/dashboard/ClientStaffChat";
import LineChart from "../components/dashboard/LineChart";
import Layout from "../components/layout/Layout";
import BarChart from "../components/dashboard/BarChart";
import MessageBox from "../components/dashboard/MessageBox";

const Dashboard = () => {
  return (
    <Layout>
      <h2 className="ml-[24px] mb-[40px] font-[600] text-[32px] text-textBlackH">
        Hello, <br />
        Zonal Manager
      </h2>
      <CardGroup />
      <LineChart />
      <ClientStaffChat />
      <BarChart />
      <MessageBox />
    </Layout>
  );
};

export default Dashboard;
