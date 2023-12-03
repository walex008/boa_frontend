import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputSelect } from "../extras/InputSelect";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { useAddZoneMutation } from "../../appSlices/apiSlice";

import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { useViewport } from "../extras/hooks/Viewport";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiThemes from "../extras/MuiThemes";


const AddZone = () => {
  const navigate = useNavigate();
  const darkTheme=MuiThemes()
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
  const {width}=useViewport()

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
        <div className="flex items-center justify-end gap-x-[15px] text-[0.625rem] md:text-[1.25rem] text-[#808080] font-[600]">
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
            className="cursor-pointer h-[16px] md:h-[36px] w-[16px] md:w-[36px]"
          />
          <span
            className={` text-[1rem] md:text-[2.5rem]  font-[600] ${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            }`}
          >
            Add Zone
          </span>
        </div>

        <div className={`${darkMode==="true"?"bg-bgSemiBlack":" bg-textWhite"} rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] w-full p-[33px_11px] md:p-[33px] xl:p-[44px_159px_19px_35px] flex flex-col gap-y-[24px] mt-[33px]`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <span className={`text-[0.625rem] md:text-[1.25rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[600]`}>
              Head Office
            </span>{" "}
            <div className={`w-full h-[32px] md:h-[52px] md:w-[75%] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] bg-[#CCE0FF] border-[1px] ${darkMode==="true"?"border-[#8d9985] text-textBlack":"border-[#C6CCD2] text-textBlackH "} rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[0.125rem] font-[600]`}>
              Head Office
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <span className={`text-[0.625rem] md:text-[1.25rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[600]`}>
              Zone Name
            </span>{" "}
            <input
              type="text"
              placeholder="Enter Name"
              required
              className={`w-full h-[32px] md:h-[52px] md:w-[75%] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${darkMode==="true"?"border-[#8d9985] text-textWhite bg-textFieldDark":"border-[#C6CCD2] text-textBlackH bg-textWhite"} rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <span className={`text-[0.625rem] md:text-[1.25rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[600]`}>
              Address
            </span>{" "}
            <input
              type="text"
              placeholder="Enter Address"
              required
              className={`w-full h-[32px] md:h-[52px] md:w-[75%] flex items-center shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] border-[1px] ${darkMode==="true"?"border-[#8d9985] text-textWhite bg-textFieldDark":"border-[#C6CCD2] text-textBlackH bg-textWhite"} rounded-[3px] md:rounded-[8px] p-[9px_7px] md:p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] font-[600] outline-none`}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
           <span className={`text-[0.625rem] md:text-[1.25rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[600]`}>Date</span>
           
           <ThemeProvider theme={darkTheme}>
      <CssBaseline />
                <DatePicker
                disablePast
                  sx={{
                    width: `${width<768?"100%":"75%"}`,
                    '& .MuiDateField-root':{
                      color: "#20b2aa"
                    },
                  
  '& .MuiOutlinedInput-root': {
    '& input':{
      fontSize:`${width<768?"0.625rem":"1.125rem"}`,
      color:`${width<768?"#cbcbcb":"#1a1a1a"}`,
     
    },
    '& fieldset': {
      borderRadius: `${width<768?"3px":"8px"}}`,
      borderColor: `${width<768?"#8d9985":"#C6CCD2"}`,
      backgroundColor:`${darkMode==="true"?"#434c56":"#fff"}`,
      height: `${width<768?"32px":"52px"}}`,
     
    },
    '&:hover fieldset': {
      borderColor: `${width<768?"#8d9985":"#C6CCD2"}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${width<768?"#8d9985":"#C6CCD2"}`,
    },
    
  },
 

                  }}
                  value={opening_date}
                  onChange={(newDate) => setOpening_Date(newDate)}
                  slotProps={{ textField: { size: width<768 ? 'small':`medium` } }}
              

                />
            
             </ThemeProvider>
       
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
            <span className={`text-[0.625rem] md:text-[1.25rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[600]`}>
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
              width= "100%"
              mainRef={statusRef}
              subRef={statusIconRef}
              setFunc={setOpenStatus}
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <span className={`text-[0.625rem] md:text-[1.25rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[600]`}>
              Description
            </span>{" "}
            <textarea
              placeholder="Enter Description"
              required
              className={`w-full md:w-[75%] border-[1px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04) rounded-[8px] p-[15px_21px_14px_21px] text-[0.625rem] md:text-[18px] ${darkMode==="true"?"border-[#8d9985] text-textWhite bg-textFieldDark":"border-[#C6CCD2] text-textBlackH bg-textWhite"} font-[600] h-[181px] resize-none outline-none`}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button
          className="mb-[66px] mt-[26px] bg-blue text-textWhite text-[0.75rem] md:text-[1.125rem] font-[600] rounded-[3px] md:rounded-[8px] p-[3px_6px] md:p-[8px_16px] w-[122px] md:w-[201px] "
          disabled={isLoading}
        >
          Save
        </button>
      </form>
    </>
  );
};

export default AddZone;
