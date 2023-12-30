import { useNavigate, useLocation } from "react-router-dom";
import Layout from "../../layout/Layout";
import VCard from "../../extras/VCard";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";
import AddHead from "../../extras/AddHead";

const StaffDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const darkMode = useAppSelector(mode);

  return (
    <Layout>
      <div className="pt-[13px] pr-[49px] pl-[39px]">
        <AddHead
          prev="Staff"
          prevLink="head-office"
          current="Adeyinka Suliat"
        />

        <div
          className={` w-full rounded-[16px] ${
            darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
          } shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] mt-[33px] p-[20px]`}
        >
          <div className="flex items-center gap-x-[5px] md:gap-x-[16px]">
            <span className="text-[0.9375rem] md:text-[1.5rem] text-blue font-[600]">
              VERIFICATION
            </span>
            <img
              src="/images/editBlue.png"
              alt=""
              className="h-[16px] md:h-[24px] w-[16px] md:w-[24px]"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between md:justify-normal gap-y-[20px] md:gap-x-[67px]">
            <div
              className={`w-full md:w-[50%] flex items-center justify-between h-[48px] rounded-[8px] p-[11px_17px_9px_16px] ${
                darkMode === "true" ? " bg-bgBlack" : "bg-[#F6F7F8]"
              } `}
            >
              {" "}
              <span className="text-[0.8125rem] md:text-[1.125rem] text-[#808080] font-[600]">
                Status
              </span>{" "}
              <span className="p-[4px_10px] bg-[#CCE0FF] rounded-[16px] text-[0.8125rem] md:text-[1.125rem] text-textBlackH font-[600]">
                Active
              </span>
            </div>
            <div
              className={`w-full md:w-[50%] flex items-center justify-between h-[48px] rounded-[8px] p-[11px_17px_9px_16px] ${
                darkMode === "true" ? " bg-bgBlack" : "bg-[#F6F7F8]"
              }`}
            >
              {" "}
              <span className="text-[0.8125rem] md:text-[1.125rem] text-[#808080] font-[600]">
                KYC Status
              </span>{" "}
              <span className="p-[4px_10px] bg-[#CCE0FF] rounded-[16px] text-[0.8125rem] md:text-[1.125rem] text-textBlackH font-[600]">
                Active
              </span>
            </div>
          </div>
        </div>

        <div
          className={`${
            darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
          } rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] p-[16px_25px] mt-[38px]`}
        >
          <div className="flex  items-center gap-x-[5px] md:gap-x-[16px]">
            <span className="text-[0.9375rem] md:text-[1.5rem] text-blue font-[600]">
              PROFILE
            </span>
            <img
              className="cursor-pointer h-[16px] md:h-[24px] w-[16px] md:w-[24px]"
              src="/images/editBlue.png"
              alt=""
              onClick={() => navigate(`/edit-staff/${splitLocation[2]}`)}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-x-[68px]">
            <div className="w-full md:w-[50%]">
              <VCard name="Name" value="Adeyinka Suliat" />
              <VCard name="Gender" value="Male" />
              <VCard name="Number" value="07092838388" />
              <VCard name="Created at" value="2020-10-14 03:37:30" />
              <VCard name="Updated at" value="2020-10-14 03:37:30" />
            </div>
            <div className="w-full md:w-[50%]">
              <VCard name="Open Date" value="2021-01-13" />
              <VCard name="Branch" value="Branch 1" />
              <VCard name="Zone" value="Zone 1" />
              <VCard name="Address" value="933 13th street, Glenview 1" />
            </div>
          </div>
        </div>
        <button className="mt-[55px] mb-[66px] bg-blue text-textWhite text-[0.75rem] md:text-[1.125rem] font-[600] rounded-[8px] p-[8px_16px]  h-[32px] md:h-[48px] flex items-center justify-center gap-x-[8px]">
          Change Status{" "}
          <img
            src="/images/dropDownWhite.png"
            alt=""
            className="h-[16px] md:h-[24px] w-[16px] md:w-[24px]"
          />
        </button>
      </div>
    </Layout>
  );
};

export default StaffDetails;
