import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputSelect } from "../extras/InputSelect";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { useAddZoneMutation } from "../../appSlices/apiSlice";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

const AddZone = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [opening_date, setOpening_Date] = useState<Dayjs | null>(
    dayjs("2023-08-17")
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
    <>
      <form className="pt-[13px] pr-[49px] pl-[39px]" onSubmit={handleAddZone}>
        <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
          <Link to={"/dashboard"}>Dashboard</Link>
          <span>&gt;</span>
          <Link to={"/zones"}>Zones</Link>
          <span>&gt;</span>
          <span
            className={`${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            }`}
          >
            Add Zone
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
            Add Zone
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
            <input
              type="text"
              placeholder="Enter Name"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">
              Address
            </span>{" "}
            <input
              type="text"
              placeholder="Enter Address"
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] outline-none"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-textBlackH font-[600]">Date</span>{" "}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  sx={{
                    width: "503px",
                    borderRadius: "8px",
                  }}
                  value={opening_date}
                  onChange={(newDate) => setOpening_Date(newDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
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
              cList={["active", "inactive"]}
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
              required
              className="w-[503px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-textWhite border-[1px] border-[#C6CCD2] rounded-[8px] p-[15px_21px_14px_21px] text-[18px] text-textBlackH font-[600] h-[181px] resize-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button
          className="mb-[66px] mt-[26px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] p-[8px_16px] w-[201px] "
          disabled={isLoading}
        >
          Save
        </button>
      </form>
    </>
  );
};

export default AddZone;
