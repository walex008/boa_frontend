import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { InputSelect } from "../extras/InputSelect";
import { Autocomplete, TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

const AddGuarantor = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [mobile, setMobile] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [occupation, setOccupation] = useState<string | null>(null);
  const [occupationAddress, setOccupationAddress] = useState<string | null>(
    null
  );
  const [email, setEmail] = useState<string | null>(null);
  const [profession, setProfession] = useState<string | null>(null);

  console.log(firstName, lastName, mobile, address, occupation, occupationAddress, email, profession)

  const [relationship, setRelationship] = useState<string | null>(null);
  const [openRelationship, setOpenRelationship] = useState<Boolean>(false);

  const relationshipRef = useRef<HTMLUListElement>(null);
  const relationshipIconRef = useRef<HTMLImageElement>(null);

  const [title, setTitle] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<Boolean>(false);

  const titleRef = useRef<HTMLUListElement>(null);
  const titleIconRef = useRef<HTMLImageElement>(null);

  const [maritalStatus, setMaritalStatus] = useState<string | null>(null);
  const [openMaritalStatus, setOpenMaritalStatus] = useState<Boolean>(false);

  const maritalStatusRef = useRef<HTMLUListElement>(null);
  const maritalStatusIconRef = useRef<HTMLImageElement>(null);

  const [gender, setGender] = useState<string | null>(null);
  const [openGender, setOpenGender] = useState<Boolean>(false);

  const genderRef = useRef<HTMLUListElement>(null);
  const genderIconRef = useRef<HTMLImageElement>(null);

  const [DOB, setDOB] = useState<Dayjs | null>(dayjs("2023-08-17"));

  const [country, setCountry] = useState<string | null>(null);

  const darkMode = useAppSelector(mode);

  const countryNames = ["Nigeria", "Ghana", "South Africa", "Niger"];

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
            Add Guarantor
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
            Add Guarantor
          </span>
        </div>

        <div className="bg-textWhite rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] w-full p-[44px_159px_19px_35px] flex flex-col gap-y-[24px] mt-[33px]">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Relationship
            </span>{" "}
            <InputSelect
              pOnclick={() => setOpenRelationship(!openRelationship)}
              cOnclick={(list) => {
                setRelationship(list);
                setOpenRelationship(false);
              }}
              open={openRelationship}
              value={relationship}
              fValue="Select"
              cList={["Father", "Mother", "Brother", "Sister"]}
              width="503px"
              mainRef={relationshipRef}
              subRef={relationshipIconRef}
              setFunc={setOpenRelationship}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Title
            </span>{" "}
            <InputSelect
              pOnclick={() => setOpenTitle(!openTitle)}
              cOnclick={(list) => {
                setTitle(list);
                setOpenTitle(false);
              }}
              open={openTitle}
              value={title}
              fValue="Select"
              cList={["Mr", "Mrs", "Miss"]}
              width="503px"
              mainRef={titleRef}
              subRef={titleIconRef}
              setFunc={setOpenTitle}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              First Name
            </span>{" "}
            <input
              type="text"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Last Name
            </span>{" "}
            <input
              type="text"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Gender
            </span>{" "}
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
              width="503px"
              mainRef={genderRef}
              subRef={genderIconRef}
              setFunc={setOpenGender}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Marital Status
            </span>{" "}
            <InputSelect
              pOnclick={() => setOpenMaritalStatus(!openMaritalStatus)}
              cOnclick={(list) => {
                setMaritalStatus(list);
                setOpenMaritalStatus(false);
              }}
              open={openMaritalStatus}
              value={maritalStatus}
              fValue="Select"
              cList={["Single", "Married", "Other"]}
              width="503px"
              mainRef={maritalStatusRef}
              subRef={maritalStatusIconRef}
              setFunc={setOpenMaritalStatus}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Mobile
            </span>{" "}
            <input
              type="text"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Country
            </span>{" "}
            <Autocomplete
              disablePortal
              value={country}
              onChange={(event: any, newCountry: string | null) => {
                setCountry(newCountry);
                console.log(newCountry, country, event);
              }}
              options={countryNames}
              sx={{ width: "503px" }}
              renderInput={(params) => (
                <TextField {...params} label="Select Country" />
              )}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Date of Birth
            </span>{" "}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  sx={{
                    width: "503px",
                    borderRadius: "8px",
                  }}
                  value={DOB}
                  onChange={(newDate) => setDOB(newDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Email
            </span>{" "}
            <input
              type="email"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Profession
            </span>{" "}
            <input
              type="text"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Address
            </span>{" "}
            <input
              type="text"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Occupation
            </span>{" "}
            <input
              type="text"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Occupation Address
            </span>{" "}
            <input
              type="text"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setOccupationAddress(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">File</span>{" "}
            <div className="w-[503px] bg-textWhite text-[16px] text-[#808080] font-[600] border-[#C6CCD2] border-[1px] h-[160px] flex flex-col justify-center items-center rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] ">
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
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Description
            </span>{" "}
            <textarea
              className={`w-[503px] py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[160px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] resize-none ${
                darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
              }`}
            />
          </div>
        </div>
        <button className="mb-[66px] mt-[26px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] p-[8px_16px] w-[201px] ">
          Save
        </button>
      </form>
    </>
  );
};

export default AddGuarantor;
