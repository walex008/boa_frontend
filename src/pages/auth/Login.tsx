import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[100vh] px-[15px] md:px-[48px] py-[24px] flex flex-col items-center justify-center bg-[url(/images/authBg.svg)] bg-no-repeat bg-cover bg-center">
      <div className="text-[2rem] md:text-[3rem] text-textBlackH font-[600] self-start">
        Logo
      </div>

      <form className="bg-textWhite rounded-[64px_0] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.12)] max-w-[540px] p-[31px_15px_44px_15px] md:p-[31px_40px_44px_41px] mt-[44px]">
        <div className=" text-center text-[1.5rem] md:text-[2.5rem] text-blue font-[400]">
          Sign in
        </div>
        <p className=" text-center text-[1rem] md:text-[1.25rem] text-textBlack font-[400]">
          The all in one ultimate website for your savings and loan.
        </p>

        <div className="mt-[33px] flex flex-col gap-y-[24px]">
          <input
            type="text"
            placeholder="Email Address"
            className="h-[56px] rounded-[16px] p-[18px_20px_18px_20px] border-[1px] border-blue bg-[#F5F9FF] outline-none text-[16px] text-textBlack font-[400]"
          />
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Password"
              className="h-[56px] rounded-[16px] p-[18px_20px_18px_20px] border-[1px] border-blue bg-[#F5F9FF] outline-none text-[16px] text-textBlack font-[400]"
            />
            <Link
              to={""}
              className=" self-end text-[0.875rem] md:text-[1rem] text-textBlack font-[400] mt-[2px]"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <button
          className="mt-[66px] bg-blue h-[64px] w-full rounded-[16px] text-[1rem] md:text-[1.25rem] text-textWhite font-[700]"
          onClick={() => navigate("/dashboard")}
        >
          SIGN IN
        </button>
        <span className=" text-[0.875rem] md:text-[1rem] text-textBlackH font-[400] flex items-center justify-center mt-[35px]">
          Don’t have an account?{" "}
          <Link to={"/signup"} className=" font-[700] text-blue ml-[5px]">
            SIGN UP
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
