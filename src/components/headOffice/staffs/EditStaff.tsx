import { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import { InputSelect } from "../../extras/InputSelect";

const EditStaff = () => {
  const navigate = useNavigate();
  const [openGender, setOpenGender] = useState<Boolean>(false);
  const [gender, setGender] = useState<string | null>(null);
  const genderRef = useRef<HTMLUListElement>(null);
  const genderIconRef = useRef<HTMLImageElement>(null);
  return (
    <Layout>
      <div className="pt-[13px] pr-[49px] pl-[39px]">
        <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
          <Link to={"/dashboard"}>Dashboard</Link>
          <span>&gt;</span>
          <Link to={"/head-office"}>Staff</Link>
          <span>&gt;</span>
          <span className="text-textBlackH">Edit Staff</span>
        </div>

        <div className="mt-[21px] flex items-center gap-x-[15px]">
          <img
            src="/images/arrowBack.png"
            alt=""
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <span className="text-[32px] text-textBlackH font-[600]">
            Edit Staff
          </span>
        </div>
        <div className="bg-textWhite w-full mt-[33px] px-[28px] py-[34px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] rounded-[16px]">
          <div className="flex w-full">
            <div className="w-[54%] flex flex-col gap-y-[24px]">
              <div className="flex items-center justify-between">
                <span className="text-[20px] text-textBlackH font-[600]">
                  First Name
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="border-[#C6CCD2] border-[1px] outline-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] h-[48px] px-[8px] w-[337px] text-[#808080]"
                />
              </div>
              <div className="flex items-center gap-x-[30px] justify-between">
                <span className="text-[20px] text-textBlackH font-[600]">
                  Last Name
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="border-[#C6CCD2] border-[1px] outline-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] h-[48px] px-[8px] w-[337px] text-[#808080]"
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
                  width="337px"
                  mainRef={genderRef}
                  subRef={genderIconRef}
                  setFunc={setOpenGender}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[20px] text-textBlackH font-[600]">
                  Branch
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Branch"
                  className="border-[#C6CCD2] border-[1px] outline-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] h-[48px] px-[8px] w-[337px] text-[#808080]"
                />
              </div>
            </div>
            <div className="bg-textWhite p-[73px_50px_70px_50px] text-[16px] text-[#808080] font-[600] border-[#C6CCD2] border-[1px] border-dashed h-[261px] w-[261px] ml-[57px] flex flex-col justify-center items-center">
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
          <div className="w-full flex gap-x-[62px]">
            <div className="w-[50%] flex flex-col gap-y-[24px]">
              <div className="flex items-center justify-between">
                <span className="text-[20px] text-textBlackH font-[600]">
                  Email
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="border-[#C6CCD2] border-[1px] outline-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] h-[48px] px-[8px] w-[275px] text-[#808080]"
                />
              </div>
              <div className="flex items-start justify-between">
                <span className="text-[20px] text-textBlackH font-[600]">
                  Description
                </span>{" "}
                <textarea
                  placeholder="Enter Description"
                  className="border-[#C6CCD2] border-[1px] outline-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] h-[133px] px-[8px] w-[275px] text-[#808080] resize-none"
                />
              </div>
              <div className="mt-[15px] flex gap-x-[16px]">
                <button className="w-[201px] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px]">
                  Save
                </button>
                <button className="w-[146px] p-[8px_16px] bg-textWhite text-blue rounded-[8px] text-[18px] font-[600] border-[2px] border-blue">
                  Preview
                </button>
              </div>
            </div>
            <div className="w-[50%] flex flex-col gap-y-[24px]">
              <div className="flex items-center justify-between">
                <span className="text-[20px] text-textBlackH font-[600]">
                  Address
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="border-[#C6CCD2] border-[1px] outline-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] h-[48px] px-[8px] w-[275px] text-[#808080]"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[20px] text-textBlackH font-[600]">
                  Password
                </span>{" "}
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="border-[#C6CCD2] border-[1px] outline-none rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] h-[48px] px-[8px] w-[275px] text-[#808080]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditStaff;
