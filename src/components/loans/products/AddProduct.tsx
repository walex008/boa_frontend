
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { mode } from "../../../appSlices/generalSlice";


const AddProduct = () => {
  const navigate = useNavigate();
  const darkMode = useAppSelector(mode);



  return (
    <div className="pt-[13px] pr-[10px] pl-[10px] lg:pr-[49px] lg:pl-[39px] pb-[12rem]">
      <div className="flex items-center justify-end gap-x-[15px] text-[20px] text-[#808080] font-[600]">
        <Link to={"/dashboard"}>Dashboard</Link>
        <span>&gt;</span>
        <Link to={"/loans"}>Loans</Link>
        <span>&gt;</span>
        <span
          className={`${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          Add Product
        </span>
      </div>

      <div className="mt-[21px] flex items-center gap-x-[15px]">
        <img
          src={`/images/${
            darkMode === "true" ? "arrowWhite" : "arrowBack"
          }.png`}
          alt=""
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <span
          className={`text-[32px]  font-[600] ${
            darkMode === "true" ? "text-textWhite" : "text-textBlackH"
          }`}
        >
          Add Product
        </span>
      </div>
<form action="">
  <section className=" w-full p-[32px_21px] bg-[#fff] rounded-[16px]">
    <div className="w-full flex flex-col md:flex-row items-center gap-x-[43px]">
      <div className="w-[50%] flex items-center justify-between"><label >Name</label><input type="text" className=" h-[48px] rounded-[8px] border-[1px_solid
      
      _#c6ccd2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.4)] w-[18.2602rem] outline-none"/></div>
      <div className="w-[50%] flex items-center justify-between"><label >Short Name</label><input type="text" className=" h-[48px] rounded-[8px] border-[1px_solid
      
      _#c6ccd2] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.4)] p-[12px_8.164px] w-[18.2602rem] outline-none"/></div>
    </div>
  </section>
</form>
    </div>
  );
};

export default AddProduct;
