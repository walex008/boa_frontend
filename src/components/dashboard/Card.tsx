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
      className={`min-w-[236px] h-[161px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] py-[9px] px-[21px] ${
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
      <img src={img} alt="" />
      <p className="text-[20px] font-[600] text-textBlack">{textUp}</p>
      <div className="mt-[-10px] text-[12px] font-[400] text-textBlack">
        {textMiddle}
      </div>
      <div className="text-[28px] font-[400] text-textBlackH mt-[8px]">
        {textBottom}
      </div>
    </div>
  );
};

export const AddWidget = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-w-[236px] h-[161px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] py-[9px] px-[21px] border-l-blue
          }] border-l-[4px] bg-blueLight rounded-[16px]`}
    >
      <img src="/images/plus.png" alt="" />
      <p className="text-[20px] font-[600] text-textBlack">Add New Widget</p>
    </div>
  );
};

export default Card;
