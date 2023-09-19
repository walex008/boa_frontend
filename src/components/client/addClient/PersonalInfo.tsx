import { useRef, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import { InputSelect } from "../../extras/InputSelect";
import Avatar from "./Avatar";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Autocomplete, TextField } from "@mui/material";

const PersonalInfo = () => {
  const darkMode = useAppSelector(mode);

  const [maritalStatus, setMaritalStatus] = useState<string | null>(null);
  const [openMaritalStatus, setOpenMaritalStatus] = useState<Boolean>(false);

  const maritalStatusRef = useRef<HTMLUListElement>(null);
  const maritalStatusIconRef = useRef<HTMLImageElement>(null);

  const [DOB, setDOB] = useState<Dayjs | null>(dayjs("2023-08-17"));

  const [country, setCountry] = useState<string | null>(null);

  const countryNames = ["Nigeria", "Ghana", "Morocco", "Zambia", "Sudan"];

  return (
    <div
      className={`w-full rounded-[16px]  p-[24px_48px] ${
        darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
      }`}
    >
      <Avatar name="PERSONAL INFO" />

      <form className={`mt-[45px]`}>
        <div className={`flex gap-x-[36px]`}>
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
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
                Gender
              </label>
              <div className="w-full flex gap-x-[4px]">
                <label
                  htmlFor="male"
                  className="w-[50%] flex items-center gap-x-[8px] cursor-pointer py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] "
                >
                  {" "}
                  <input
                    type="radio"
                    value="male"
                    id="male"
                    name="gender"
                    className=" cursor-pointer"
                  />{" "}
                  <label
                    htmlFor="male"
                    className=" text-[16px] font-[600] text-textGrey cursor-pointer"
                  >
                    Male
                  </label>{" "}
                </label>
                <label
                  htmlFor="female"
                  className="w-[50%] flex items-center gap-x-[8px] cursor-pointer py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] "
                >
                  {" "}
                  <input
                    type="radio"
                    value="female"
                    id="female"
                    name="gender"
                    className=" cursor-pointer"
                  />{" "}
                  <label
                    htmlFor="female"
                    className=" text-[16px] font-[600] text-textGrey cursor-pointer"
                  >
                    Female
                  </label>{" "}
                </label>
              </div>
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Marital Status
              </label>
              <InputSelect
                pOnclick={() => setOpenMaritalStatus(!openMaritalStatus)}
                cOnclick={(list) => {
                  setMaritalStatus(list);
                  setOpenMaritalStatus(false);
                }}
                open={openMaritalStatus}
                value={maritalStatus}
                fValue="Select"
                cList={["Married", "Single", "Other"]}
                width="100%"
                mainRef={maritalStatusRef}
                subRef={maritalStatusIconRef}
                setFunc={setOpenMaritalStatus}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                State
              </label>
              <input
                type="text"
                placeholder="Enter State"
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
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>
          </div>
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
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
                Mobile
              </label>
              <input
                type="text"
                placeholder="Enter Text"
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
                Country
              </label>
              <Autocomplete
                disablePortal
                value={country}
                onChange={(event: any, newCountry: string | null) => {
                  setCountry(newCountry);
                  console.log(newCountry, country);
                }}
                options={countryNames}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Select Country" />
                )}
              />
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                LGA
              </label>
              <input
                type="text"
                placeholder="Enter Text"
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
                Date of Birth
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    value={DOB}
                    onChange={(newDate) => setDOB(newDate)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
        </div>

        <div className={`flex flex-col gap-y-[8px]`}>
          <label
            className={`text-[18px] font-[600] mt-[24px] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
            }`}
          >
            Signature
          </label>
          <div className="bg-textWhite text-[16px] text-[#808080] font-[600] border-[#C6CCD2] border-[1px] h-[139px] w-full flex flex-col justify-center items-center rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] ">
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

        <button className="h-[48px] w-[207px] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] mt-[47px]">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
