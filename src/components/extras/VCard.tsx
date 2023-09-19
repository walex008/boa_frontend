type VCardType = {
  name: string;
  value: string;
};
const VCard = ({ name, value }: VCardType) => {
  return (
    <div className="w-full border-b-[1px] border-b-[#C6CCD2] flex items-center justify-between py-[11px]">
      <span className="text-[18px] text-[#808080] font-[600]">{name}</span>{" "}
      <span className="text-[18px] text-textBlackH font-[600]">{value}</span>
    </div>
  );
};

export default VCard;
