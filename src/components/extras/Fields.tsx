import React from "react";
import { useClickOut } from "../../utils/hooks/CheckOut";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import MuiThemes from "./MuiThemes";
import dayjs from "dayjs";
import {
  DatePicker,
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { useViewport } from "../extras/hooks/Viewport";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type InputSelectType = {
  pOnclick: React.MouseEventHandler<HTMLDivElement>;
  cOnclick: (list: string) => void;
  cList: string[];
  open: Boolean;
  value: string | null;
  fValue: string;
  width?: string;
  useWidth?: Boolean;
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
  const darkMode = useAppSelector(mode);
  return (
    <div
      className={`relative ${
        useWidth ? `w-[${width}]` : "w-full md:w-[75%]"
      }  `}
    >
      <div
        ref={subRef}
        className={`w-full py-3 pr-3 pl-[21px] border-[1px]  cursor-pointer rounded-[3px] md:rounded-[8px]  outline-none flex justify-between items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]   font-[600]  ${
          color === "blue"
            ? "border-[#106CFF] text-[#106CFF] text-[0.781rem] h-[29.92px]"
            : ` ${
                darkMode === "true"
                  ? "border-[#8d9985] bg-textFieldDark text-textGreyWhite"
                  : "border-[#C6CCD2] bg-textWhite"
              } text-[#808080] text-[0.625rem] md:text-[1rem] h-[32px] md:h-[52px]`
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
        className={`my-[5px] p-[17px_0px_21px_1px] ${
          darkMode === "true"
            ? " bg-textFieldDark border-b-textGreyWhite border-r-textGreyWhite"
            : " bg-textWhite border-b-[#99C0FF] border-r-[#99C0FF]"
        } border-r-[3px]  border-b-[3px]  rounded-[24px] min-w-[160px] right-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)] absolute z-[1] ${
          !open && "hidden "
        }`}
      >
        {cList.map((list) => (
          <li
            key={list}
            className={`hover:bg-[#99C0FF] ${
              darkMode === "true" ? "text-textWhite" : "text-textBlack"
            } rounded-[8px] p-[9px_31px_9px_17px]`}
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

export const HeadOfficeTitle = () => {
  const darkMode = useAppSelector(mode);
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      <span
        className={`text-[0.625rem] md:text-[1.25rem] ${
          darkMode === "true" ? "text-textWhite" : "text-textBlackH"
        } font-[600]`}
      >
        Head Office
      </span>{" "}
      <div
        className={`w-full h-[32px] md:h-[52px] md:w-[75%] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-[#CCE0FF] border-[1px] ${
          darkMode === "true"
            ? "border-[#8d9985] text-textBlack"
            : "border-[#C6CCD2] text-textBlackH "
        } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[1.125rem] font-[600]`}
      >
        Head Office
      </div>
    </div>
  );
};

export const Input = ({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) => {
  const darkMode = useAppSelector(mode);
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      <span
        className={`text-[0.625rem] md:text-[1.25rem] ${
          darkMode === "true" ? "text-textWhite" : "text-textBlackH"
        } font-[600]`}
      >
        {label}
      </span>{" "}
      <input
        type="text"
        placeholder={placeholder}
        required
        className={`w-full h-[32px] md:h-[52px] md:w-[75%] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${
          darkMode === "true"
            ? "border-[#8d9985] text-textWhite bg-textFieldDark"
            : "border-[#C6CCD2] text-textBlackH bg-textWhite"
        } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
        onChange={onChange}
      />
    </div>
  );
};

export const DateInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: dayjs.Dayjs | null;
  onChange:
    | ((
        value: any,
        context: PickerChangeHandlerContext<DateValidationError>
      ) => void)
    | undefined;
}) => {
  const darkMode = useAppSelector(mode);
  const darkTheme = MuiThemes();
  const { width } = useViewport();
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      <span
        className={`text-[0.625rem] md:text-[1.25rem] ${
          darkMode === "true" ? "text-textWhite" : "text-textBlackH"
        } font-[600]`}
      >
        {label}
      </span>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DatePicker
          disablePast
          sx={{
            width: `${width < 768 ? "100%" : "75%"}`,
            "& .MuiDateField-root": {
              color: "#20b2aa",
            },

            "& .MuiOutlinedInput-root": {
              "& input": {
                fontSize: `${width < 768 ? "0.625rem" : "1.125rem"}`,
                color: `${width < 768 ? "#cbcbcb" : "#1a1a1a"}`,
              },
              "& fieldset": {
                borderRadius: `${width < 768 ? "3px" : "8px"}}`,
                borderColor: `${width < 768 ? "#8d9985" : "#C6CCD2"}`,
                backgroundColor: `${darkMode === "true" ? "#434c56" : "#fff"}`,
                height: `${width < 768 ? "32px" : "52px"}}`,
              },
              "&:hover fieldset": {
                borderColor: `${width < 768 ? "#8d9985" : "#C6CCD2"}`,
              },
              "&.Mui-focused fieldset": {
                borderColor: `${width < 768 ? "#8d9985" : "#C6CCD2"}`,
              },
            },
          }}
          value={value}
          onChange={onChange}
          slotProps={{
            textField: { size: width < 768 ? "small" : `medium` },
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export const TextArea = ({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}) => {
  const darkMode = useAppSelector(mode);
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      <span
        className={`text-[0.625rem] md:text-[1.25rem] ${
          darkMode === "true" ? "text-textWhite" : "text-textBlackH"
        } font-[600]`}
      >
        {label}
      </span>{" "}
      <textarea
        placeholder={placeholder}
        required
        className={`w-full md:w-[75%] border-[1px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04) rounded-[8px] p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] ${
          darkMode === "true"
            ? "border-[#8d9985] text-textWhite bg-textFieldDark"
            : "border-[#C6CCD2] text-textBlackH bg-textWhite"
        } font-[600] h-[181px] resize-none outline-none`}
        onChange={onChange}
      />
    </div>
  );
};
