import { useRef, useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import { InputSelect } from "../../extras/Fields";

const General = () => {
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

  const [client, setClient] = useState<string | null>(null);
  const [openClient, setOpenClient] = useState<Boolean>(false);

  const clientRef = useRef<HTMLUListElement>(null);
  const clientIconRef = useRef<HTMLImageElement>(null);

  const [loanOfficer, setLoanOfficer] = useState<string | null>(null);
  const [openLoanOfficer, setOpenLoanOfficer] = useState<Boolean>(false);

  const loanOfficerRef = useRef<HTMLUListElement>(null);
  const loanOfficerIconRef = useRef<HTMLImageElement>(null);

  const [loanProduct, setLoanProduct] = useState<string | null>(null);
  const [openLoanProduct, setOpenLoanProduct] = useState<Boolean>(false);

  const loanProductRef = useRef<HTMLUListElement>(null);
  const loanProductIconRef = useRef<HTMLImageElement>(null);

  return (
    <div
      className={`w-full rounded-[16px]  p-[24px_48px] ${
        darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
      }`}
    >
      <div className=" text-blue text-[20px] font-[600]">GENERAL</div>
      <form className={`mt-[31px]`}>
        <div className={`flex gap-x-[36px]`}>
          <div className={`w-[50%] flex flex-col gap-y-[24px]`}>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Head Office
              </label>
              <div
                className={`p-[14px_21px_14px_21px] bg-blueLight h-[48px] rounded-[8px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-textBlack font-[600]`}
              >
                Head Office, Lagos State
              </div>
            </div>
            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Area
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
                cList={["Area 1", "Area 2", "Area 3", "Area 4"]}
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
                Group
              </label>
              <InputSelect
                pOnclick={() => setOpenGroup(!openGroup)}
                cOnclick={(list) => {
                  setGroup(list);
                  setOpenGroup(false);
                }}
                open={openGroup}
                value={group}
                fValue="Select"
                cList={["Group 1", "Group 2", "Group 3", "Group 4"]}
                width="100%"
                mainRef={groupRef}
                subRef={groupIconRef}
                setFunc={setOpenGroup}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Loan Product
              </label>
              <InputSelect
                pOnclick={() => setOpenLoanProduct(!openLoanProduct)}
                cOnclick={(list) => {
                  setLoanProduct(list);
                  setOpenLoanProduct(false);
                }}
                open={openLoanProduct}
                value={loanProduct}
                fValue="Select"
                cList={[
                  "Loan Product 1",
                  "Loan Product 2",
                  "Loan Product 3",
                  "Loan Product 4",
                ]}
                width="100%"
                mainRef={loanProductRef}
                subRef={loanProductIconRef}
                setFunc={setOpenLoanProduct}
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
                Zone
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
                cList={["Zone 1", "Zone 2", "Zone 3", "Zone 4"]}
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
                Branch
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
                cList={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]}
                width="100%"
                mainRef={branchRef}
                subRef={branchIconRef}
                setFunc={setOpenBranch}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Client
              </label>
              <InputSelect
                pOnclick={() => setOpenClient(!openClient)}
                cOnclick={(list) => {
                  setClient(list);
                  setOpenClient(false);
                }}
                open={openClient}
                value={client}
                fValue="Select"
                cList={["Client 1", "Client 2", "Client 3", "Client 4"]}
                width="100%"
                mainRef={clientRef}
                subRef={clientIconRef}
                setFunc={setOpenClient}
              />
            </div>

            <div className={`flex flex-col gap-y-[8px]`}>
              <label
                className={`text-[18px] font-[600] ${
                  darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
                }`}
              >
                Loan Officer
              </label>
              <InputSelect
                pOnclick={() => setOpenLoanOfficer(!openLoanOfficer)}
                cOnclick={(list) => {
                  setLoanOfficer(list);
                  setOpenLoanOfficer(false);
                }}
                open={openLoanOfficer}
                value={loanOfficer}
                fValue="Select"
                cList={[
                  "Loan Officer 1",
                  "Loan Officer 2",
                  "Loan Officer 3",
                  "Loan Officer 4",
                ]}
                width="100%"
                mainRef={loanOfficerRef}
                subRef={loanOfficerIconRef}
                setFunc={setOpenLoanOfficer}
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

export default General;
