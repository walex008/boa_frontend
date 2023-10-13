import { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { InputSelect } from "../../extras/InputSelect";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
const Disburse = () => {
  const navigate = useNavigate();
  const darkMode = useAppSelector(mode);

  const [account, setAccount] = useState<string | null>(null);
  const [openAccount, setOpenAccount] = useState<Boolean>(false);
  const accountRef = useRef<HTMLUListElement>(null);
  const accountIconRef = useRef<HTMLImageElement>(null);

  const [disburseDate, setDisburseDate] = useState<Dayjs | null>(
    dayjs("2023-08-17")
  );
  const [paymentDate, setPaymentDate] = useState<Dayjs | null>(
    dayjs("2023-09-17")
  );

  return (
    <>
      <div className="pt-[13px] pr-[49px] pl-[39px]">
        <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
          <Link to={"/dashboard"}>Dashboard</Link>
          <span>&gt;</span>
          <Link to={"/loans"}>Loans</Link>
          <span>&gt;</span>
          <span className="text-textBlackH">Disburse Loan</span>
        </div>

        <div className="mt-[21px] flex items-center gap-x-[15px]">
          <img
            src="/images/arrowBack.png"
            alt=""
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <span className="text-[32px] text-textBlackH font-[600]">
            Disburse Loan
          </span>
        </div>
        <div className="bg-textWhite w-full mt-[33px] px-[28px] py-[34px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] rounded-[16px]">
          <div className="w-full flex mb-[24px] gap-x-[43px] ">
            <div className=" w-full flex justify-between">
              <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
                <label className=" text-[1.125rem] text-textBlackH font-[600]">
                  Actual Disbursement Date
                </label>
                <div className="w-full">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        sx={{
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        value={disburseDate}
                        onChange={(newDate) => setDisburseDate(newDate)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
                <label className=" text-[1.125rem] text-textBlackH font-[600]">
                  First Repayment Day
                </label>
                <div className="w-full">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        sx={{
                          width: "100%",
                          borderRadius: "8px",
                        }}
                        value={paymentDate}
                        onChange={(newDate) => setPaymentDate(newDate)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[8px] w-full bg-[#F6F7F8] mt-[44px] mb-[20px]"></div>

          <div className=" text-[1.5rem] text-[#106CFF] font-[600]">
            REPAYMENT DETAILS
          </div>

          <div className=" w-full flex justify-between mt-[24px]">
            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Amount
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>

            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Date
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>
          </div>

          <div className=" mt-[24px]">
            <label>Select Payment Type</label>

            <div className=" mt-[16px] w-full flex items-center justify-between">
              <div className=" flex items-center gap-x-[8px]">
                <input
                  type="radio"
                  name="paymentType"
                  id="cash"
                  className="h-[1.5rem] w-[1.5rem] accent-[#000] cursor-pointer"
                />
                <label
                  htmlFor="cash"
                  className=" text-[1rem] text-textBlack font-[600] cursor-pointer"
                >
                  Cash
                </label>
              </div>

              <div className=" flex items-center gap-x-[8px]">
                <input
                  type="radio"
                  name="paymentType"
                  id="cheque"
                  className="h-[1.5rem] w-[1.5rem] accent-[#000] cursor-pointer"
                />
                <label
                  htmlFor="cheque"
                  className=" text-[1rem] text-textBlack font-[600] cursor-pointer"
                >
                  Cheque
                </label>
              </div>

              <div className=" flex items-center gap-x-[8px]">
                <input
                  type="radio"
                  name="paymentType"
                  id="bankTransfer"
                  className="h-[1.5rem] w-[1.5rem] accent-[#000] cursor-pointer"
                />
                <label
                  htmlFor="bankTransfer"
                  className=" text-[1rem] text-textBlack font-[600] cursor-pointer"
                >
                  Bank Transfer
                </label>
              </div>

              <div className=" flex items-center gap-x-[8px]">
                <input
                  type="radio"
                  name="paymentType"
                  id="USSDTransfer"
                  className="h-[1.5rem] w-[1.5rem] accent-[#000] cursor-pointer"
                />
                <label
                  htmlFor="USSDTransfer"
                  className=" text-[1rem] text-textBlack font-[600] cursor-pointer"
                >
                  USSD Transfer
                </label>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-between mt-[24px]">
            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Account
              </label>
              <div className=" w-full">
                <InputSelect
                  pOnclick={() => setOpenAccount(!openAccount)}
                  cOnclick={(list) => {
                    setAccount(list);
                    setOpenAccount(false);
                  }}
                  open={openAccount}
                  value={account}
                  fValue=""
                  cList={["Account 1", "Account 2", "Account 3", "Account 4"]}
                  mainRef={accountRef}
                  subRef={accountIconRef}
                  setFunc={setOpenAccount}
                />
              </div>
            </div>

            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Ref Number
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>
          </div>

          <div className=" w-full flex justify-between mt-[24px]">
            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Routing Code
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>

            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Receipt Number
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>
          </div>

          <div className=" w-full flex justify-between mt-[24px]">
            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Bank Name
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>

            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Cheque Number
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>
          </div>

          <div className=" w-full flex justify-between mt-[24px]">
            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Account Number
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>

            <div className="flex flex-col items-start w-[48%] gap-y-[16px]">
              <label className=" text-[1.125rem] text-textBlackH font-[600]">
                Account Name
              </label>
              <input
                type="text"
                className=" w-full h-[48px] border-[1px] border-[#C6CCD2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] rounded-[8px] outline-none px-[5px]"
              />
            </div>
          </div>
          <div className={`flex flex-col gap-y-[8px]`}>
            <label
              className={`text-[18px] font-[600] mt-[24px] ${
                darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
              }`}
            >
              File
            </label>
            <div className="bg-textWhite text-[16px] text-[#808080] font-[600] border-[#C6CCD2] border-[1px] h-[160px] w-full flex flex-col justify-center items-center rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] ">
              <img src="/images/image.png" alt="" />
              <p>Drag image here</p>
              <p>Or</p>
              <label htmlFor="userImage" className="text-blue cursor-pointer">
                Browse image
              </label>
              <input
                type="file"
                name=""
                id="userImage"
                className="w-[1px] h-[1px]"
              />
            </div>
          </div>
          <div className={`flex flex-col gap-y-[8px]`}>
            <label
              className={`text-[18px] font-[600] mt-[20px] ${
                darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
              }`}
            >
              Description
            </label>
            <textarea
              className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[160px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] resize-none ${
                darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
              }`}
            />
          </div>
        </div>
        <div className=" flex items-center gap-x-[16px] pb-[50px]">
          <button className="h-[48px] w-[12.5625rem] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] mt-[47px]">
            Save
          </button>

          <button className="h-[48px] w-[9.125rem] p-[8px_16px] border-blue border-[1px]  text-blue bg-textWhite text-[18px] font-[600] rounded-[8px] mt-[47px]">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Disburse;
