import { Outlet } from "react-router-dom";

import Layout from "../components/layout/Layout";

const Payroll = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Payroll;
