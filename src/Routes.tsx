import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HeadOffice from "./pages/HeadOffice";
import Zones from "./pages/Zones";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AddNewStaff from "./components/headOffice/staffs/AddNewStaff";
import AddZone from "./components/zones/AddZone";
import Areas from "./pages/Areas";
import AddArea from "./components/areas/AddArea";
import AddBranch from "./components/branch/AddBranch";
import ZoneDetails from "./components/zones/ZoneDetails";
import AreaDetails from "./components/areas/AreaDetails";
import BranchDetails from "./components/branch/BranchDetails";
import StaffDetails from "./components/headOffice/staffs/StaffDetails";
import EditStaff from "./components/headOffice/staffs/EditStaff";
import Client from "./pages/Client";
import AllClient from "./components/client/AllClient";
import ClientList from "./components/client/ClientList";
import AddClient from "./components/client/addClient/AddClient";
import AllZones from "./components/zones/AllZones";
import AllAreas from "./components/areas/AllAreas";
import Branches from "./pages/Branches";
import AllBranches from "./components/branch/AllBranches";
import Payroll from "./pages/Payroll";
import AllPayroll from "./components/payroll/AllPayroll";
import AddPayroll from "./components/payroll/AddPayroll";
import PayrollItem from "./components/payroll/PayrollItem";
import PayrollTemplate from "./components/payroll/PayrollTemplate";
import ClientDetails from "./components/client/ClientDetails.tsx/ClientDetails";
import Loans from "./pages/Loans";
import AllLoans from "./components/loans/AllLoans";
import AddLoan from "./components/loans/addLoan/AddLoan";
import EditLoan from "./components/loans/editLoan/EditLoan";
import DetailsApproved from "./components/loans/detailsApproved/DetailsApproved";
import TransactionDetails from "./components/loans/TransactionDetails";
import AddCharge from "./components/loans/AddCharge";
import AddFile from "./components/loans/AddFile";
import AddCollateral from "./components/loans/AddCollateral";
import AddGuarantor from "./components/loans/AddGuarantor";
import AddNote from "./components/loans/AddNote";
import DisbursementDetails from "./components/loans/DisbursementDetails";
import AddRepayment from "./components/loans/detailsApproved/AddRepayment";
import DetailsPending from "./components/loans/detailsPending/DetailsPending";
import Disburse from "./components/loans/detailsPending/Disburse";
import AllProducts from "./components/loans/products/AllProducts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/head-office",
    element: <HeadOffice />,
  },
  {
    path: "/add-new-staff",
    element: <AddNewStaff />,
  },
  {
    path: "/edit-staff/:staff_id",
    element: <EditStaff />,
  },
  {
    path: "/staff-details/:staff_id",
    element: <StaffDetails />,
  },
  {
    path: "/zones",
    element: <Zones />,

    children: [
      {
        index: true,
        element: <AllZones />,
      },
      {
        path: "add-zone",
        element: <AddZone />,
      },
      {
        path: "zone-details/:zone_id",
        element: <ZoneDetails />,
      },
    ],
  },
  {
    path: "/areas",
    element: <Areas />,

    children: [
      {
        index: true,
        element: <AllAreas />,
      },
      {
        path: "add-area",
        element: <AddArea />,
      },
      {
        path: "area-details/:zone_id/:area_id",
        element: <AreaDetails />,
      },
    ],
  },

  {
    path: "/branches",
    element: <Branches />,

    children: [
      {
        index: true,
        element: <AllBranches />,
      },
      {
        path: "add-branch",
        element: <AddBranch />,
      },
      {
        path: "branch-details/:zone_id/:area_id/:branch_id",
        element: <BranchDetails />,
      },
    ],
  },

  {
    path: "/payroll",
    element: <Payroll />,

    children: [
      {
        index: true,
        element: <AllPayroll />,
      },
      {
        path: "add-payroll",
        element: <AddPayroll />,
      },
      {
        path: "payroll-item",
        element: <PayrollItem />,
      },
      {
        path: "payroll-template",
        element: <PayrollTemplate />,
      },
    ],
  },
  {
    path: "/client",
    element: <Client />,
    children: [
      {
        index: true,
        element: <AllClient />,
      },
      {
        path: "add-client",
        element: <AddClient />,
      },

      {
        path: "client-list",
        element: <ClientList />,
      },
      {
        path: "client-details/:clientId",
        element: <ClientDetails />,
      },
    ],
  },

  {
    path: "/loans",
    element: <Loans />,
    children: [
      {
        index: true,
        element: <AllLoans />,
      },
      {
        path: "add-loan",
        element: <AddLoan />,
      },
      {
        path: "edit-loan/:id",
        element: <EditLoan />,
      },

      {
        path: "loan-details/approved/:id",
        element: <DetailsApproved />,
      },
      {
        path: "loan-details/pending/:id",
        element: <DetailsPending />,
      },
      {
        path: "transaction-details/:id",
        element: <TransactionDetails />,
      },
      {
        path: "disbursement-details/:id",
        element: <DisbursementDetails />,
      },
      {
        path: "add-charge",
        element: <AddCharge />,
      },
      {
        path: "add-file",
        element: <AddFile />,
      },
      {
        path: "add-collateral",
        element: <AddCollateral />,
      },
      {
        path: "add-guarantor",
        element: <AddGuarantor />,
      },
      {
        path: "add-note",
        element: <AddNote />,
      },
      {
        path: "add-repayment",
        element: <AddRepayment />,
      },
      {
        path: "disburse",
        element: <Disburse />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
    ],
  },
]);

export default routes;
