import { useRef, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import Avatar from "./Avatar";
import { InputSelect } from "../../extras/Fields";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

const NextOfKin = () => {
  const darkMode = useAppSelector(mode);
  const [relationship, setRelationship] = useState<string | null>(null);
  const [openRelationship, setOpenRelationship] = useState<Boolean>(false);

  const relationshipRef = useRef<HTMLUListElement>(null);
  const relationshipIconRef = useRef<HTMLImageElement>(null);

  const [maritalStatus, setMaritalStatus] = useState<string | null>(null);
  const [openMaritalStatus, setOpenMaritalStatus] = useState<Boolean>(false);

  const maritalStatusRef = useRef<HTMLUListElement>(null);
  const maritalStatusIconRef = useRef<HTMLImageElement>(null);

  const [DOB, setDOB] = useState<Dayjs | null>(dayjs("2023-08-17"));

  const [title, setTitle] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<Boolean>(false);

  const titleRef = useRef<HTMLUListElement>(null);
  const titleIconRef = useRef<HTMLImageElement>(null);

  const [gender, setGender] = useState<string | null>(null);
  const [openGender, setOpenGender] = useState<Boolean>(false);

  const [country, setCountry] = useState<string | null>(null);

  const genderRef = useRef<HTMLUListElement>(null);
  const genderIconRef = useRef<HTMLImageElement>(null);

  const countryNames = ["Nigeria", "Ghana", "Morocco", "Zambia", "Sudan"];
  return (
    <div
      className={`w-full rounded-[16px]  p-[24px_48px] ${
        darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
      }`}
    >
      <Avatar name="NEXT OF KIN" />
      <form className={`mt-[45px]`}>
        <div className={`flex gap-x-[36px]`}>
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Relationship
              </label>
              <InputSelect
                pOnclick={() => setOpenRelationship(!openRelationship)}
                cOnclick={(list) => {
                  setRelationship(list);
                  setOpenRelationship(false);
                }}
                open={openRelationship}
                value={relationship}
                fValue="Select"
                cList={["Brother", "Sister", "Father", "Mother"]}
                width="100%"
                mainRef={relationshipRef}
                subRef={relationshipIconRef}
                setFunc={setOpenRelationship}
              />
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Full Name
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

            <div className={`flex flex-col`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                DOB
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
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Title
              </label>
              <InputSelect
                pOnclick={() => setOpenTitle(!openTitle)}
                cOnclick={(list) => {
                  setTitle(list);
                  setOpenTitle(false);
                }}
                open={openTitle}
                value={title}
                fValue="Select"
                cList={["Mr", "Miss", "Mrs"]}
                width="100%"
                mainRef={titleRef}
                subRef={titleIconRef}
                setFunc={setOpenTitle}
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
              <InputSelect
                pOnclick={() => setOpenGender(!openGender)}
                cOnclick={(list) => {
                  setGender(list);
                  setOpenGender(false);
                }}
                open={openGender}
                value={gender}
                fValue="Select"
                cList={["Male", "Female"]}
                width="100%"
                mainRef={genderRef}
                subRef={genderIconRef}
                setFunc={setOpenGender}
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
                  console.log(event);
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
                Profession
              </label>
              <input
                type="text"
                placeholder="Enter Text"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>
          </div>
        </div>

        <div className={`flex flex-col gap-y-[8px]`}>
          <label
            className={`text-[18px] font-[600] mt-[20px] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
            }`}
          >
            Address
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
            className={`text-[18px] font-[600] mt-[20px] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
            }`}
          >
            Description
          </label>
          <textarea
            placeholder="Enter Name"
            className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[160px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] resize-none ${
              darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
            }`}
          />
        </div>

        <button className="h-[48px] w-[207px] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] mt-[47px]">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default NextOfKin;
