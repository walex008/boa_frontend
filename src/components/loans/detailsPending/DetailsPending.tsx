import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import VCard from "../../extras/VCard";
import { Modal } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import LoanDetails from "../approved&pending/LoanDetails";
import Charges from "../approved&pending/Charges";
import Collateral from "../approved&pending/Collateral";
import Guarantors from "../approved&pending/Guarantors";
import Notes from "../approved&pending/Notes";
import Files from "../approved&pending/Files";

const DetailsPending = () => {
  const navigate = useNavigate();
  const darkMode = useAppSelector(mode);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openWriteOff, setOpenWriteOff] = useState<boolean>(false);
  const [opening_date, setOpening_Date] = useState<Dayjs | null>(
    dayjs("2023-08-17")
  );

  const handleCloseWriteOff = () => {
    setOpenWriteOff(false);
  };

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
        <Link to={"/loans"}>Loan</Link>
        <span>&gt;</span>
        <span
          className={`${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          Loan Details
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
          Loan Details
        </span>
      </div>

      <div className="mt-[33px] flex gap-x-[26px]">
        <div
          className={`h-[311px] min-w-[242px] p-[23px_0px_13px_0px] rounded-[16px] ${
            darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
          }`}
        >
          <SwitchMenu
            index={1}
            name="Loan Details"
            click={() => setCurrentPage(1)}
          />
          <SwitchMenu
            index={2}
            name="Charges"
            click={() => setCurrentPage(2)}
          />
          <SwitchMenu index={3} name="File" click={() => setCurrentPage(3)} />
          <SwitchMenu
            index={4}
            name="Collateral"
            click={() => setCurrentPage(4)}
          />

          <SwitchMenu
            index={5}
            name="Guarantor"
            click={() => setCurrentPage(5)}
          />
          <SwitchMenu index={6} name="Notes" click={() => setCurrentPage(6)} />
        </div>
        <div className=" flex-grow w-full">
          <div>
            <div className="flex  mt-[28px]">
              <button
                className={`flex items-center justify-center w-[148.313px] h-[48px] p-[8px_16px]  rounded-[8px] border-[1px] border-blue mr-[-16px] bg-blue text-textWhite z-[1]
          `}
                onClick={() => navigate("/loans/disburse")}
              >
                <span> Disburse</span> <img src="/images/done.png" alt="" />
              </button>
              <button
                className={`flex items-center justify-center w-[186px] h-[48px] p-[8px_16px]  rounded-[8px] border-[1px] border-blue bg-textWhite text-blue
          }`}
                //   onClick={() => setNewUser(true)}
              >
                <span>Undo Approval</span>{" "}
                <img src="/images/cancelBlue.png" alt="" />
              </button>
            </div>
            <div
              className={`w-full rounded-[11.5px] px-[21px] pt-[11.45px] pb-[37px] shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[16px] ${
                darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
              }`}
            >
              <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
                SMALL LOAN #94 <img src="/images/editBlue.png" alt="" />
              </div>
              <div className=" mt-[13.5px] w-full flex gap-x-[2.7rem]">
                <div className="w-[50%]">
                  <VCard
                    name="Status"
                    value={
                      <div className=" p-[5.985px_27.5px] rounded-[16px] bg-blueLight text-blue text-[0.7481rem] font-[600]">
                        Awaiting Disbursement
                      </div>
                    }
                  />
                  <VCard name="Client" value="Lorem Ipsum" />
                  <VCard name="Client Group" value="Group 1" />
                  <VCard name="Applied Amount" value="40,000" />
                  <VCard name="Created By" value="Lorem Ipsum" />
                </div>
                <div className="w-[50%]">
                  <VCard name="Currency" value="Nigerian Naira" />
                  <VCard name="Loan Officer" value="Lorem Ipsum" />
                  <VCard name="Loan Purpose" value="Agriculture" />
                  <VCard name="Expected Disbursement" value="10-10-21" />
                  <VCard name="Savings" value="100,000" />
                  <div className="flex justify-end mt-[10px] text-[0.875rem] text-textGrey font-[400] ">
                    Created at: 10:10:2022{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {currentPage === 1 && <LoanDetails />}
          {currentPage === 2 && <Charges />}
          {currentPage === 3 && <Files />}
          {currentPage === 4 && <Collateral />}
          {currentPage === 5 && <Guarantors />}
          {currentPage === 6 && <Notes />}
        </div>
      </div>

      <Modal open={openWriteOff} onClose={handleCloseWriteOff}>
        <div className=" w-[42.3125rem]  bg-[#F6F7F8] rounded-[24px] mx-[auto] mt-[2rem] pb-[42px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)]">
          <div className="bg-[#F5F9FF] rounded-tl-[24px] rounded-tr-[24px] flex items-center justify-between p-[23px_53px_22px_51px] border-b-[1px] border-b-[#C6CCD2]">
            <span className=" text-[2rem] text-textBlackH font-[600]">
              Write Off Loan
            </span>{" "}
            <img
              src="/images/cancel.png"
              alt=""
              onClick={() => setOpenWriteOff(false)}
              className=" cursor-pointer"
            />
          </div>

          <form className="w-full px-[37px]">
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[1rem] font-[600] mt-[20px] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    value={opening_date}
                    onChange={(newDate) => setOpening_Date(newDate)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[1rem] font-[600] mt-[20px] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Write Off Note
              </label>
              <textarea
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[160px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] resize-none ${
                  darkMode === "true" ? "bg-[transparent]" : "bg-[transparent]"
                }`}
                placeholder="Type here..."
              />
            </div>
            <button className="h-[48px] w-[8.25rem] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] mt-[43px]">
              Save
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsPending;
