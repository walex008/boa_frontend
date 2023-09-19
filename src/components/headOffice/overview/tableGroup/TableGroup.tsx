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
      <div className="flex gap-x-[10px] ml-[33px] mt-[33px]">
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
          <div className="text-[20px] text-blue font-[600]">ZONES</div>
          <div className="bg-redLight p-[2px_18px] rounded-[15px] text-[18px] font-[600] text-textBlackH">
            {zone?.data?.length}
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
          <div className="text-[20px] text-blue font-[600]">AREAS</div>
          <div className="bg-redLight p-[2px_18px] rounded-[15px] text-[18px] font-[600] text-textBlackH">
            {area?.data?.length}
          </div>
        </div>

        <div
          className={`h-[62px] p-[18px_19px_19px_44px] flex items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer ${
            view === 2
              ? darkMode === "true"
                ? "bg-bgSemiBlack"
                : "bg-textWhite"
              : "bg-blueLight"
          }`}
          onClick={() => setView(2)}
        >
          <div className="text-[20px] text-blue font-[600]">BRANCHES</div>
          <div className="bg-redLight p-[2px_18px] rounded-[15px] text-[18px] font-[600] text-textBlackH">
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
