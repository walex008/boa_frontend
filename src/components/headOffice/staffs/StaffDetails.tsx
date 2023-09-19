import { Link, useNavigate, useLocation } from "react-router-dom";
import Layout from "../../layout/Layout";
import VCard from "../../extras/VCard";

const StaffDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Layout>
      <div className="pt-[13px] pr-[49px] pl-[39px]">
        <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
          <Link to={"/dashboard"}>Dashboard</Link>
          <span>&gt;</span>
          <Link to={"/head-office"}>Staff</Link>
          <span>&gt;</span>
          <span className="text-textBlackH">Adeyinka Suliat</span>
        </div>

        <div className="mt-[21px] flex items-center gap-x-[15px]">
          <img
            src="/images/arrowBack.png"
            alt=""
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <span className="text-[32px] text-textBlackH font-[600]">
            Adeyinka Suliat
          </span>
        </div>

        <div className=" h-[131px] w-full rounded-[16px] bg-textWhite shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] mt-[33px] p-[20px]">
          <div className="flex items-center gap-x-[16px]">
            <span className="text-[24px] text-blue font-[600]">
              VERIFICATION
            </span>
            <img src="/images/editBlue.png" alt="" />
          </div>
          <div className="w-full flex items-center gap-x-[67px]">
            <div className="w-[50%] flex items-center justify-between h-[48px] rounded-[8px] p-[11px_17px_9px_16px] bg-[#F6F7F8]">
              {" "}
              <span className="text-[18px] text-[#808080] font-[600]">
                Status
              </span>{" "}
              <span className="p-[4px_10px] bg-[#CCE0FF] rounded-[16px] text-[16px] text-textBlackH font-[600]">
                Active
              </span>
            </div>
            <div className="w-[50%] flex items-center justify-between h-[48px] rounded-[8px] p-[11px_17px_9px_16px] bg-[#F6F7F8]">
              {" "}
              <span className="text-[18px] text-[#808080] font-[600]">
                KYC Status
              </span>{" "}
              <span className="p-[4px_10px] bg-[#CCE0FF] rounded-[16px] text-[16px] text-textBlackH font-[600]">
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="bg-textWhite rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] p-[16px_25px] mt-[38px]">
          <div className="flex items-center gap-x-[16px]">
            <span className="text-[24px] text-blue font-[600]">PROFILE</span>
            <img
              className="cursor-pointer"
              src="/images/editBlue.png"
              alt=""
              onClick={() => navigate(`/edit-staff/${splitLocation[2]}`)}
            />
          </div>

          <div className="flex gap-x-[68px]">
            <div className="w-[50%]">
              <VCard name="Name" value="Adeyinka Suliat" />
              <VCard name="Gender" value="Male" />
              <VCard name="Number" value="07092838388" />
              <VCard name="Created at" value="2020-10-14 03:37:30" />
              <VCard name="Updated at" value="2020-10-14 03:37:30" />
            </div>
            <div className="w-[50%]">
              <VCard name="Open Date" value="2021-01-13" />
              <VCard name="Branch" value="Branch 1" />
              <VCard name="Zone" value="Zone 1" />
              <VCard name="Address" value="933 13th street, Glenview 1" />
            </div>
          </div>
        </div>
        <button className="mt-[55px] mb-[66px] bg-blue text-textWhite text-[18px] font-[600] rounded-[8px] p-[8px_16px]  h-[48px] flex items-center justify-center gap-x-[8px]">
          Change Status <img src="/images/dropDownWhite.png" alt="" />
        </button>
      </div>
    </Layout>
  );
};

export default StaffDetails;
