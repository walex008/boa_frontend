import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { InputSelect } from "../extras/Fields";

const AddCollateral = () => {
  const navigate = useNavigate();
  // const [name, setValue] = useState<string | null>(null);
  // const [file, setFile] = useState<string | null>(null);

  const [type, setType] = useState<string | null>(null);
  const [openType, setOpenType] = useState<Boolean>(false);

  const typeRef = useRef<HTMLUListElement>(null);
  const typeIconRef = useRef<HTMLImageElement>(null);

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
            Add File
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
            Add File
          </span>
        </div>

        <div className="bg-textWhite rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] w-full p-[44px_159px_19px_35px] flex flex-col gap-y-[24px] mt-[33px]">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">Type</span>{" "}
            <InputSelect
              pOnclick={() => setOpenType(!openType)}
              cOnclick={(list) => {
                setType(list);
                setOpenType(false);
              }}
              open={openType}
              value={type}
              fValue="Select Type"
              cList={["Type 1", "Type 2"]}
              width="503px"
              mainRef={typeRef}
              subRef={typeIconRef}
              setFunc={setOpenType}
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

export default AddCollateral;
