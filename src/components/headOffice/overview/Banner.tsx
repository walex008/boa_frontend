import { useGetHeadOfficeQuery } from "../../../appSlices/apiSlice";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";

const Banner = () => {
  const { data: headOffice, isLoading } = useGetHeadOfficeQuery({});
  const headOfficeInfo = headOffice?.data[0];
  const date = new Date(headOfficeInfo?.opening_date);
  const darkMode = useAppSelector(mode);
  const pad = (d: number) => {
    return d < 10 ? "0" + d.toString() : d.toString();
  };
  return (
    <div
      className={`shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)]  w-full h-[239px] rounded-[16px] py-[16] px-[25px] relative ${
        darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
      }`}
    >
      <div className="text-[24px] text-blue font-[600] pt-[15px]">
        HEAD OFFICE
      </div>
      <div className="flex w-full gap-x-[70px]">
        <div className="w-[45%]">
          <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
            <p className="text-[18px] text-textGrey font-[600]">Name</p>
            <p
              className={`text-[18px]  font-[600] ${
                darkMode === "true" ? "text-textWhite" : "text-textBlackH"
              }`}
            >
              {headOfficeInfo?.name}
            </p>
          </div>
          <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
            <p className="text-[18px] text-textGrey font-[600]">Address</p>
            <p
              className={`text-[18px]  font-[600] ${
                darkMode === "true" ? "text-textWhite" : "text-textBlackH"
              }`}
            >
              {headOfficeInfo?.address}
            </p>
          </div>
          <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
            <p className="text-[18px] text-textGrey font-[600]">Description</p>
            <p
              className={`text-[18px]  font-[600] ${
                darkMode === "true" ? "text-textWhite" : "text-textBlackH"
              }`}
            >
              {headOfficeInfo?.description}
            </p>
          </div>
        </div>
        <div className="w-[45%]">
          <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
            <p className="text-[18px] text-textGrey font-[600]">Open Date</p>
            <p
              className={`text-[18px]  font-[600] ${
                darkMode === "true" ? "text-textWhite" : "text-textBlackH"
              }`}
            >
              {isLoading ? "" : date.getFullYear()}-{pad(date.getMonth() + 1)}-
              {date.getDate()}
            </p>
          </div>
          <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
            <p className="text-[18px] text-textGrey font-[600]">Status</p>
            <p
              className={`text-[18px]  font-[600] ${
                darkMode === "true"
                  ? "text-textWhite bg-[#66A1FF] p-[4px_10px] rounded-[16px]"
                  : "text-textBlackH"
              }`}
            >
              {headOfficeInfo?.status}
            </p>
          </div>
          <small className="absolute right-[31px] bottom-[9.65px] text-[16px] text-[#808080] font-[400]">
            Created At : {headOfficeInfo?.opening_date}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Banner;
