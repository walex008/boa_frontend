import { Outlet } from "react-router-dom";

import Layout from "../components/layout/Layout";

const Areas = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Areas;
