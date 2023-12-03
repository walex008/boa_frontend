import { useNavigate } from "react-router-dom";
import Table, { InputDataType } from "../../../extras/Table";
import { useGetAllBranchesQuery } from "../../../../appSlices/apiSlice";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useAppSelector } from "../../../../app/hooks";
import { mode } from "../../../../appSlices/generalSlice";

const Branches = () => {
  const { data: branches, isLoading, isError } = useGetAllBranchesQuery({});
  const [branchesData, setBranchesData] = useState<InputDataType[]>([]);
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();

  useEffect(() => {
    !isLoading && setBranchesData(branches?.data);
  }, [isLoading]);

  return (
    <div className="w-full  nt-[-3px]">
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
            linkText="Go to Branches"
            linkTo="/branches"
            inputData={branchesData}
            click={(event, zoneId, areaId, branchId) => {
              console.info(event, zoneId);
              navigate(`/branch-details/${zoneId}/${areaId}/${branchId}`);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Branches;
