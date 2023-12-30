import { Link, useNavigate } from "react-router-dom";
import Table, { InputDataType } from "../../components/extras/Table";
import { useGetAllBranchesQuery } from "../../appSlices/apiSlice";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";
import { Oval } from "react-loader-spinner";
import MainHead from "../extras/MainHead";

const AllBranches = () => {
  const { data: branches, isLoading, isError } = useGetAllBranchesQuery({});
  const [branchesData, setBranchesData] = useState<InputDataType[]>([]);
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();

  useEffect(() => {
    !isLoading && setBranchesData(branches?.data);
  }, [isLoading]);

  return (
    <div>
      <MainHead current="Branches" />
      <div className=" mt-[50px] px-[30px] pb-[50px]">
        <div
          className={`h-[38px] md:h-[62px] w-[5rem] md:w-fit p-[2px_22px_6.795px_17px] md:p-[18px_19px_19px_44px] flex flex-col md:flex-row items-center justify-center gap-x-[6px] rounded-[16px_16px_0px_0px] cursor-pointer ${
            darkMode === "true" ? " bg-bgSemiBlack" : "bg-textWhite"
          }`}
        >
          <div className="text-[0.75rem] md:text-[1.25rem] text-blue font-[600]">
            ALL
          </div>
          <div className="bg-redLight p-[2px_8px] md:p-[2px_18px] rounded-[15px] text-[0.5rem] md:text-[1.125rem] font-[600] text-textBlackH">
            {branchesData?.length}
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
                linkText="Add Branch"
                linkTo="/branches/add-branch"
                inputData={branchesData}
                btnIcon="add"
                click={(event, zoneId, areaId, branchId) => {
                  console.info(event, zoneId);
                  navigate(
                    `/branches/branch-details/${zoneId}/${areaId}/${branchId}`
                  );
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBranches;
