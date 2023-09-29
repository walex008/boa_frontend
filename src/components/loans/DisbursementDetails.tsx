import { Link, useNavigate } from "react-router-dom";
import { mode } from "../../appSlices/generalSlice";
import { useAppSelector } from "../../app/hooks";
import VCard from "../extras/VCard";

const DisbursementDetails = () => {
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();
  return (
    <div className="pt-[13px] pr-[49px] pl-[39px] pb-[12rem]">
      <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
        <Link to={"/dashboard"}>Dashboard</Link>
        <span>&gt;</span>
        <Link to={"/loans"}>Loans</Link>
        <span>&gt;</span>
        <span
          className={`${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          Disbursement Details
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
          Disbursement Details
        </span>
      </div>

      <div
        className={`w-full rounded-[11.5px] px-[21px] pt-[11.45px] pb-[37px] shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[16px] ${
          darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
        }`}
      >
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          DISBURSEMENT DETAILS
        </div>
        <div className=" mt-[13.5px] w-full flex gap-x-[2.7rem]">
          <div className="w-[50%]">
            <VCard name="Payment Type" value="Bank Tansfer" />
            <VCard name="Account Number" value="07092838388" />
            <VCard name="Account Name" value="Lorem Ipsum" />
            <VCard name="Updated at" value="2020-10-14 03:37:30" />
          </div>
          <div className="w-[50%]">
            <VCard name="Bank Name" value="First Bank of Nigeria" />
            <VCard name="Disbursement Date" value="2021-01-13" />
            <VCard name="Repayment Date" value="2021-01-13" />
          </div>
        </div>
      </div>

      <div
        className={`w-full rounded-[11.5px] px-[21px] pt-[11.45px] pb-[37px] shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[16px] ${
          darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
        }`}
      >
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          UPLOADED FILES
        </div>
        <div className="w-full flex gap-x-[22px] mt-[21px]">
          <div className=" w-[17.125rem] h-[12.5rem] bg-[#F6F7F8]"></div>
          <div className=" w-[17.125rem] h-[12.5rem] bg-[#F6F7F8]"></div>
          <div className=" w-[17.125rem] h-[12.5rem] bg-[#F6F7F8]"></div>
        </div>
      </div>

      <div
        className={`w-full h-[291px] rounded-[11.5px] px-[21px] pt-[11.45px] pb-[37px] shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[16px] overflow-auto ${
          darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
        }`}
      >
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          DESCRIPTION
        </div>
      </div>
    </div>
  );
};

export default DisbursementDetails;
