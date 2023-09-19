import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table, { InputDataType } from "../../components/extras/Table";
import { useGetAllZonesQuery } from "../../appSlices/apiSlice";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { Oval } from "react-loader-spinner";

const AllZones = () => {
  const { data: zones, isLoading, isError } = useGetAllZonesQuery({});
  const [zonesData, setZonesData] = useState<InputDataType[]>([]);
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();

  useEffect(() => {
    !isLoading && setZonesData(zones?.data);
  }, [isLoading]);

  return (
    <div>
      <>
        <div className="flex gap-x-[10px] mr-[30px] mt-[13px] items-center justify-end">
          <Link
            to={"/dashboard"}
            className={`text-[20px] font-[600] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textGrey"
            }`}
          >
            Dashboard
          </Link>
          <span
            className={`text-[20px] font-[600] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textGrey"
            }`}
          >
            &gt;
          </span>
          <span
            className={`text-[20px] font-[600] ${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            }`}
          >
            Zones
          </span>
        </div>

        <div className="flex gap-x-[16px] items-center ml-[30px] mt-[24px]">
          <span
            className={` text-[40px] font-[600] ${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            }`}
          >
            Zones
          </span>
          <span className="text-textGrey">|</span>
          <span className="text-textGrey text-[24px] font-[600]">
            Zones Management
          </span>
        </div>
      </>
      <div className=" mt-[50px] px-[30px] pb-[50px]">
        <div
          className={`h-[62px] w-fit p-[18px_19px_19px_44px] flex items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer ${
            darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
          }`}
        >
          <div className="text-[20px] text-blue font-[600]">ALL</div>
          <div className="bg-redLight p-[2px_18px] rounded-[15px] text-[18px] font-[600] text-textBlackH">
            {zonesData?.length}
          </div>
        </div>
        <div className="w-full mt-[-5px]">
          <div
            className={`w-full rounded-[16px] p-[20px] ${
              darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
            }`}
          >
            {isLoading && (
              <Oval
                height={40}
                width={40}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#22262B"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            )}
            {!isLoading && !isError && (
              <Table
                linkText="Add Zone"
                linkTo="/zones/add-zone"
                inputData={zonesData}
                btnIcon="add"
                click={(event, id) => {
                  console.info(event, id);
                  navigate(`/zones/zone-details/${id}`);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllZones;
