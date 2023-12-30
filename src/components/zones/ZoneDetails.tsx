import { Link, useNavigate, useParams } from "react-router-dom";
import StaffTable from "../extras/StaffTable";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import AddHead from "../extras/AddHead";

const ZoneDetails = () => {
  const navigate = useNavigate();
  const { zone_id } = useParams();
  const darkMode = useAppSelector(mode);

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
        <AddHead prev="Zones" prevLink="zones" current="Details" />

        <div
          className={`shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)]  w-full h-[320px] md:h-[259px] rounded-[16px] py-[16px] px-[25px] mt-[20px] relative ${
            darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
          }`}
        >
          <div className="text-[0.9375rem] md:text-[1.5rem] text-blue font-[600] pt-[15px]">
            ZONES
          </div>

          <div className="flex flex-col md:flex-row w-full gap-x-[70px]">
            <div className="w-full md:w-[45%]">
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[0.8125rem] md:text-[1.125rem] text-textGrey font-[600]">
                  Head Office
                </p>
                <p
                  className={`text-[0.8125rem] md:text-[1.125rem]  font-[600] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  }`}
                >
                  Head Office
                </p>
              </div>
            </div>

            <div className="w-full md:w-[45%]">
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[0.8125rem] md:text-[1.125rem] text-textGrey font-[600]">
                  Open Date
                </p>
                <p
                  className={`text-[0.8125rem] md:text-[1.125rem]  font-[600] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  }`}
                >
                  2021-01-13
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-x-[70px]">
            <div className="w-full md:w-[45%]">
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[0.8125rem] md:text-[1.125rem] text-textGrey font-[600]">
                  Zone Name
                </p>
                <p
                  className={`text-[0.8125rem] md:text-[1.125rem]  font-[600] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  }`}
                >
                  Zone {zone_id}
                </p>
              </div>
            </div>

            <div className="w-full md:w-[45%]">
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[0.8125rem] md:text-[1.125rem] text-textGrey font-[600]">
                  Status
                </p>
                <p
                  className={`text-[0.8125rem] md:text-[1.125rem]  font-[600] ${
                    darkMode === "true"
                      ? "text-textWhite bg-[#66A1FF] p-[4px_10px] rounded-[16px]"
                      : "text-textBlackH"
                  }`}
                >
                  Active
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-x-[70px]">
            <div className="w-full md:w-[45%]">
              <div className="flex items-center justify-between p-[14px_2px_11px_1px] border-b-[1px] border-b-[#C6CCD2]">
                <p className="text-[0.8125rem] md:text-[1.125rem] text-textGrey font-[600]">
                  Description
                </p>
                <p
                  className={`text-[0.8125rem] md:text-[1.125rem]  font-[600] ${
                    darkMode === "true" ? "text-textWhite" : "text-textBlackH"
                  }`}
                >
                  Lorem Ipsum
                </p>
              </div>
            </div>

            <div className="w-full md:w-[45%]">
              <small className="absolute right-[31px] bottom-[9.65px] text-[0.5rem] md:text-[1rem] text-[#808080] font-[400]">
                Created At : 2021-03-13 03:51:36
              </small>
            </div>
          </div>
        </div>

        <div
          className={`w-full h-[516px] rounded-[16px] ${
            darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
          } p-[20px] mt-[39px]`}
        >
          {" "}
          <StaffTable
            linkText="Add Zone"
            linkTo="/zones/add-zone"
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
