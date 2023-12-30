import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";

const MainHead = ({ current }: { current: string }) => {
  const darkMode = useAppSelector(mode);
  return (
    <>
      <div className="flex gap-x-[10px] mr-[30px] mt-[13px] items-center justify-end">
        <Link
          to={"/dashboard"}
          className={`text-[0.625rem] md:text-[1.25rem] font-[600] ${
            darkMode === "true" ? "text-textGreyWhite" : "text-textGrey"
          }`}
        >
          Dashboard
        </Link>
        <span
          className={`text-[0.625rem] md:text-[1.25rem] font-[600] ${
            darkMode === "true" ? "text-textGreyWhite" : "text-textGrey"
          }`}
        >
          &gt;
        </span>
        <span
          className={`text-[0.625rem] md:text-[1.25rem] font-[600] ${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          {current}
        </span>
      </div>

      <div className="flex gap-x-[16px] items-center ml-[30px] mt-[24px]">
        <span
          className={` text-[1rem] md:text-[2.5rem] font-[600] ${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          {current}
        </span>
        <div
          className={`w-[1px] h-[10px] md:h-[18px] ${
            darkMode === "true" ? "bg-textWhite" : "bg-textBlackH"
          }`}
        ></div>
        <span className="text-textGrey text-[0.625rem] md:text-[1.5rem] font-[600]">
          {current} Management
        </span>
      </div>
    </>
  );
};

export default MainHead;
