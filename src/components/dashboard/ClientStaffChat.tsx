import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import RadialBarComp from "../extras/RadialBar";

const ClientStaffChat = () => {
  const darkMode=useAppSelector(mode)
  return (
    <div className="mt-[47px] px-[30px] flex flex-col md:flex-row w-full gap-y-[24px] md:gap-y-0 md:gap-x-[25px]">
      <div className={`w-full md:w-[50%] ${darkMode==="true"?"bg-bgSemiBlack":"bg-textWhite"} rounded-[16px] h-[220px] md:h-[287px] p-[20px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08) relative `}>
        <div className="flex items-center justify-between">
          <span className={`text-[0.9375rem] md:text-[1.5rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[600]`}>
            No. of Users
          </span>
          <img src={`/images/${darkMode==="true"?"popDotsWhite":"popDots"}.png`} alt="" />
        </div>
        <div className="w-full flex gap-x-[24px] mt-[25px] justify-center">
          <div className={`h-[118px] md:h-[178px]  p-[19px_46px_20px_42px] md:p-[19px] xl:p-[19px_46px_20px_42px] flex flex-col gap-y-[5px] rounded-[16px] ${darkMode==="true"?"bg-bgDarkMode":"bg-textWhite"} shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] items-center justify-center`}>
            <img src="/images/users.png" alt="" className=" w-[32px] md:w-[54px] h-[32px] md:h-[54px]"/>
            <p className={`text-[0,75rem] md:text-[1.25rem] ${darkMode==="true"?"text-textGreyWhite":"text-textBlack"} font-[400] text-center`}>
              Total Staffs
            </p>
            <p className={`text-[1rem] md:text-[2rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[400] text-center`}>
              130,000
            </p>
          </div>
          <div className={`h-[118px] md:h-[178px]  p-[19px_46px_20px_42px] md:p-[19px] xl:p-[19px_46px_20px_42px] flex flex-col gap-y-[5px] rounded-[16px] ${darkMode==="true"?"bg-bgDarkMode":"bg-textWhite"} shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] items-center justify-center`}>
            <img src="/images/users.png" alt="" className=" w-[32px] md:w-[54px] h-[32px] md:h-[54px]"/>
            <p className={`text-[0,75rem] md:text-[1.25rem] ${darkMode==="true"?"text-textGreyWhite":"text-textBlack"} font-[400] text-center`}>
              Total Clients
            </p>
            <p className={`text-[1rem] md:text-[2rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[400] text-center`}>
              130,000
            </p>
          </div>
        </div>
      </div>
      <div className={`w-full md:w-[50%] ${darkMode==="true"?"bg-bgSemiBlack":"bg-textWhite"} rounded-[16px] h-[220px] md:h-[287px] p-[20px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08) relative `}>
        <div className={`text-[0.9375rem] md:text-[1.5rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[600]`}>
          Clients by Gender
        </div>

        <RadialBarComp />
      </div>
    </div>
  );
};

export default ClientStaffChat;
