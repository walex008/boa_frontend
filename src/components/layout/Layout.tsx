import { ReactNode } from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";

type LayoutChild = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutChild) => {
  const darkMode = useAppSelector(mode);
  return (
    <div
      className={`w-full h-full flex ${
        darkMode === "true" ? "bg-textBlackH" : "bg-bgBWhite"
      }`}
    >
      {/* Left panel */}
      <div className="w-[290px] h-full bg-bgSemiBlack relative">
        {/* Logo */}
        <div className="relative w-full h-[70px]">
          <div
            className={`p-[19px_164px_9px_40px] fixed top-0 left-0 w-[290px] ${
              darkMode === "true"
                ? "bg-bgSemiBlack"
                : "bg-textWhite border-r-[1px] border-r-[#C6CCD2]"
            }`}
          >
            <img
              src={`/images/${darkMode === "true" ? "logo" : "logoDark"}.svg`}
              alt=""
            />
          </div>
        </div>
        {/* Menu container */}
        <SideNav />
      </div>
      {/* Right panel */}
      <div className="w-[calc(100%-290px)]">
        <Header />
        <div className="min-h-screen w-full pb-[5rem]">{children}</div>
        <div
          className={`flex items-center justify-between h-[96px] border-t-[0.2px] border-t-[#C6CCD2] fixed bottom-0 left-[290px] right-0  px-[38px] z-[2] ${
            darkMode === "true" ? "bg-bgSemiBlack" : "bg-bgBWhite"
          }`}
        >
          <span
            className={`text-[16px] font-[600] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH "
            }`}
          >
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-blue">Branch Operations Automation.</span> All
            rights reserved.
          </span>
          <span
            className={`text-[16px] font-[600] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlackH "
            }`}
          >
            Version 4.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout;
