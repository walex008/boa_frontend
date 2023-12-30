import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";

const AddHead = ({
  prev,
  current,
  prevLink,
}: {
  prev: string;
  prevLink: string;
  current: string;
}) => {
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-end gap-x-[15px] text-[0.625rem] md:text-[1.25rem] text-[#808080] font-[600]">
        <Link to={"/dashboard"}>Dashboard</Link>
        <span>&gt;</span>
        <Link to={`/${prevLink}`}>{prev}</Link>
        <span>&gt;</span>
        <span
          className={`${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          {current}
        </span>
      </div>

      <div className="mt-[21px] flex items-center gap-x-[15px]">
        <img
          src={`/images/${
            darkMode === "true" ? "arrowWhite" : "arrowBack"
          }.png`}
          alt=""
          onClick={() => navigate(-1)}
          className="cursor-pointer h-[16px] md:h-[36px] w-[16px] md:w-[36px]"
        />
        <span
          className={` text-[1rem] md:text-[2.5rem]  font-[600] ${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          {current}
        </span>
      </div>
    </>
  );
};

export default AddHead;
