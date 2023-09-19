import { Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";

const Branches = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Branches;
