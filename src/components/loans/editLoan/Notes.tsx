import { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";

const Notes = () => {
  const darkMode = useAppSelector(mode);
  const [openInitNote, setOpenInitNote] = useState<Boolean>(false);
  const [openGuarantorNote, setOpenGuarantorNote] = useState<Boolean>(false);
  const [openOtherNote, setOpenOtherNote] = useState<Boolean>(false);
  return (
    <div
      className={`w-full rounded-[16px]  p-[24px_48px] ${
        darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
      }`}
    >
      <div className=" text-blue text-[20px] font-[600]">ADD NOTES</div>
      <form className={`mt-[31px]`}>
        {/* Initiator's Note */}
        <div
          className={` w-full flex items-center justify-between p-[12px_22px_12px_13px] border-[1px] border-[#C6CCD2] rounded-[8px] text-[1.125rem] font-[600] ${
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
    </div>
  );
};

export default Notes;
