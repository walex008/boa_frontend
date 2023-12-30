import { LightMode } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { mode, setMode } from "../../appSlices/generalSlice";
import { useClickOut } from "../../utils/hooks/CheckOut";
import { useRef } from "react";

const MobileProfile = ({
  mobileProfile,
  setMobileProfile,
}: {
  mobileProfile: Boolean;
  setMobileProfile: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const darkMode = useAppSelector(mode);
  const dispatch = useAppDispatch();
  const mobileProfileRef = useRef<HTMLDivElement>(null);
  const mobileDropRef = useRef<HTMLImageElement>(null);

  useClickOut({
    onState: mobileProfile,
    mainRef: mobileProfileRef,
    subRef: mobileDropRef,
    setFunc: setMobileProfile,
  });

  return (
    <div
      ref={mobileProfileRef}
      className={`${
        darkMode === "true"
          ? " bg-bgSemiBlack"
          : "bg-textWhite transition-opacity duration-700 ease-in-out"
      } ${
        mobileProfile ? "opacity-100" : "opacity-0"
      } absolute top-[4rem] w-[280px] h-[236px] p-[21px] rounded-[24px] border-r-[3px_solid_#99c0ff] border-b-[3px_solid_#99c0ff] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)]`}
    >
      <div className=" flex gap-x-[18px] items-center">
        <img src="/images/user.png" alt="" className=" h-[72px] w-[72px]" />
        <div>
          <p
            className={`${
              darkMode === "true" ? " text-textWhite" : "text-textBlack"
            } text-[0.9375rem]`}
          >
            Adeyinka Suliat
          </p>
          <p
            className={`${
              darkMode === "true" ? " text-textWhite" : "text-textBlack"
            } text-[1rem]`}
          >
            Zonal Manager
          </p>
        </div>
        <img
          ref={mobileDropRef}
          src={`/images/${
            darkMode === "true" ? "dropDownWhite" : "userDropdown"
          }.png`}
          alt=""
          className={`${
            mobileProfile ? "rotate-0" : "rotate-180"
          } absolute top-[21px] right-[21px] w-[24px] h-[24px] cursor-pointer transition-all duration-700 ease-in-out`}
          onClick={() => setMobileProfile(false)}
        />
      </div>
      <div className=" mt-[18px] flex flex-col">
        <div
          className={`flex items-center justify-between cursor-pointer p-[7px_8px] rounded-[8px] ${
            darkMode === "true" ? "hover:bg-bgBlack" : "hover:bg-blueLight"
          }`}
        >
          <span
            className={`${
              darkMode === "true" ? " text-textWhite" : "text-textBlack"
            } text-[0.875rem]`}
          >
            Notifications
          </span>
          <img
            src={`/images/${
              darkMode === "true" ? "notificationWhite" : "notification"
            }.png`}
            alt=""
          />
        </div>
        <div
          className={`flex items-center justify-between cursor-pointer p-[7px_8px] rounded-[8px] ${
            darkMode === "true" ? "hover:bg-bgBlack" : "hover:bg-blueLight"
          }`}
        >
          <span
            className={`${
              darkMode === "true" ? " text-textWhite" : "text-textBlack"
            } text-[0.875rem]`}
          >
            Settings
          </span>
          <img
            src={`/images/${
              darkMode === "true" ? "settingsWhite" : "settings"
            }.png`}
            alt=""
          />
        </div>
        <div
          className={`flex items-center justify-between cursor-pointer p-[7px_8px] rounded-[8px] ${
            darkMode === "true" ? "hover:bg-bgBlack" : "hover:bg-blueLight"
          }`}
          onClick={() => {
            mobileProfile && dispatch(setMode());
          }}
        >
          <span
            className={`${
              darkMode === "true" ? " text-textWhite" : "text-textBlack"
            } text-[0.875rem]`}
          >
            {darkMode === "true" ? "Light Mode" : "Dark Mode"}
          </span>
          <div>
            {darkMode === "false" ? (
              <img
                src="/images/darkMode.png"
                alt=""
                className=" cursor-pointer min-w-[24px] min-h-[24px]"
              />
            ) : (
              <LightMode
                sx={{
                  color: "#fff",
                  height: "25px",
                  width: "25px",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProfile;
