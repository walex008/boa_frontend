import React from "react";
import { useClickOut } from "../../utils/hooks/CheckOut";

type InputSelectType = {
  pOnclick: React.MouseEventHandler<HTMLDivElement>;
  cOnclick: (list: string) => void;
  cList: string[];
  open: Boolean;
  value: string | null;
  fValue: string;
  width?: string;
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
  color,
  mainRef,
  subRef,
  setFunc,
}: InputSelectType) => {
  useClickOut({ onState: open, mainRef, subRef, setFunc });
  return (
    <div className={`relative w-[${width}] `}>
      <div
        ref={subRef}
        className={`w-full py-3 pr-3 pl-[21px] border-[1px]  cursor-pointer rounded-[8px]  outline-none flex justify-between items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]   font-[600]  ${
          color === "blue"
            ? "border-[#106CFF] text-[#106CFF] text-[0.781rem] h-[29.92px]"
            : "border-[#C6CCD2] text-[#808080] text-[1rem] h-[52px]"
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
        className={`my-[5px] p-[17px_0px_21px_1px] bg-textWhite border-r-[3px] border-r-[#99C0FF] border-b-[3px] border-b-[#99C0FF] rounded-[24px] min-w-[160px] right-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)] absolute z-[1] ${
          !open && "hidden "
        }`}
      >
        {cList.map((list) => (
          <li
            key={list}
            className="hover:bg-[#99C0FF] text-textBlack rounded-[8px] p-[9px_31px_9px_17px]"
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
