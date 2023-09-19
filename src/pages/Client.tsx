import { Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Client = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Client;
