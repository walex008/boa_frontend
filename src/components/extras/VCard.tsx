import { ReactElement } from "react";
import { mode } from "../../appSlices/generalSlice";
import { useAppSelector } from "../../app/hooks";

type VCardType = {
  name: string;
  value: string | ReactElement<HTMLDivElement>;
};
const VCard = ({ name, value }: VCardType) => {
  const darkMode = useAppSelector(mode);
  return (
    <div className="w-full border-b-[1px] border-b-[#C6CCD2] flex items-center justify-between py-[11px]">
      <span className="text-[18px] text-textGrey font-[600]">{name}</span>{" "}
      <span
        className={`text-[18px] font-[600] ${
          darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
        }`}
      >
        {value}
      </span>
    </div>
  );
};

export default VCard;
