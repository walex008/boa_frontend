import { useState } from "react";
import Zones from "./Zones";
import Areas from "./Areas";
import Branches from "./Branches";
import { useAppSelector } from "../../../../app/hooks";
import { mode } from "../../../../appSlices/generalSlice";
import {
  useGetAllAreasQuery,
  useGetAllBranchesQuery,
  useGetAllZonesQuery,
} from "../../../../appSlices/apiSlice";
const TableGroup = () => {
  const [view, setView] = useState<number>(0);
  const { data: zone } = useGetAllZonesQuery({});
  const { data: area } = useGetAllAreasQuery({});
  const { data: branch } = useGetAllBranchesQuery({});

  const darkMode = useAppSelector(mode);

  return (
    <div>
      <div className="flex gap-x-[10px] mt-[33px]">
        <div
          className={`h-[38px] md:h-[62px] p-[2px_22px_6.795px_17px] md:p-[18px_19px_19px_44px] flex flex-col md:flex-row items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer z-[2] ${
            view === 0
              ? darkMode === "true"
                ? "bg-bgSemiBlack"
                : "bg-textWhite"
              : "bg-blueLight"
          }`}
          onClick={() => setView(0)}
        >
          <div className="text-[0.75rem] md:text-[1.25rem] text-blue font-[600]">ZONES</div>
          <div className="bg-redLight p-[2px_8px] md:p-[2px_18px] rounded-[15px] text-[0.5rem] md:text-[1.125rem] font-[600] text-textBlackH">
            {zone?.data?.length}
          </div>
        </div>

        <div
          className={`h-[38px] md:h-[62px] p-[2px_22px_6.795px_17px] md:p-[18px_19px_19px_44px] flex flex-col md:flex-row items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer ${
            view === 1
              ? darkMode === "true"
                ? "bg-bgSemiBlack"
                : "bg-textWhite"
              : "bg-blueLight"
          }`}
          onClick={() => setView(1)}
        >
          <div className="text-[0.75rem] md:text-[1.25rem] text-blue font-[600]">AREAS</div>
          <div className="bg-redLight p-[2px_8px] md:p-[2px_18px] rounded-[15px] text-[0.5rem] md:text-[1.125rem] font-[600] text-textBlackH">
            {area?.data?.length}
          </div>
        </div>

        <div
          className={`h-[38px] md:h-[62px] p-[2px_22px_6.795px_17px] md:p-[18px_19px_19px_44px] flex flex-col md:flex-row items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer ${
            view === 2
              ? darkMode === "true"
                ? "bg-bgSemiBlack"
                : "bg-textWhite"
              : "bg-blueLight"
          }`}
          onClick={() => setView(2)}
        >
          <div className="text-[0.75rem] md:text-[1.25rem] text-blue font-[600]">BRANCHES</div>
          <div className="bg-redLight p-[2px_8px] md:p-[2px_18px] rounded-[15px] text-[0.5rem] md:text-[1.125rem] font-[600] text-textBlackH">
            {branch?.data?.length}
          </div>
        </div>
      </div>
      {view === 0 && <Zones />}
      {view === 1 && <Areas />}
      {view === 2 && <Branches />}
    </div>
  );
};

export default TableGroup;
