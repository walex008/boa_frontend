import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { Link, useNavigate } from "react-router-dom";

const AddNote = () => {
  const darkMode = useAppSelector(mode);
  const [openInitNote, setOpenInitNote] = useState<Boolean>(false);
  const [openGuarantorNote, setOpenGuarantorNote] = useState<Boolean>(false);
  const [openOtherNote, setOpenOtherNote] = useState<Boolean>(false);

  const navigate = useNavigate();
  return (
    <>
      <form className="pt-[13px] pr-[49px] pl-[39px]">
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
            Add Note
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
            Add Note
          </span>
        </div>
        {/* Initiator's Note */}
        <div
          className={`mt-[33px] w-full flex items-center justify-between p-[12px_22px_12px_13px] border-[1px] border-[#C6CCD2] rounded-[8px] text-[1.125rem] font-[600] ${
            darkMode === "true" ? " text-textGreyWhite" : "text-textBlackH"
          }`}
        >
          Initiators Note{" "}
          <img
            src={`/images/${
              darkMode === "true" ? "dropDownWhite" : "userDropdown"
            }.png`}
            alt=""
            className=" h-[24px] w-[24px] cursor-pointer"
            onClick={() => setOpenInitNote(true)}
          />
        </div>

        <div
          className={` w-full border-[1px] border-[#C6CCD2] rounded-[8px]  mt-[3px] ${
            darkMode === "true" ? " text-textGreyWhite" : "text-textBlackH"
          } ${!openInitNote && "hidden"}`}
        >
          <div
            className={` w-full flex items-center justify-between p-[12px_22px_12px_13px]  text-[0.875rem] font-[400] italic `}
          >
            Type note here
            <img
              src={`/images/${
                darkMode === "true" ? "dropDownWhite" : "userDropdown"
              }.png`}
              alt=""
              className=" h-[24px] w-[24px] cursor-pointer rotate-180"
              onClick={() => setOpenInitNote(false)}
            />
          </div>

          <textarea className=" w-full h-[100px] border-none outline-none p-[12px_22px_12px_13px] bg-[transparent] resize-none" />
        </div>

        {/* Guarantor's Note */}
        <div
          className={` w-full flex items-center justify-between p-[12px_22px_12px_13px] border-[1px] border-[#C6CCD2] rounded-[8px] text-[1.125rem] font-[600] mt-[24px] ${
            darkMode === "true" ? " text-textGreyWhite" : "text-textBlackH"
          }`}
        >
          Guarantor's Note{" "}
          <img
            src={`/images/${
              darkMode === "true" ? "dropDownWhite" : "userDropdown"
            }.png`}
            alt=""
            className=" h-[24px] w-[24px] cursor-pointer"
            onClick={() => setOpenGuarantorNote(true)}
          />
        </div>

        <div
          className={` w-full border-[1px] border-[#C6CCD2] rounded-[8px]  mt-[3px] ${
            darkMode === "true" ? " text-textGreyWhite" : "text-textBlackH"
          } ${!openGuarantorNote && "hidden"}`}
        >
          <div
            className={` w-full flex items-center justify-between p-[12px_22px_12px_13px]  text-[0.875rem] font-[400] italic `}
          >
            Type note here
            <img
              src={`/images/${
                darkMode === "true" ? "dropDownWhite" : "userDropdown"
              }.png`}
              alt=""
              className=" h-[24px] w-[24px] cursor-pointer rotate-180"
              onClick={() => setOpenGuarantorNote(false)}
            />
          </div>

          <textarea className=" w-full h-[100px] border-none outline-none p-[12px_22px_12px_13px] bg-[transparent] resize-none" />
        </div>

        {/* Other Note */}
        <div
          className={` w-full flex items-center justify-between p-[12px_22px_12px_13px] border-[1px] border-[#C6CCD2] rounded-[8px] text-[1.125rem] font-[600] mt-[24px] ${
            darkMode === "true" ? " text-textGreyWhite" : "text-textBlackH"
          }`}
        >
          Other Note{" "}
          <img
            src={`/images/${
              darkMode === "true" ? "dropDownWhite" : "userDropdown"
            }.png`}
            alt=""
            className=" h-[24px] w-[24px] cursor-pointer"
            onClick={() => setOpenOtherNote(true)}
          />
        </div>

        <div
          className={` w-full border-[1px] border-[#C6CCD2] rounded-[8px]  mt-[3px] ${
            darkMode === "true" ? " text-textGreyWhite" : "text-textBlackH"
          } ${!openOtherNote && "hidden"}`}
        >
          <div
            className={` w-full flex items-center justify-between p-[12px_22px_12px_13px]  text-[0.875rem] font-[400] italic `}
          >
            Type note here
            <img
              src={`/images/${
                darkMode === "true" ? "dropDownWhite" : "userDropdown"
              }.png`}
              alt=""
              className=" h-[24px] w-[24px] cursor-pointer rotate-180"
              onClick={() => setOpenOtherNote(false)}
            />
          </div>

          <textarea className=" w-full h-[100px] border-none outline-none p-[12px_22px_12px_13px] bg-[transparent] resize-none" />
        </div>
        <button className="h-[48px] w-[207px] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] mt-[47px]">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddNote;
