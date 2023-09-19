const Avatar = ({ name }: { name: string }) => {
  return (
    <>
      <div className=" text-blue text-[20px] font-[600]">{name}</div>

      <div className={`flex mt-[34px] items-center gap-x-[37px]`}>
        <img src="/images/user.svg" alt="" className="h-[152px] w-[152px]" />
        <div className="flex items-center gap-x-[16px]">
          <button className="p-[8px_16px] rounded-[8px] text-[18px] font-[600] text-textWhite bg-blue">
            Upload New
          </button>
          <button className="p-[8px_16px] rounded-[8px] text-[18px] font-[600] text-blue bg-textWhite border-blue border-[1px]">
            Delete Avatar
          </button>
        </div>
      </div>
    </>
  );
};

export default Avatar;
