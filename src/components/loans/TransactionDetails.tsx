import { Link, useNavigate } from "react-router-dom";
import { mode } from "../../appSlices/generalSlice";
import { useAppSelector } from "../../app/hooks";

const TransactionDetails = () => {
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
          Transaction Details
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
          Transaction Details
        </span>
      </div>
      <div className=" flex items-center gap-x-[16px] mt-[32px]">
        <button className="bg-blueLight h-[48px] p-[8px_16px] rounded-[8px] flex items-center gap-x-[8px] self-end text-blue text-[18px] font-[600]">
          PDF <img src="/images/export.png" alt="" />
        </button>
        <button className="bg-blueLight h-[48px] p-[8px_16px] rounded-[8px] flex items-center gap-x-[8px] self-end text-blue text-[18px] font-[600]">
          Print <img src="/images/export.png" alt="" />
        </button>
      </div>
      <div className=" flex flex-col max-w-[44.125rem] mt-[24px] gap-y-[4px]">
        <div className=" w-full flex">
          <div className=" h-[68px] w-[50%] bg-[#CCE0FF] flex items-center justify-center rounded-tl-[16px] text-[1rem] text-textBlackH font-[600]">
            ID
          </div>
          <div className=" h-[68px] w-[50%] bg-[#D6E6FF] flex items-center justify-center rounded-tr-[16px] text-[1rem] text-textBlack font-[400]">
            269
          </div>
        </div>

        <div className=" w-full flex">
          <div className=" h-[68px] w-[50%] bg-[#CCE0FF] flex items-center justify-center text-[1rem] text-textBlackH font-[600]">
            Type
          </div>
          <div className=" h-[68px] w-[50%] bg-[#D6E6FF] flex items-center justify-center text-[1rem] text-textBlack font-[400]">
            Disbursement
          </div>
        </div>

        <div className=" w-full flex">
          <div className=" h-[68px] w-[50%] bg-[#CCE0FF] flex items-center justify-center text-[1rem] text-textBlackH font-[600]">
            Date
          </div>
          <div className=" h-[68px] w-[50%] bg-[#D6E6FF] flex items-center justify-center text-[1rem] text-textBlack font-[400]">
            2023-08-16
          </div>
        </div>

        <div className=" w-full flex">
          <div className=" h-[68px] w-[50%] bg-[#CCE0FF] flex items-center justify-center text-[1rem] text-textBlackH font-[600]">
            Amount
          </div>
          <div className=" h-[68px] w-[50%] bg-[#D6E6FF] flex items-center justify-center text-[1rem] text-textBlack font-[400]">
            100,000
          </div>
        </div>

        <div className=" w-full flex">
          <div className=" h-[68px] w-[50%] bg-[#CCE0FF] flex items-center justify-center text-[1rem] text-textBlackH font-[600]">
            Transaction Status
          </div>
          <div className=" h-[68px] w-[50%] bg-[#D6E6FF] flex items-center justify-center text-[1rem] text-textBlack font-[400] gap-x-[9px]">
            Approved{" "}
            <button className=" bg-[#ED0036] rounded-[16px] p-[5.985px_11.969px] text-textWhite text-[0.7481rem] font-[600]">
              Undo Approval
            </button>
          </div>
        </div>

        <div className=" w-full flex">
          <div className=" h-[68px] w-[50%] bg-[#CCE0FF] flex items-center justify-center text-[1rem] text-textBlackH font-[600]">
            Payment Details
          </div>
          <div className=" h-[68px] w-[50%] bg-[#D6E6FF] flex items-center justify-center text-[1rem] text-textBlack font-[400]"></div>
        </div>

        <div className=" w-full flex">
          <div className=" h-[68px] w-[50%] bg-[#CCE0FF] flex items-center justify-center rounded-bl-[16px] text-[1rem] text-textBlackH font-[600]">
            Payment Type
          </div>
          <div className=" h-[68px] w-[50%] bg-[#D6E6FF] flex items-center justify-center rounded-br-[16px] text-[1rem] text-textBlack font-[400]">
            Cash
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
