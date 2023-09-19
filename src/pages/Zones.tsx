import { Outlet } from "react-router-dom";

import Layout from "../components/layout/Layout";

const Zones = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Zones;
