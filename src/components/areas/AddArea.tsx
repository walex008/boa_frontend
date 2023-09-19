import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputSelect } from "../extras/InputSelect";

const AddArea = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<string | null>(null);
  const [openStatus, setOpenStatus] = useState<Boolean>(false);
  const [zone, setZone] = useState<string | null>(null);
  const [openZone, setOpenZone] = useState<Boolean>(false);
  const statusRef = useRef<HTMLUListElement>(null);
  const statusIconRef = useRef<HTMLImageElement>(null);
  const zoneRef = useRef<HTMLUListElement>(null);
  const zoneIconRef = useRef<HTMLImageElement>(null);
  return (
    <>
      <div className="pt-[13px] pr-[49px] pl-[39px]">
        <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
          <Link to={"/dashboard"}>Dashboard</Link>
          <span>&gt;</span>
          <Link to={"/zones"}>Areas</Link>
          <span>&gt;</span>
          <span className="text-textBlackH">Add Area</span>
        </div>

        <div className="mt-[21px] flex items-center gap-x-[15px]">
          <img
            src="/images/arrowBack.png"
            alt=""
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <span className="text-[32px] text-textBlackH font-[600]">
            Add Area
          </span>
        </div>

        <div className="bg-textWhite rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] w-full p-[44px_159px_19px_35px] flex flex-col gap-y-[24px] mt-[33px]">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Head Office
            </span>{" "}
            <div className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-[#CCE0FF] border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600]">
              Head Office
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Zone Name
            </span>{" "}
            <InputSelect
              pOnclick={() => setOpenZone(!openZone)}
              cOnclick={(list) => {
                setZone(list);
                setOpenZone(false);
              }}
              open={openZone}
              value={zone}
              fValue="Select Zone"
              cList={["Zone 1", "Zone 2", "Zone 3", "Zone 4"]}
              width="503px"
              mainRef={zoneRef}
              subRef={zoneIconRef}
              setFunc={setOpenZone}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Area Name
            </span>{" "}
            <input
              type="text"
              placeholder="Enter Name"
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600]"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Address
            </span>{" "}
            <input
              type="text"
              placeholder="Enter Address"
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600]"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">Date</span>{" "}
            <input
              type="text"
              placeholder="2023-07-11"
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600]"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Status
            </span>
            <InputSelect
              pOnclick={() => setOpenStatus(!openStatus)}
              cOnclick={(list) => {
                setStatus(list);
                setOpenStatus(false);
              }}
              open={openStatus}
              value={status}
              fValue="Select one"
              cList={["Active", "Inactive"]}
              width="503px"
              mainRef={statusRef}
              subRef={statusIconRef}
              setFunc={setOpenStatus}
            />
          </div>

          <div className="flex items-start justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Description
            </span>{" "}
            <textarea
              placeholder="Enter Description"
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] h-[181px] resize-none"
            />
          </div>
        </div>
        <button className="mb-[66px] mt-[26px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] p-[8px_16px] w-[201px] ">
          Save
        </button>
      </div>
    </>
  );
};

export default AddArea;
