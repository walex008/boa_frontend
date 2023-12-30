import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setView } from "../../appSlices/headOfficeSlice";
import { mode } from "../../appSlices/generalSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(mode);
  return (
    <>
      <div className="flex gap-x-[10px] mr-[30px] mt-[13px] items-center justify-end">
        <Link
          to={"/dashboard"}
          className={` text-[0.625rem] md:text-[1.25rem] font-[600] ${
            darkMode === "true" ? "text-textGreyWhite" : "text-textBlack"
          }`}
        >
          Dashboard
        </Link>
        <span
          className={`${
            darkMode === "true" ? "text-textGreyWhite" : "text-textBlack"
          }`}
        >
          &gt;
        </span>
        <span
          className={`text-[0.625rem] md:text-[1.25rem] font-[600] ${
            darkMode === "true" ? " text-textGreyWhite" : "text-textBlackH"
          }`}
        >
          Head Office
        </span>
      </div>

      <div className="flex gap-x-[8px] md:gap-x-[16px] items-center ml-[30px] mt-[24px]">
        <span
          className={` text-[1rem] md:text-[2.5rem] font-[600] ${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          Head Office
        </span>
        <div className={`w-[1px] h-[10px] md:h-[18px] ${ 
            darkMode === "true" ? "bg-textWhite" : "bg-textBlackH"
          }`}></div>
        <span className="text-textGrey text-[0.8125rem] md:text-[1.5rem] font-[600]">
          Office Management
        </span>
      </div>
      <div className="flex gap-x-[16px] ml-[30px] mt-[20px]">
        <button
          className={`bg-blueLight text-blue p-[8px_16px] w-[83.159px] md:w-[127px] rounded-[8px] text-[0.75rem] md:text-[0.875rem]`}
          onClick={() => dispatch(setView("overview"))}
        >
          Overview
        </button>
        <button
          className={`bg-blueLight text-blue p-[8px_16px] w-[83.159px] md:w-[127px] rounded-[8px] text-[0.75rem] md:text-[0.875rem]`}
          onClick={() => dispatch(setView("staffs"))}
        >
          Staffs
        </button>
        <button
          className={`bg-blueLight text-blue p-[8px_16px] w-[83.159px] md:w-[127px] rounded-[8px] text-[0.75rem] md:text-[0.875rem]`}
          onClick={() => dispatch(setView("payroll"))}
        >
          Payroll
        </button>
      </div>
    </>
  );
};

export default Header;
