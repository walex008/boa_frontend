import React from "react";
import { useClickOut } from "../../utils/hooks/CheckOut";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";

type InputSelectType = {
  pOnclick: React.MouseEventHandler<HTMLDivElement>;
  cOnclick: (list: string) => void;
  cList: string[];
  open: Boolean;
  value: string | null;
  fValue: string;
  width?: string;
  useWidth?:Boolean;
  color?: string;
  mainRef: React.RefObject<HTMLUListElement>;
  subRef: React.RefObject<HTMLImageElement>;
  setFunc: React.Dispatch<React.SetStateAction<Boolean>>;
};

export const InputSelect = ({
  pOnclick,
  cOnclick,
  cList,
  open,
  value,
  fValue,
  width,
  useWidth,
  color,
  mainRef,
  subRef,
  setFunc,
}: InputSelectType) => {
  useClickOut({ onState: open, mainRef, subRef, setFunc });
  const darkMode=useAppSelector(mode)
  return (
    <div className={`relative ${useWidth?`w-[${width}]`:"w-full md:w-[75%]"}  `}>
      <div
        ref={subRef}
        className={`w-full py-3 pr-3 pl-[21px] border-[1px]  cursor-pointer rounded-[3px] md:rounded-[8px]  outline-none flex justify-between items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]   font-[600]  ${
          color === "blue"
            ? "border-[#106CFF] text-[#106CFF] text-[0.781rem] h-[29.92px]"
            : ` ${darkMode==="true"?"border-[#8d9985] bg-textFieldDark text-textGreyWhite":"border-[#C6CCD2] bg-textWhite"} text-[#808080] text-[0.625rem] md:text-[1rem] h-[32px] md:h-[52px]`
        }`}
        onClick={pOnclick}
      >
        <span>{value !== null ? value : fValue}</span>{" "}
        <img
          src={`/images/${
            color === "blue" ? "dropDownBlue" : "userDropdown"
          }.png`}
          alt=""
          className={` ${
            open && "rotate-180 transition-transform ease-in-out"
          }`}
        />
      </div>
      <ul
        ref={mainRef}
        className={`my-[5px] p-[17px_0px_21px_1px] ${darkMode==="true"?"bg-bgSemiBlack border-b-textGreyWhite border-r-textGreyWhite":" bg-textWhite border-b-[#99C0FF] border-r-[#99C0FF]"} border-r-[3px]  border-b-[3px]  rounded-[24px] min-w-[160px] right-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)] absolute z-[1] ${
          !open && "hidden "
        }`}
      >
        {cList.map((list) => (
          <li
            key={list}
            className={`hover:bg-[#99C0FF] ${darkMode==="true"?"text-textWhite":"text-textBlack"} rounded-[8px] p-[9px_31px_9px_17px]`}
            onClick={() => {
              cOnclick(list);
            }}
          >
            {list}
          </li>
        ))}
      </ul>
    </div>
  );
};
