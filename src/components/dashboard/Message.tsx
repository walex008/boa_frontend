import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { msgId, setMessageId } from "../../appSlices/dasboardSlice";
import { mode } from "../../appSlices/generalSlice";

type MessageType = {
  id: number | string;
  title: string;
  preview: string;
  color: "blue" | "green" | "red";
  readMore: () => void;
};
const Message = ({ id, title, preview, color, readMore }: MessageType) => {
  const dispatch = useAppDispatch();
  const messageId = useAppSelector(msgId);
  const darkMode=useAppSelector(mode)
  return (
    <>
      <div
        className={` w-full rounded-[16px] border-[0.5px]  shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] px-[15px] py-[12px] flex items-center justify-between mt-[10px] ${
         darkMode==="true"?"bg-[#434c56]": color === "blue"
            ? "border-[#99C0FF] bg-textWhite"
            : color === "green"
            ? "border-[#99FFC1] bg-[#FAFFFC]"
            : "border-[#FF99B0] bg-[#FFF7F9]"
        }`}
      >
        <div className="flex items-center gap-x-[37px]">
          <div
            className={`min-h-[24px] min-w-[24px] max-h-[24px] max-w-[24px] md:min-h-[40px] md:min-w-[40px] md:max-h-[40px] md:max-w-[40px]  rounded-[50%] flex items-center justify-center ${
              color === "blue"
                ? "bg-blue"
                : color === "green"
                ? "bg-green"
                : "bg-red"
            }`}
          >
            <img
              src={`/images/${
                color === "blue"
                  ? "info"
                  : color === "green"
                  ? "good"
                  : "warning"
              }.png`}
              alt=""

              className=" h-[14.4px] w-[14.4px] md:h-[24px] md:w-[24px]"
            />
          </div>
          <div>
            <p className={`text-[0.75rem] md:text-[1.25rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[700]`}>{title}</p>
            <p className={`text-[0.625rem] md:text-[1rem] ${darkMode==="true"?"text-textGreyWhite":"text-textBlack"} font-[400]`}>
              {preview}{" "}
              <button
                className={`text-[0.625rem] md:text-[1rem] font-[600] ${
                  color === "blue"
                    ? "text-blue"
                    : color === "green"
                    ? "text-green"
                    : "text-red"
                }`}
                onClick={readMore}
              >
                Read More.
              </button>
            </p>
          </div>
        </div>
        <img
         src={`/images/${darkMode==="true"?"cancelWhite":"cancel"}.png`}
          alt=""
          className="self-start cursor-pointer"
          onClick={() => messageId?.includes(id) && dispatch(setMessageId(id))}
        />
      </div>

      {messageId?.includes(id) && (
        <div className={`w-full ${darkMode==="true"?"bg-bgSemiBlack":"bg-textWhite"} rounded-[8px] border-[2px] border-blue shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] px-[15px] pt-[12px] pb-[61px] mt-[15px] mb-[30px]`}>
          <div
            className="w-full h-[50px] flex items-start justify-end cursor-pointer"
            onClick={() =>
              messageId?.includes(id) && dispatch(setMessageId(id))
            }
          >
            <img src={`/images/${darkMode==="true"?"cancelWhite":"cancel"}.png`} alt="" />
          </div>
          <div>
            <p className={`text-[0.75rem] md:text-[1.25rem] ${darkMode==="true"?"text-textWhite":"text-textBlackH"} font-[700]`}>
              Did you Know
            </p>
            <p className={`text-[0.625rem] md:text-[1rem] ${darkMode==="true"?"text-textGreyWhite":"text-textBlack"} font-[400]`}>
              2023-07-08 20:03:17
            </p>
          </div>
          <div className="mt-[44px] flex flex-col gap-y-[20px]">
            <p className={`text-[0.625rem] md:text-[1rem] ${darkMode==="true"?"text-textGreyWhite":"text-textBlack"} font-[400]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum mollis, nunc eget efficitur congue, nunc orci
              sollicitudin magna, vitae maximus ex quam ut leo.
            </p>
            <p className={`text-[0.625rem] md:text-[1rem] ${darkMode==="true"?"text-textGreyWhite":"text-textBlack"} font-[400]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum mollis, nunc eget efficitur congue, nunc orci
              sollicitudin magna, vitae maximus ex quam ut leo.
            </p>
          </div>
          <button className="mt-[58px] md:w-[127px] h-[38px] p-[8px_16px] rounded-[8px] bg-blue text-textWhite text-[0.75rem] md:text-[18px] font-[400] flex items-center justify-center">
            Acknowledge
          </button>
        </div>
      )}
    </>
  );
};

export default Message;
