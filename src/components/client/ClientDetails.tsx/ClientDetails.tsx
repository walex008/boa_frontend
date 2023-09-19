import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import BankDetails from "./BankDetails";
import ClientProfile from "./ClientProfile";
import Files from "./Files";
import Identification from "./Identification";
import LoginDetails from "./LoginDetails";
import NextOfKin from "./NextOfKin";
import AccountGroup from "./account/AccountGroup";

const ClientDetails = () => {
  const navigate = useNavigate();
  const darkMode = useAppSelector(mode);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const SwitchMenu = ({
    index,
    name,
    click,
  }: {
    index: number;
    name: string;
    click: () => void;
  }) => {
    const lightStyle =
      index === currentPage ? "text-blue bg-blueLight" : "text-textBlackH";
    const darkStyle =
      index === currentPage ? "text-blue bg-blueLight" : "text-textGreyWhite";
    return (
      <div
        className={`h-[44px] p-[10px] flex items-center gap-x-[23px] text-[16px] font-[400] cursor-pointer ${
          darkMode === "true" ? darkStyle : lightStyle
        }`}
        onClick={click}
      >
        <span
          className={`rounded-[50%] h-[24px] w-[24px] flex items-center justify-center text-[16px]  font-[400] ${
            index === currentPage
              ? "bg-blue text-textWhite"
              : "bg-[#F6F7F8] text-textBlackH"
          }`}
        >
          {index}
        </span>
        <span>{name}</span>
      </div>
    );
  };
  return (
    <div className="pt-[13px] pr-[49px] pl-[39px] pb-[12rem]">
      <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
        <Link to={"/dashboard"}>Dashboard</Link>
        <span>&gt;</span>
        <Link to={"/client"}>Client</Link>
        <span>&gt;</span>
        <span
          className={`${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          Adeyinka Suliat
        </span>
      </div>

      <div className="mt-[21px] flex items-center gap-x-[15px]">
        <img
          src={`/images/${
            darkMode === "true" ? "arrowWhite" : "arrowBack"
          }.png`}
          alt=""
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <span
          className={`text-[32px]  font-[600] ${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          Add Client
        </span>
      </div>

      <div className="mt-[33px] flex gap-x-[26px]">
        <div
          className={`h-[351px] min-w-[242px] p-[23px_0px_13px_0px] rounded-[16px] ${
            darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
          }`}
        >
          <SwitchMenu
            index={1}
            name="Client's Profile"
            click={() => setCurrentPage(1)}
          />
          <SwitchMenu
            index={2}
            name="Account"
            click={() => setCurrentPage(2)}
          />
          <SwitchMenu
            index={3}
            name="Identification"
            click={() => setCurrentPage(3)}
          />
          <SwitchMenu
            index={4}
            name="Next of Kin"
            click={() => setCurrentPage(4)}
          />
          <SwitchMenu
            index={5}
            name="Login Details"
            click={() => setCurrentPage(5)}
          />
          <SwitchMenu
            index={6}
            name="Bank Details"
            click={() => setCurrentPage(6)}
          />
          <SwitchMenu index={7} name="Files" click={() => setCurrentPage(7)} />
        </div>
        <div className=" flex-grow w-full">
          {currentPage === 1 && <ClientProfile />}
          {currentPage === 2 && <AccountGroup />}
          {currentPage === 3 && <Identification />}
          {currentPage === 4 && <NextOfKin />}
          {currentPage === 5 && <LoginDetails />}
          {currentPage === 6 && <BankDetails />}
          {currentPage === 7 && <Files />}
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
