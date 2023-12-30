import { useRef, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import { InputSelect } from "../../extras/Fields";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const LoanDetails = () => {
  const darkMode = useAppSelector(mode);

  const [firstRepayment, setFristRepayment] = useState<Dayjs | null>(
    dayjs("2023-08-17")
  );
  const [disbursementDate, setDisbursementDate] = useState<Dayjs | null>(
    dayjs("2023-08-17")
  );

  const [anyFamily, setAnyFamily] = useState<string | null>(null);
  const [openAnyFamily, setOpenAnyFamily] = useState<Boolean>(false);

  const anyFamilyRef = useRef<HTMLUListElement>(null);
  const anyFamilyIconRef = useRef<HTMLImageElement>(null);

  const [anyFamilyWithOther, setAnyFamilyWithOther] = useState<string | null>(
    null
  );
  const [openAnyFamilyWithOther, setOpenAnyFamilyWithOther] =
    useState<Boolean>(false);

  const anyFamilyWithOtherRef = useRef<HTMLUListElement>(null);
  const anyFamilyWithOtherIconRef = useRef<HTMLImageElement>(null);

  const [monthlyIncome, setMonthlyIncome] = useState<string | null>(null);
  const [openMonthlyIncome, setOpenMonthlyIncome] = useState<Boolean>(false);

  const monthlyIncomeRef = useRef<HTMLUListElement>(null);
  const monthlyIncomeIconRef = useRef<HTMLImageElement>(null);

  const [indebted, setIndebted] = useState<string | null>(null);
  const [openIndebted, setOpenIndebted] = useState<Boolean>(false);

  const indebtedRef = useRef<HTMLUListElement>(null);
  const indebtedIconRef = useRef<HTMLImageElement>(null);

  const [loanPurpose, setLoanPurpose] = useState<string | null>(null);
  const [openLoanPurpose, setOpenLoanPurpose] = useState<Boolean>(false);

  const loanPurposeRef = useRef<HTMLUListElement>(null);
  const loanPurposeIconRef = useRef<HTMLImageElement>(null);

  return (
    <div
      className={`w-full rounded-[16px]  p-[24px_48px] ${
        darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
      }`}
    >
      <div className=" text-blue text-[20px] font-[600]">LOAN DETAILS</div>
      <form className={`mt-[31px]`}>
        <div className={`flex gap-x-[36px]`}>
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Principal
              </label>
              <input
                type="text"
                defaultValue="400000"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Repayment Frequency
              </label>
              <input
                type="text"
                defaultValue="1"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Interest Rate (X% per yr)
              </label>
              <input
                type="text"
                defaultValue="12"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Max First Stage Amount
              </label>
              <input
                type="text"
                defaultValue="1"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Any Family Member With Other Groups?
              </label>
              <InputSelect
                pOnclick={() =>
                  setOpenAnyFamilyWithOther(!openAnyFamilyWithOther)
                }
                cOnclick={(list) => {
                  setAnyFamilyWithOther(list);
                  setOpenAnyFamilyWithOther(false);
                }}
                open={openAnyFamilyWithOther}
                value={anyFamilyWithOther}
                fValue="Select"
                cList={["Yes", "No"]}
                width="100%"
                mainRef={anyFamilyWithOtherRef}
                subRef={anyFamilyWithOtherIconRef}
                setFunc={setOpenAnyFamilyWithOther}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Average Monthly Income
              </label>
              <InputSelect
                pOnclick={() => setOpenMonthlyIncome(!openMonthlyIncome)}
                cOnclick={(list) => {
                  setMonthlyIncome(list);
                  setOpenMonthlyIncome(false);
                }}
                open={openMonthlyIncome}
                value={monthlyIncome}
                fValue="Select"
                cList={["50000", "100000", "200000", "500000"]}
                width="100%"
                mainRef={monthlyIncomeRef}
                subRef={monthlyIncomeIconRef}
                setFunc={setOpenMonthlyIncome}
              />
            </div>

            <div className={`flex flex-col`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Expected First Repayment Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    value={firstRepayment}
                    onChange={(newDate) => setFristRepayment(newDate)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Loan Terms (months)
              </label>
              <input
                type="text"
                defaultValue="12"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Type
              </label>
              <input
                type="text"
                defaultValue="40000"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>

            <div className={`flex flex-col`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Expected Disbursement Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    value={disbursementDate}
                    onChange={(newDate) => setDisbursementDate(newDate)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Any Family Member With Group?
              </label>
              <InputSelect
                pOnclick={() => setOpenAnyFamily(!openAnyFamily)}
                cOnclick={(list) => {
                  setAnyFamily(list);
                  setOpenAnyFamily(false);
                }}
                open={openAnyFamily}
                value={anyFamily}
                fValue="Select"
                cList={["Yes", "No"]}
                width="100%"
                mainRef={anyFamilyRef}
                subRef={anyFamilyIconRef}
                setFunc={setOpenAnyFamily}
              />
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Are you indebted to any MFI/MFB?
              </label>
              <InputSelect
                pOnclick={() => setOpenIndebted(!openIndebted)}
                cOnclick={(list) => {
                  setIndebted(list);
                  setOpenIndebted(false);
                }}
                open={openIndebted}
                value={indebted}
                fValue="Select"
                cList={["Yes", "No"]}
                width="100%"
                mainRef={indebtedRef}
                subRef={indebtedIconRef}
                setFunc={setOpenIndebted}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Loan Purpose
              </label>
              <InputSelect
                pOnclick={() => setOpenLoanPurpose(!openLoanPurpose)}
                cOnclick={(list) => {
                  setLoanPurpose(list);
                  setOpenLoanPurpose(false);
                }}
                open={openLoanPurpose}
                value={loanPurpose}
                fValue="Select"
                cList={[
                  "Loan Purpose 1",
                  "Loan Purpose 2",
                  "Loan Purpose 3",
                  "Loan Purpose 4",
                ]}
                width="100%"
                mainRef={loanPurposeRef}
                subRef={loanPurposeIconRef}
                setFunc={setOpenLoanPurpose}
              />
            </div>
          </div>
        </div>

        <div className=" text-blue text-[20px] font-[600] mt-[53px] mb-[7px]">
          CHARGES
        </div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead
              sx={{
                backgroundColor: "#CCE0FF",
                borderRadius: "4px",
                borderBottom: "1px solid #C6CCD2",
                color: "#1A1A1A",
              }}
            >
              <TableRow>
                <TableCell sx={{ fontWeight: "700", fontSize: "1rem" }}>
                  Name
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "700", fontSize: "1rem" }}
                >
                  Type
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "700", fontSize: "1rem" }}
                >
                  Amount
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "700", fontSize: "1rem" }}
                >
                  Collected on
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              className={`${
                darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
              }`}
            >
              <TableRow>
                <TableCell
                  sx={{
                    color: darkMode === "true" ? "#CBCBCB" : "#404040",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: darkMode === "true" ? "#CBCBCB" : "#404040",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Type
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: darkMode === "true" ? "#CBCBCB" : "#404040",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Amount
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: darkMode === "true" ? "#CBCBCB" : "#404040",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Collected
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <button className="h-[48px] w-[207px] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] mt-[47px]">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default LoanDetails;
