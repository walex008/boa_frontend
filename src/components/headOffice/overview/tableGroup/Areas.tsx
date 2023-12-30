import { useNavigate } from "react-router-dom";
import Table, { InputDataType } from "../../../extras/Table";
import { useEffect, useState } from "react";
import { useGetAllAreasQuery } from "../../../../appSlices/apiSlice";
import { useAppSelector } from "../../../../app/hooks";
import { mode } from "../../../../appSlices/generalSlice";
import { Oval } from "react-loader-spinner";

const Areas = () => {
  const { data: areas, isLoading, isError } = useGetAllAreasQuery({});
  const [areasData, setAreasData] = useState<InputDataType[]>([]);
  const navigate = useNavigate();
  const darkMode = useAppSelector(mode);

  useEffect(() => {
    !isLoading && setAreasData(areas?.data);
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
            linkText="Go to Areas"
            linkTo="/areas"
            inputData={areasData}
            click={(event, zoneId, areaId) => {
              console.info(event, zoneId);
              navigate(`/areas/area-details/${zoneId}/${areaId}`);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Areas;
