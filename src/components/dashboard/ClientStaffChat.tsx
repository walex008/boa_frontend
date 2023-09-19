import RadialBarComp from "../extras/RadialBar";

const ClientStaffChat = () => {
  return (
    <div className="mt-[47px] px-[30px] flex w-full gap-x-[25px]">
      <div className="w-[50%] bg-textWhite rounded-[16px] h-[287px] p-[20px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between">
          <span className="text-[24px] text-textBlackH font-[600]">
            No. of Users
          </span>
          <img src="/images/popDots.png" alt="" />
        </div>
        <div className="w-full flex gap-x-[24px] mt-[25px] justify-center">
          <div className="h-[178px] p-[19px_46px_20px_42px] flex flex-col gap-y-[5px] rounded-[16px] bg-[#F5F9FF] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] items-center">
            <img src="/images/users.png" alt="" />
            <p className="text-[20px] text-textBlack font-[400] text-center">
              Total Staffs
            </p>
            <p className="text-[32px] text-textBlackH font-[400] text-center">
              130,000
            </p>
          </div>
          <div className="h-[178px] p-[19px_46px_20px_42px] flex flex-col gap-y-[5px] rounded-[16px] bg-[#F5F9FF] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] items-center">
            <img src="/images/users.png" alt="" />
            <p className="text-[20px] text-textBlack font-[400] text-center">
              Total Clients
            </p>
            <p className="text-[32px] text-textBlackH font-[400] text-center">
              130,000
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-textWhite rounded-[16px] h-[287px] p-[20px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08) relative ">
        <div className="text-[24px] text-textBlackH font-[600]">
          Clients by Gender
        </div>

        <RadialBarComp />
      </div>
    </div>
  );
};

export default ClientStaffChat;
