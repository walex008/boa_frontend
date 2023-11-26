type CardType = {
  img: string;
  color: "green" | "orange" | "red" | "blue";
  textUp: string;
  textMiddle: string;
  textBottom: string;
};
const Card = ({ img, color, textUp, textMiddle, textBottom }: CardType) => {
  return (
    <div
      className={`flex flex-col justify-center md:justify-normal w-full md:min-w-[236px] md:max-w-[236px] h-[161px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] py-[9px] px-[10px] md:px-[21px] ${
        color === "green"
          ? "border-l-green"
          : color === "orange"
          ? "border-l-orange"
          : "border-l-red"
      }
      }] border-l-[4px] ${
        color === "green"
          ? "bg-greenLight"
          : color === "orange"
          ? "bg-orangeLight"
          : "bg-redLight"
      } rounded-[16px]`}
    >
      <img src={img} alt="" className=" h-[32px] md:h-[54px] w-[32px] md:w-[54px] mb-[7px] md:mb-0"/>
      <p className="text-[0.9375rem] md:text-[1.25rem] font-[600] text-textBlack mb-[5px] md:mb-0">{textUp}</p>
      <div className="md:mt-[-10px] text-[0.625rem] md:text-[0.75rem] font-[400] text-textBlack mb-[8px] md:mb-0">
        {textMiddle}
      </div>
      <div className="text-[1.125rem] md:text-[2rem] font-[400] text-textBlackH mt-[8px]">
        {textBottom}
      </div>
    </div>
  );
};

export const AddWidget = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full md:min-w-[236px] md:max-w-[236px] h-[161px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] py-[9px] px-[21px] border-l-blue
          }] border-l-[4px] bg-blueLight rounded-[16px]`}
    >
      <img src="/images/plus.png" alt="" className=" h-[32px] md:h-[54px] w-[32px] md:w-[54px]" />
      <p className="text-[0.9375rem] md:text-[1.5rem] text-center font-[600] text-textBlack">Add New Widget</p>
    </div>
  );
};

export default Card;
