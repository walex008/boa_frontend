import { Link, useNavigate, useParams } from "react-router-dom";
import StaffTable from "../extras/StaffTable";

const ZoneDetails = () => {
  const navigate = useNavigate();
  const { zone_id } = useParams();

  const data = [
    {
      id: "001",
      name: "Adeyinka Suliat",
      phone: "08012039882",
      email: "lorem@gmail.com",
    },
    {
      id: "002",
      name: "Adeyinka Suliat",
      phone: "08012039882",
      email: "lorem@gmail.com",
    },
    {
      id: "003",
      name: "Adeyinka Suliat",
      phone: "08012039882",
      email: "lorem@gmail.com",
    },
    {
      id: "004",
      name: "Adeyinka Suliat",
      phone: "08012039882",
      email: "lorem@gmail.com",
    },
  ];
  return (
    <>
      <div className="px-[30px]">
        <div className="flex gap-x-[10px] mr-[30px] mt-[13px] items-center justify-end">
          <Link
            to={"/dashboard"}
            className="text-textBlack text-[20px] font-[600]"
          >
            Dashboard
          </Link>
          <span>&gt;</span>
          <Link to={"/zones"} className="text-textBlack text-[20px] font-[600]">
            Zones
          </Link>
          <span>&gt;</span>
          <span className="text-textBlackH text-[20px] font-[600]">
            Details
          </span>
        </div>

        <div className="mt-[21px] flex items-center gap-x-[15px]">
          <img
            src="/images/arrowBack.png"
            alt=""
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <span className="text-[32px] text-textBlackH font-[600]">Zones</span>
        </div>

        <div className="shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] bg-textWhite w-full h-[239px] rounded-[16px] py-[16px] px-[25px] mt-[31px] relative">
          <div className="text-[24px] text-blue font-[600] pt-[15px]">
            ZONES
          </div>
          <div className="flex w-full gap-x-[70px]">
            <div className="w-[45%]">
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[18px] text-textGrey font-[600]">
                  Head Office
                </p>
                <p className="text-[18px] text-textBlackH font-[600]">
                  Head Office
                </p>
              </div>
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[18px] text-textGrey font-[600]">
                  Zone Nmae
                </p>
                <p className="text-[18px] text-textBlackH font-[600]">
                  Zone {zone_id}
                </p>
              </div>
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[18px] text-textGrey font-[600]">
                  Description
                </p>
                <p className="text-[18px] text-textBlackH font-[600]">
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="w-[45%]">
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[18px] text-textGrey font-[600]">
                  Open Date
                </p>
                <p className="text-[18px] text-textBlackH font-[600]">
                  2021-01-13
                </p>
              </div>
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[18px] text-textGrey font-[600]">Status</p>
                <p className="text-[18px] text-textBlackH font-[600] bg-blueLight rounded-[16px] p-[4px_10px]">
                  Active
                </p>
              </div>
              <small className="absolute right-[31px] bottom-[9.65px] text-[16px] text-[#808080] font-[400]">
                Created At : 2021-03-13 03:51:36
              </small>
            </div>
          </div>
        </div>

        <div className="w-full h-[516px] rounded-[16px] bg-textWhite p-[20px] mt-[39px]">
          {" "}
          <StaffTable
            linkText="Add Zone"
            linkTo="/add-zone"
            inputData={data}
            btnIcon="add"
            click={(event, staffId) => {
              console.info(event, staffId);
              navigate(`/staff-details/${staffId}`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ZoneDetails;
