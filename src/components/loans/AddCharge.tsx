import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

const AddCharge = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string | null>(null);
  const [charge, setCharge] = useState<string | null>(null);
  const [opening_date, setOpening_Date] = useState<Dayjs | null>(
    dayjs("2023-08-17")
  );
  const darkMode = useAppSelector(mode);

  return (
    <>
      <form className="pt-[13px] pr-[49px] pl-[39px]">
        <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
          <Link to={"/dashboard"}>Dashboard</Link>
          <span>&gt;</span>
          <Link to={"/loans"}>Loans</Link>
          <span>&gt;</span>
          <span
            className={`${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            }`}
          >
            Add Charge
          </span>
        </div>

        <div className="mt-[21px] flex items-center gap-x-[15px]">
          <img
            src={`/images/${
              darkMode === "true" ? "arrowWhite" : "arrowBack"
            }.png`}
            alt=""
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <span
            className={`text-[32px]  font-[600] ${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            }`}
          >
            Add Charge
          </span>
        </div>

        <div className="bg-textWhite rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] w-full p-[44px_159px_19px_35px] flex flex-col gap-y-[24px] mt-[33px]">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Charge
            </span>{" "}
            <input
              type="text"
              placeholder="Enter Charge Name"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setCharge(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Amount
            </span>{" "}
            <input
              type="text"
              placeholder="Enter Amount"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">Date</span>{" "}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  sx={{
                    width: "503px",
                    borderRadius: "8px",
                  }}
                  value={opening_date}
                  onChange={(newDate) => setOpening_Date(newDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <button className="mb-[66px] mt-[26px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] p-[8px_16px] w-[201px] ">
          Save
        </button>
      </form>
    </>
  );
};

export default AddCharge;
