import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";

const Files = () => {
  const darkMode = useAppSelector(mode);

  return (
    <div
      className={`w-full rounded-[16px]  p-[24px_48px] ${
        darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
      }`}
    >
      <div className=" text-blue text-[20px] font-[600]">FILES</div>
      <form className={`mt-[31px]`}>
        <div className={`flex flex-col gap-y-[8px]`}>
          <label
            className={`text-[18px] font-[600] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
            }`}
          >
            Name
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
            className={`text-[18px] font-[600] mt-[24px] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH"
            }`}
          >
            File
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
            className={`w-full py-3 pr-3 pl-[21px] border-[1px] border-[#C6CCD2] rounded-[8px] h-[160px] outline-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] text-[16px] text-[#808080] font-[600] resize-none ${
              darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
            }`}
          />
        </div>

        <button className="h-[48px] w-[207px] p-[8px_16px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] mt-[47px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Files;
