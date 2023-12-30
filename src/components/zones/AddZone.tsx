import { useState, useRef } from "react";
import {
  DateInput,
  HeadOfficeTitle,
  Input,
  InputSelect,
  TextArea,
} from "../extras/Fields";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { useAddZoneMutation } from "../../appSlices/apiSlice";

import dayjs, { Dayjs } from "dayjs";
import AddHead from "../extras/AddHead";

const AddZone = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [opening_date, setOpening_Date] = useState<Dayjs | null>(
    dayjs(new Date())
  );
  const [description, setDescription] = useState<string | null>(null);
  const [openStatus, setOpenStatus] = useState<Boolean>(false);
  const statusRef = useRef<HTMLUListElement>(null);
  const statusIconRef = useRef<HTMLImageElement>(null);
  const darkMode = useAppSelector(mode);
  const [addZone, { isLoading, error }] = useAddZoneMutation();

  const handleAddZone = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newZone = {
      head_office_id: 1,
      name,
      address,
      opening_date,
      status,
      description,
      is_system: 0,
      created_by: "1",
    };

    try {
      const response = await addZone(newZone).unwrap();
      console.log(response);
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-[13px] pr-[49px] pl-[39px]">
      <AddHead prev="Zones" prevLink="zones" current="Add Zone" />
      <form onSubmit={handleAddZone}>
        <div
          className={`${
            darkMode === "true" ? "bg-bgSemiBlack" : " bg-textWhite"
          } rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] w-full p-[33px_11px] md:p-[33px] xl:p-[44px_159px_19px_35px] flex flex-col gap-y-[24px] mt-[33px]`}
        >
          <HeadOfficeTitle />
          <Input
            label="Zone Name"
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

          <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
            <span
              className={`text-[0.625rem] md:text-[1.25rem] ${
                darkMode === "true" ? "text-textWhite" : "text-textBlackH"
              } font-[600]`}
            >
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
              cList={["active", "inactive"]}
              width="100%"
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
        <button
          className="mb-[66px] mt-[26px] bg-blue text-textWhite text-[0.75rem] md:text-[1.125rem] font-[600] rounded-[3px] md:rounded-[8px] p-[3px_6px] md:p-[8px_16px] w-[122px] md:w-[201px] "
          disabled={isLoading}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddZone;
