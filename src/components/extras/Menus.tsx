import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";

type NoDrop = {
  img: React.ReactElement;
  name: string;
  link?: string;
};
export type Child = {
  child: { name: string; link: string }[];
  state: string | null;
  pName: string;
};
interface Drop extends NoDrop {
  children: React.ReactElement;
  pClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const NoDropMenu = ({ img, name, link }: NoDrop) => {
  const darkMode = useAppSelector(mode);
  const navigate = useNavigate();
  return (
    <div
      className={`group flex items-center w-[218px] gap-x-[9px] p-[8px_40px_7px_14px] rounded-[6px] cursor-pointer hover:bg-blueLight `}
      onClick={() => navigate(link ? link : "")}
    >
      <span>{img}</span>{" "}
      <span
        className={` text-[16px]  group-hover:text-blue
${darkMode === "true" ? "text-textWhite" : "text-textBlack"}`}
      >
        {name}
      </span>
    </div>
  );
};

export const DropMenu = ({ img, name, link, children, pClick }: Drop) => {
  const darkMode = useAppSelector(mode);
  const location = useLocation();
  const currentStyle = " text-blue";
  const generaStyle =
    darkMode === "true"
      ? "text-textGreyWhite group-hover:text-blue"
      : "text-textBlack group-hover:text-blue";
  return (
    <>
      <div
        className={`group  w-[218px] p-[8px_0px_7px_14px]  rounded-[6px] cursor-pointer hover:bg-blueLight ${
          location.pathname.split("/")[1] === link ? "bg-blueLight" : ""
        }`}
        onClick={pClick}
      >
        <div className="flex items-center gap-x-[9px] ">
          <span>{img}</span>{" "}
          <div className="flex items-center justify-between w-full">
            <span
              className={` text-[16px]  ${
                location.pathname.split("/")[1] === link
                  ? currentStyle
                  : generaStyle
              }`}
            >
              {name}
            </span>
            <svg
              className={` h-[32px] w-[32px] ${
                location.pathname.split("/")[1] === link
                  ? "stroke-blue"
                  : "stroke-textGreyWhite group-hover:stroke-blue"
              }`}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33325 13.3334L15.9999 20L22.6666 13.3334"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export const MenuChild = ({ child, state, pName }: Child) => {
  const darkMode = useAppSelector(mode);
  const location = useLocation();
  return (
    <div
      className={`flex flex-col pl-[25px]  transition-max-height ease-in-out duration-200 overflow-hidden  ${
        state === pName ? "max-h-[300px]" : "max-h-0"
      } ${darkMode === "true" ? "text-textGreyWhite" : "text-textBlack"}`}
    >
      {child?.map((children, index) => {
        return (
          <Link
            key={children?.name}
            to={children.link ? children.link : ""}
            className={`text-[14px] font-[400] flex items-center gap-x-[16px] mt-[13.43px] ${
              darkMode === "true" ? "text-textGreyWhite" : "text-textBlack"
            }`}
          >
            <div
              className={`h-[8px] w-[8px] rounded-[50%] relative flex flex-col items-center ${
                location.pathname === children.link ? "bg-blue" : "bg-[#C6CCD2]"
              }`}
            >
              {child?.length !== index + 1 && (
                <div className="h-[30px] w-[2px] bg-[#C6CCD2] absolute top-[8px]"></div>
              )}
            </div>
            <span
              className={`${
                location.pathname === children.link && " text-blue"
              }`}
            >
              {" "}
              {children?.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};
