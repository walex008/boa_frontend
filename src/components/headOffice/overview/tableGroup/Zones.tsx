import { useNavigate } from "react-router-dom";
import Table, { InputDataType } from "../../../extras/Table";
import { useGetAllZonesQuery } from "../../../../appSlices/apiSlice";
import { useAppSelector } from "../../../../app/hooks";
import { mode } from "../../../../appSlices/generalSlice";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

const Zones = () => {
  const { data: zones, isLoading, isError } = useGetAllZonesQuery({});
  const [zonesData, setZonesData] = useState<InputDataType[]>([]);
  const navigate = useNavigate();
  const darkMode = useAppSelector(mode);

  useEffect(() => {
    if (!isLoading) {
      setZonesData(zones?.data);
    }
  }, [isLoading]);

  return (
    <div className="w-full  mt-[-3px]">
      <div
        className={`w-full rounded-[16px]  p-[20px] ${
          darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
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
            linkText="Go to Zones"
            linkTo="/zones"
            inputData={zonesData}
            click={(event, zoneId) => {
              console.info(event, zoneId);
              navigate(`/zones/zone-details/${zoneId}`);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Zones;
