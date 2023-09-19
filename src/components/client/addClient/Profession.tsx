import { useRef, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import { InputSelect } from "../../extras/InputSelect";
import Avatar from "./Avatar";

const Profession = () => {
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
      <Avatar name="PROFESSION/ BUSINESS" />
      <form className={`mt-[45px]`}>
        <div className={`flex gap-x-[36px]`}>
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Profession
              </label>
              <InputSelect
                pOnclick={() => setOpenArea(!openArea)}
                cOnclick={(list) => {
                  setArea(list);
                  setOpenArea(false);
                }}
                open={openArea}
                value={area}
                fValue="Select"
                cList={["Carpenter", "Tailor", "Hair Dresser", "Other"]}
                width="100%"
                mainRef={areaRef}
                subRef={areaIconRef}
                setFunc={setOpenArea}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Business Address
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
                Business Type
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
                Years in Business
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

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Passbook Number
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
                Business Name
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
                Educational Level
              </label>
              <InputSelect
                pOnclick={() => setOpenBranch(!openBranch)}
                cOnclick={(list) => {
                  setBranch(list);
                  setOpenBranch(false);
                }}
                open={openBranch}
                value={branch}
                fValue="Select"
                cList={["Primary", "Secondary", "Tertiary"]}
                width="100%"
                mainRef={branchRef}
                subRef={branchIconRef}
                setFunc={setOpenBranch}
              />
            </div>
          </div>
        </div>

        <button className="h-[48px] w-[207px] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] mt-[47px]">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profession;
