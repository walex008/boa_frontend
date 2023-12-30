import { useState, useRef } from "react";
import { useClickOut } from "../../utils/hooks/CheckOut";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setMode,
  mode,
  setShowMenu,
  setIsMenuBar,
} from "../../appSlices/generalSlice";
import { LightMode, Menu } from "@mui/icons-material";
import Search from "../extras/Search";
import MobileProfile from "../extras/MobileProfile";
const Header = () => {
  const [extendProfile, setExtendProfile] = useState<Boolean>(false);
  const [mobileProfile, setMobileProfile] = useState<Boolean>(false);
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
      className={`relative md:h-[100px]  flex items-center mb-[17px] z-[3] ${
        darkMode === "false" && "border-b-[0.2px] border-b-[#C6CCD2]"
      }`}
    >
      <div
        className={`py-[20px] px-[18px]  hidden lg:flex items-center justify-between w-full lg:w-[calc(100%-290px)] fixed top-0 ${
          darkMode === "true" ? "bg-textBlackH" : " bg-bgBWhite"
        }`}
      >
        <Search />

        <div className="flex items-center ">
          <div className="flex mr-[30px] gap-x-[19px]">
            <div>
              {darkMode === "false" ? (
                <img
                  src="/images/darkMode.png"
                  alt=""
                  className=" cursor-pointer min-w-[24px] min-h-[24px]"
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

      {/* Header middle screen breakpoint */}

      <div className="relative w-full flex lg:hidden items-center justify-between py-[20px] px-[18px]">
        <img
          src="/images/user.png"
          alt=""
          className="h-[32px] w-[32px] cursor-pointer"
          onClick={() => setMobileProfile(true)}
        />

        <MobileProfile
          mobileProfile={mobileProfile}
          setMobileProfile={setMobileProfile}
        />
        <img
          src={`/images/${darkMode === "true" ? "logo" : "logoDark"}.svg`}
          alt=""
          className="w-[51px] h-[41px]"
        />
        {darkMode === "true" ? (
          <Menu
            className=" text-textWhite cursor-pointer"
            onClick={() => dispatch(setShowMenu())}
            onMouseEnter={() => dispatch(setIsMenuBar(true))}
            onMouseLeave={() => dispatch(setIsMenuBar(false))}
          />
        ) : (
          <img
            src="/images/menuBar.png"
            alt=""
            className=" cursor-pointer"
            onClick={() => dispatch(setShowMenu())}
            onMouseEnter={() => dispatch(setIsMenuBar(true))}
            onMouseLeave={() => dispatch(setIsMenuBar(false))}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
