import { Outlet } from "react-router-dom";

import Layout from "../components/layout/Layout";

const Loans = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Loans;
