import { useRef, useState } from "react";
import { InputSelect } from "../../extras/InputSelect";
import { useClickOut } from "../../../utils/hooks/CheckOut";
import VCard from "../../extras/VCard";

function ClientProfile() {
  const [status, setStatus] = useState<string>("Pending");
  const [openStatus, setOpenStatus] = useState<Boolean>(false);
  const statusRef = useRef<HTMLUListElement>(null);
  const statusIconRef = useRef<HTMLImageElement>(null);
  const [openStatusNote, setOpenStatusNote] = useState<Boolean>(false);
  const statusBtnRef = useRef<HTMLDivElement>(null);
  const statusBodyRef = useRef<HTMLFormElement>(null);

  const [KYCstatus, setKYCStatus] = useState<string>("Pending");
  const [openKYCStatus, setOpenKYCStatus] = useState<Boolean>(false);
  const KYCstatusRef = useRef<HTMLUListElement>(null);
  const KYCstatusIconRef = useRef<HTMLImageElement>(null);
  const [openKYCNote, setOpenKYCNote] = useState<Boolean>(false);
  const KYCBtnRef = useRef<HTMLDivElement>(null);
  const KYCBodyRef = useRef<HTMLFormElement>(null);

  useClickOut({
    onState: openStatusNote,
    mainRef: statusBodyRef,
    subRef: statusBtnRef,
    setFunc: setOpenStatusNote,
  });

  useClickOut({
    onState: openKYCNote,
    mainRef: KYCBodyRef,
    subRef: KYCBtnRef,
    setFunc: setOpenKYCNote,
  });

  return (
    <>
      <div className=" w-full rounded-[11.5px] px-[21px] py-[11.45px] bg-textWhite shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)]">
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          VERIFICATION <img src="/images/editBlue.png" alt="" />
        </div>

        <div className="w-full mt-[9px] flex gap-x-[3.75rem]">
          <div className="w-[50%] flex justify-between items-center bg-[#f6f7f8] p-[9px] rounded-[5.727px] relative">
            <div className=" text-[1rem] text-textGrey">status</div>{" "}
            <div
              ref={statusBtnRef}
              onClick={() => setOpenStatusNote(!openStatusNote)}
              className="  p-[5.985px_11.969px] rounded-[5.985px] border-[1.496px] border-blue text-blue text-[0.7481rem] flex items-center gap-x-[5px] cursor-pointer"
            >
              Pending <img src="/images/dropDownBlue.png" alt="" />
            </div>
            <form
              ref={statusBodyRef}
              className={`absolute top-[80px] left-0 right-0 bg-textWhite rounded-[11.5px] transition-opacity duration-300 ease-in-out ${
                openStatusNote ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="  p-[15px] rounded-[5.727px]">
                <div className=" text-[1rem] font-[600] text-textGrey mb-[10px]">
                  Status
                </div>
                <div className=" w-full">
                  <InputSelect
                    pOnclick={() => setOpenStatus(!openStatus)}
                    cOnclick={(list) => {
                      setStatus(list);
                      setOpenStatus(false);
                    }}
                    width="100%"
                    open={openStatus}
                    value={status}
                    fValue="Select"
                    cList={[
                      "Pending",
                      "Active",
                      "Inactive",
                      "Closed",
                      "Deceased",
                    ]}
                    mainRef={statusRef}
                    subRef={statusIconRef}
                    setFunc={setOpenStatus}
                  />
                </div>

                <div className=" text-[1rem] font-[600] text-textGrey mt-[20px] mb-[10px]">
                  Notes
                </div>
                <textarea className=" w-full h-[150px] rounded-[11.5px] resize-none border-[#C6CCD2] border-[1px] p-[5px]" />
                <button className="mb-[10px] mt-[26px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] p-[8px_16px] w-[50%] ">
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="w-[50%] flex justify-between items-center bg-[#f6f7f8] p-[9px] rounded-[5.727px] relative">
            <div className=" text-[1rem] text-textGrey">status</div>{" "}
            <div
              ref={KYCBtnRef}
              onClick={() => setOpenKYCNote(!openKYCNote)}
              className="  p-[5.985px_11.969px] rounded-[5.985px] border-[1.496px] border-blue text-blue text-[0.7481rem] flex items-center gap-x-[5px] cursor-pointer"
            >
              Pending <img src="/images/dropDownBlue.png" alt="" />
            </div>
            <form
              ref={KYCBodyRef}
              className={`absolute top-[80px] left-0 right-0 bg-textWhite rounded-[11.5px] transition-opacity duration-300 ease-in-out ${
                openKYCNote ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="  p-[15px] rounded-[5.727px]">
                <div className=" text-[1rem] font-[600] text-textGrey mb-[10px]">
                  KYC Status
                </div>
                <div className=" w-full">
                  <InputSelect
                    pOnclick={() => setOpenKYCStatus(!openKYCStatus)}
                    cOnclick={(list) => {
                      setKYCStatus(list);
                      setOpenKYCStatus(false);
                    }}
                    width="100%"
                    open={openKYCStatus}
                    value={KYCstatus}
                    fValue="Select"
                    cList={[
                      "Pending",
                      "Active",
                      "Inactive",
                      "Closed",
                      "Deceased",
                    ]}
                    mainRef={KYCstatusRef}
                    subRef={KYCstatusIconRef}
                    setFunc={setOpenKYCStatus}
                  />
                </div>

                <div className=" text-[1rem] font-[600] text-textGrey mt-[20px] mb-[10px]">
                  Notes
                </div>
                <textarea className=" w-full h-[150px] rounded-[11.5px] resize-none border-[#C6CCD2] border-[1px] p-[5px] outline-none" />
                <button className="mb-[10px] mt-[26px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] p-[8px_16px] w-[50%] ">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className=" w-full rounded-[11.5px] px-[21px] py-[11.45px] bg-textWhite shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[8px]">
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          PERSONAL INFO <img src="/images/editBlue.png" alt="" />
        </div>

        <div className=" mt-[13.5px] w-full flex gap-x-[2.7rem]">
          <div className="w-[50%]">
            <div className=" w-[8.5rem] h-[5.25rem] bg-[#C6CCD2] rounded-[17.181px]"></div>
            <VCard name="Name" value="Adeyinka Suliat" />
            <VCard name="Occupation" value="Teacher" />
            <VCard name="Date of Birth" value="10-10-10" />
            <VCard name="Zip" value="100001" />
            <VCard name="Created By" value="Lorem Ipsum" />
          </div>
          <div className="w-[50%]">
            <VCard name="Mobile" value="090673872678" />
            <VCard name="Email" value="Adeyinka@gmail.com" />
            <VCard name="Gender" value="Female" />
            <VCard name="Marital Status" value="Maried" />
            <VCard name="Joined" value="10-10-10" />
            <VCard name="Education Level" value="Diploma" />
            <VCard name="Created At" value="10-12-2233" />
          </div>
        </div>
      </div>

      <div className=" w-full rounded-[11.5px] px-[21px] py-[11.45px] bg-textWhite shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[8px]">
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          GENERAL <img src="/images/editBlue.png" alt="" />
        </div>

        <div className=" mt-[13.5px] w-full flex gap-x-[2.7rem]">
          <div className="w-[50%]">
            <VCard name="Head Office" value="Head Office 1" />
            <VCard name="Area" value="Area 1" />
            <VCard name="Group" value="Group 1" />
          </div>
          <div className="w-[50%]">
            <VCard name="Zone" value="Zone 1" />
            <VCard name="Branch" value="Branch 1" />
            <VCard name="Staff" value="Adeyinka Suliat" />
          </div>
        </div>
      </div>

      <div className=" w-full rounded-[11.5px] px-[21px] py-[11.45px] bg-textWhite shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[8px]">
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          BUSINESS DETAILS <img src="/images/editBlue.png" alt="" />
        </div>

        <div className=" mt-[13.5px] w-full flex gap-x-[2.7rem]">
          <div className="w-[50%]">
            <VCard name="Passbook Number" value="103475" />
            <VCard name="Business Name" value="Area" />
            <VCard name="Years in Business" value="10 Years" />
          </div>
          <div className="w-[50%]">
            <VCard name="Business Type" value="Group" />
            <VCard name="Business Address" value="Ojodu Berger" />
          </div>
        </div>
      </div>

      <div className=" w-full rounded-[11.5px] px-[21px] py-[11.45px] bg-textWhite shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[8px]">
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          ADDRESS <img src="/images/editBlue.png" alt="" />
        </div>

        <div className=" mt-[13.5px] w-full flex gap-x-[2.7rem]">
          <div className="w-[50%]">
            <VCard name="Residential Address" value="108432" />
            <VCard name="Residential State" value="Area" />
          </div>
          <div className="w-[50%]">
            <VCard name="Residential Town" value="Group" />
            <VCard name="Permanent Address" value="Ojodu Berger" />
          </div>
        </div>
      </div>

      <div className=" w-full rounded-[11.5px] px-[21px] py-[11.45px] bg-textWhite shadow-[0px_0.71586px_5.72687px_0px_rgba(0,0,0,0.08)] mt-[8px]">
        <div className=" flex items-center  text-[1.125rem] text-blue font-[600] gap-x-[4px]">
          SIGNATURE <img src="/images/editBlue.png" alt="" />
        </div>

        <div className=" mt-[13.5px] w-full flex gap-x-[2.7rem]">
          <img
            src="/images/signature.png"
            alt=""
            className="h-[6rem] w-[10rem]"
          />
        </div>
      </div>
    </>
  );
}

export default ClientProfile;
