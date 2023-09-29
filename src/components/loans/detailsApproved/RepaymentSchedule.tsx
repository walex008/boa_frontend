const RepaymentSchedule = () => {
  const repaymentData = [
    "1",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "2",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "3",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "4",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "5",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "6",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "7",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "8",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "9",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
    "10",
    "2023-09-18",
    "23",
    "",
    "",
    "7,959",
    "92,041",
    "833",
    "0",
    "0",
    "8,792",
    "0",
    "8,792",
  ];

  return (
    <div className=" max-w-[40.5625rem] overflow-auto py-10">
      <div className="w-full grid grid-cols-[repeat(13,1fr)] grid-rows-[repeat(auto,1fr)] divide-x-2 divide-y-2 divide-[#99C0FF] border-b-[2px] border-b-[#99C0FF] border-r-[2px] border-r-[#99C0FF] rounded-[8px]">
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px] rounded-tl-[8px] border-l-[2px] border-l-[#99C0FF] border-t-[2px] border-t-[#99C0FF]">
          S/N
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Date
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          # Days
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Paid by
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Disburse
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Principal Due
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Principal Balance
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Interest Due
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Fees
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Penalties
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Total Due
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px]">
          Total Paid
        </div>
        <div className=" flex flex-col items-center justify-center bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] text-center px-[4px] rounded-tr-[8px]">
          Total Outstanding
        </div>

        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center"></div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center">
          2023- 09-18
        </div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center">
          23
        </div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center"></div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center">
          100,000
        </div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center"></div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center">
          100,000
        </div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center"></div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center">
          3,000
        </div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center"></div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center">
          3,000
        </div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center">
          3,000
        </div>
        <div className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center"></div>

        {repaymentData?.map((data, index) => (
          <div
            key={index}
            className=" bg-[#F5F9FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center"
          >
            {data}
          </div>
        ))}

        <div className=" col-span-2 flex items-center justify-center rounded-bl-[8px] bg-[#CCE0FF] text-[0.75rem] text-textBlackH font-[700] py-[10px]">
          Total
        </div>

        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          347
        </div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]"></div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          100,000
        </div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          7,959
        </div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]"></div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          833
        </div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          0
        </div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          0
        </div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          8,792
        </div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          0
        </div>
        <div className=" bg-[#CCE0FF] flex flex-col items-center justify-center text-[0.75rem] text-textBlack font-[400] text-center py-[10px]">
          8,792
        </div>
      </div>
    </div>
  );
};

export default RepaymentSchedule;
