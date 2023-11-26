import CardGroup from "../components/dashboard/CardGroup";
import ClientStaffChat from "../components/dashboard/ClientStaffChat";
import LineChart from "../components/dashboard/LineChart";
import Layout from "../components/layout/Layout";
import BarChart from "../components/dashboard/BarChart";
import MessageBox from "../components/dashboard/MessageBox";
import Search from "../components/extras/Search";
import { useAppSelector } from "../app/hooks";
import { mode } from "../appSlices/generalSlice";

const Dashboard = () => {
  const darkMode=useAppSelector(mode)
  return (
    <Layout>
      <h2 className={`ml-[24px] mb-[16px] lg:mb-[40px] font-[600] text-[1.5rem] md:text-[2rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"}`}>
       <span className=" text-[1.5rem] md:text-[2rem] font-[400] md:font-[600]"> Hello,</span > <br />
        Zonal Manager
      </h2>
      <div className=" block lg:hidden"><Search /></div>
      <CardGroup />
      <LineChart />
      <ClientStaffChat />
      <BarChart />
      <MessageBox />
    </Layout>
  );
};

export default Dashboard;
