import { useState, useRef } from "react";
import { useClickOut } from "../../utils/hooks/CheckOut";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setMode, mode } from "../../appSlices/generalSlice";
import { LightMode } from "@mui/icons-material";

const Header = () => {
  const [extendProfile, setExtendProfile] = useState<Boolean>(false);
  const extendProfileRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(mode);

  useClickOut({
    onState: extendProfile,
    mainRef: extendProfileRef,
    subRef: dropRef,
    setFunc: setExtendProfile,
  });

  return (
    <div
      className={`relative h-[100px]  flex items-center mb-[17px] z-[3] ${
        darkMode === "false" && "border-b-[0.2px] border-b-[#C6CCD2]"
      }`}
    >
      <div
        className={`py-[20px] px-[18px] flex items-center justify-between w-[calc(100%-290px)] fixed top-0 ${
          darkMode === "true" ? "bg-textBlackH" : " bg-bgBWhite"
        }`}
      >
        <div
          className={`w-[338px] p-[5px_10px_5px_18px]  shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)] flex items-center rounded-[16px] self-end ${
            darkMode === "true" ? "bg-bgBlack" : "bg-textWhite"
          }`}
        >
          <img src="/images/search.png" alt="" />
          <input
            type="text"
            placeholder="Search"
            className={`w-full p-[5px] outline-none ${
              darkMode === "true" ? "bg-bgBlack" : "bg-textWhite"
            }`}
          />
        </div>

        <div className="flex items-center ">
          <div className="flex mr-[30px] gap-x-[19px]">
            <div>
              {darkMode === "false" ? (
                <img
                  src="/images/dark.png"
                  alt=""
                  className=" cursor-pointer"
                  onClick={() => {
                    dispatch(setMode());
                  }}
                />
              ) : (
                <LightMode
                  sx={{
                    color: "#fff",
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    dispatch(setMode());
                  }}
                />
              )}
            </div>
            <img
              src={`/images/${
                darkMode === "true" ? "notificationWhite" : "notification"
              }.png`}
              alt=""
              className=" cursor-pointer"
            />
            <img
              src={`/images/${
                darkMode === "true" ? "settingsWhite" : "settings"
              }.png`}
              alt=""
              className=" cursor-pointer"
            />
          </div>
          <div className="h-[46px] flex items-center pr-0 relative ">
            <img src="/images/user.png" alt="" className="h-[48px] w-[48px]" />{" "}
            <p
              className={`ml-[8px] font-[600] text-[16px] ${
                darkMode === "true" ? "text-textWhite" : "text-textBlack"
              }`}
            >
              Adeyinka Suliat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
