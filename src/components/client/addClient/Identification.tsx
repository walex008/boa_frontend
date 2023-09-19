import { useRef, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import Avatar from "./Avatar";
import { InputSelect } from "../../extras/InputSelect";

const Identification = () => {
  const darkMode = useAppSelector(mode);
  const [area, setArea] = useState<string | null>(null);
  const [openArea, setOpenArea] = useState<Boolean>(false);

  const areaRef = useRef<HTMLUListElement>(null);
  const areaIconRef = useRef<HTMLImageElement>(null);

  const [group, setGroup] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<Boolean>(false);

  const groupRef = useRef<HTMLUListElement>(null);
  const groupIconRef = useRef<HTMLImageElement>(null);

  const [zone, setZone] = useState<string | null>(null);
  const [openZone, setOpenZone] = useState<Boolean>(false);

  const zoneRef = useRef<HTMLUListElement>(null);
  const zoneIconRef = useRef<HTMLImageElement>(null);

  const [branch, setBranch] = useState<string | null>(null);
  const [openBranch, setOpenBranch] = useState<Boolean>(false);

  const branchRef = useRef<HTMLUListElement>(null);
  const branchIconRef = useRef<HTMLImageElement>(null);

  const [staff, setStaff] = useState<string | null>(null);
  const [openStaff, setOpenStaff] = useState<Boolean>(false);

  const staffRef = useRef<HTMLUListElement>(null);
  const staffIconRef = useRef<HTMLImageElement>(null);
  return (
    <div
      className={`w-full rounded-[16px]  p-[24px_48px] ${
        darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
      }`}
    >
      <Avatar name="ADDRESS" />
      <form className={`mt-[45px]`}>
        <div className={`flex gap-x-[36px]`}>
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Type
              </label>
              <InputSelect
                pOnclick={() => setOpenZone(!openZone)}
                cOnclick={(list) => {
                  setZone(list);
                  setOpenZone(false);
                }}
                open={openZone}
                value={zone}
                fValue="Select"
                cList={["Individual", "Group"]}
                width="100%"
                mainRef={zoneRef}
                subRef={zoneIconRef}
                setFunc={setOpenZone}
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
                ID Number
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[52px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] ${
                  darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
                }`}
              />
            </div>
          </div>
        </div>

        <div className={`flex flex-col gap-y-[8px]`}>
          <label
            className={`text-[18px] font-[600] mt-[24px] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
            }`}
          >
            Photo
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

export default Identification;
