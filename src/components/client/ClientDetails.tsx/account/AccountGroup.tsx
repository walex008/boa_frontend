import { useState } from "react";

import { useAppSelector } from "../../../../app/hooks";
import { mode } from "../../../../appSlices/generalSlice";
import Loans from "./Loans";
import Savings from "./Savings";
const AccountGroup = () => {
  const [view, setView] = useState<number>(0);

  const darkMode = useAppSelector(mode);

  return (
    <div>
      <div className="flex gap-x-[10px] mt-[33px]">
        <div
          className={`h-[62px] p-[18px_19px_19px_44px] flex items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer z-[2] ${
            view === 0
              ? darkMode === "true"
                ? "bg-bgSemiBlack"
                : "bg-textWhite"
              : "bg-blueLight"
          }`}
          onClick={() => setView(0)}
        >
          <div className="text-[20px] text-blue font-[600]">LOANS</div>
          <div className="bg-redLight p-[2px_18px] rounded-[15px] text-[18px] font-[600] text-textBlackH">
            {""}
          </div>
        </div>

        <div
          className={`h-[62px] p-[18px_19px_19px_44px] flex items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer ${
            view === 1
              ? darkMode === "true"
                ? "bg-bgSemiBlack"
                : "bg-textWhite"
              : "bg-blueLight"
          }`}
          onClick={() => setView(1)}
        >
          <div className="text-[20px] text-blue font-[600]">SAVINGS</div>
          <div className="bg-redLight p-[2px_18px] rounded-[15px] text-[18px] font-[600] text-textBlackH">
            {""}
          </div>
        </div>
      </div>
      {view === 0 && <Loans />}
      {view === 1 && <Savings />}
    </div>
  );
};

export default AccountGroup;
