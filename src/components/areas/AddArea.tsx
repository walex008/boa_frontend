import { useState, useRef } from "react";
import {
  DateInput,
  HeadOfficeTitle,
  Input,
  InputSelect,
  TextArea,
} from "../extras/Fields";
import dayjs, { Dayjs } from "dayjs";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import AddHead from "../extras/AddHead";

const AddArea = () => {
  const [name, setName] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  const [status, setStatus] = useState<string | null>(null);
  const [openStatus, setOpenStatus] = useState<Boolean>(false);
  const [description, setDescription] = useState<string | null>(null);
  const [zone, setZone] = useState<string | null>(null);
  const [openZone, setOpenZone] = useState<Boolean>(false);
  const statusRef = useRef<HTMLUListElement>(null);
  const statusIconRef = useRef<HTMLImageElement>(null);
  const zoneRef = useRef<HTMLUListElement>(null);
  const zoneIconRef = useRef<HTMLImageElement>(null);
  const [opening_date, setOpening_Date] = useState<Dayjs | null>(
    dayjs(new Date())
  );
  const darkMode = useAppSelector(mode);
  return (
    <>
      <div className="pt-[13px] pr-[49px] pl-[39px]">
        <AddHead prev="Areas" prevLink="areas" current="Add Area" />
        <form>
          <div
            className={`${
              darkMode === "true" ? "bg-bgSemiBlack" : " bg-textWhite"
            } rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] w-full p-[33px_11px] md:p-[33px] xl:p-[44px_159px_19px_35px] flex flex-col gap-y-[24px] mt-[33px]`}
          >
            <HeadOfficeTitle />

            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <span
                className={`text-[0.625rem] md:text-[1.25rem] ${
                  darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                } font-[600]`}
              >
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

            <Input
              label="Area Name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              label="Address"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <DateInput
              label="Date"
              value={opening_date}
              onChange={(newDate) => setOpening_Date(newDate)}
            />

            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <span
                className={`text-[0.625rem] md:text-[1.25rem] ${
                  darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                } font-[600]`}
              >
                Status
              </span>{" "}
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

            <TextArea
              label="Description"
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="mb-[66px] mt-[26px] bg-blue text-textWhite text-[0.75rem] md:text-[1.125rem] font-[600] rounded-[3px] md:rounded-[8px] p-[3px_6px] md:p-[8px_16px] w-[122px] md:w-[201px] ">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddArea;
