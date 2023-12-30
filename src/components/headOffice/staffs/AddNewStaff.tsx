import { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import { InputSelect } from "../../extras/Fields";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import AddHead from "../../extras/AddHead";

const AddNewStaff = () => {
  const navigate = useNavigate();
  const [openGender, setOpenGender] = useState<Boolean>(false);
  const [gender, setGender] = useState<string | null>(null);
  const genderRef = useRef<HTMLUListElement>(null);
  const genderIconRef = useRef<HTMLImageElement>(null);
  const darkMode = useAppSelector(mode);
  return (
    <Layout>
      <div className="pt-[13px] pr-[49px] pl-[39px]">
        <AddHead prev="Staff" prevLink="head-office" current="Add Staff" />
        <div
          className={`${
            darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
          } w-full mt-[33px] px-[28px] py-[34px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] rounded-[16px]`}
        >
          <div className="flex w-full flex-col md:flex-row md:items-center gap-y-[20px]">
            <div className="w-full md:w-[54%] flex flex-col gap-y-[24px]">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <span
                  className={`text-[0.625rem] md:text-[1.25rem] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  } font-[600]`}
                >
                  First Name
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Name"
                  className={`w-full h-[32px] md:h-[52px] md:w-[75%] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${
                    darkMode === "true"
                      ? "border-[#8d9985] text-textWhite bg-textFieldDark"
                      : "border-[#C6CCD2] text-textBlackH bg-textWhite"
                  } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <span
                  className={`text-[0.625rem] md:text-[1.25rem] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  } font-[600]`}
                >
                  Last Name
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Name"
                  className={`w-full h-[32px] md:h-[52px] md:w-[75%] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${
                    darkMode === "true"
                      ? "border-[#8d9985] text-textWhite bg-textFieldDark"
                      : "border-[#C6CCD2] text-textBlackH bg-textWhite"
                  } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <span
                  className={`text-[0.625rem] md:text-[1.25rem] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  } font-[600]`}
                >
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
                  width="337px"
                  mainRef={genderRef}
                  subRef={genderIconRef}
                  setFunc={setOpenGender}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <span
                  className={`text-[0.625rem] md:text-[1.25rem] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  } font-[600]`}
                >
                  Branch
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Branch"
                  className={`w-full h-[32px] md:h-[52px] md:w-[75%] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${
                    darkMode === "true"
                      ? "border-[#8d9985] text-textWhite bg-textFieldDark"
                      : "border-[#C6CCD2] text-textBlackH bg-textWhite"
                  } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
                />
              </div>
            </div>
            <div
              className={`${
                darkMode === "true" ? " bg-textFieldDark" : " bg-textWhite"
              } p-[73px_50px_70px_50px] text-[16px] text-[#808080] font-[600] border-[#C6CCD2] border-[1px] border-dashed h-[261px] w-full md:w-[40%] md:ml-[57px] flex flex-col justify-center items-center`}
            >
              <img src="/images/image.png" alt="" />
              <p>Drag image here</p>
              <p>Or</p>
              <label htmlFor="userImage" className="text-blue">
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
          <div className="h-[8px] w-full bg-[#F6F7F8] mt-[35px] mb-[53px]"></div>
          <div className="w-full flex flex-col md:flex-row gap-y-[24px] gap-x-[62px]">
            <div className="w-full md:w-[50%] flex flex-col gap-y-[24px]">
              <div className="flex flex-col">
                <span
                  className={`text-[0.625rem] md:text-[1.25rem] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  } font-[600]`}
                >
                  Email
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Email"
                  className={`w-full h-[32px] md:h-[52px] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${
                    darkMode === "true"
                      ? "border-[#8d9985] text-textWhite bg-textFieldDark"
                      : "border-[#C6CCD2] text-textBlackH bg-textWhite"
                  } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-[0.625rem] md:text-[1.25rem] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  } font-[600]`}
                >
                  Description
                </span>{" "}
                <textarea
                  placeholder="Enter Description"
                  className={`w-full h-[133px] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] resize-none ${
                    darkMode === "true"
                      ? "border-[#8d9985] text-textWhite bg-textFieldDark"
                      : "border-[#C6CCD2] text-textBlackH bg-textWhite"
                  } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
                />
              </div>
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-y-[24px]">
              <div className="flex flex-col">
                <span
                  className={`text-[0.625rem] md:text-[1.25rem] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  } font-[600]`}
                >
                  Address
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Address"
                  className={`w-full h-[32px] md:h-[52px] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${
                    darkMode === "true"
                      ? "border-[#8d9985] text-textWhite bg-textFieldDark"
                      : "border-[#C6CCD2] text-textBlackH bg-textWhite"
                  } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-[0.625rem] md:text-[1.25rem] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  } font-[600]`}
                >
                  Password
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Password"
                  className={`w-full h-[32px] md:h-[52px] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${
                    darkMode === "true"
                      ? "border-[#8d9985] text-textWhite bg-textFieldDark"
                      : "border-[#C6CCD2] text-textBlackH bg-textWhite"
                  } rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
                />
              </div>
            </div>
          </div>
          <div className=" flex gap-x-[16px]">
            <button className="mb-[66px] mt-[26px] bg-blue text-textWhite text-[0.75rem] md:text-[1.125rem] font-[600] rounded-[3px] md:rounded-[8px] p-[3px_6px] md:p-[8px_16px] w-[122px] md:w-[201px] ">
              Save
            </button>
            <button className="mb-[66px] mt-[26px] bg-textWhite text-blue border-[2px] border-blue text-[0.75rem] md:text-[1.125rem] font-[600] rounded-[3px] md:rounded-[8px] p-[3px_6px] md:p-[8px_16px] w-[122px] md:w-[201px] ">
              Preview
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddNewStaff;
