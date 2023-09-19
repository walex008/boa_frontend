import Card, { AddWidget } from "./Card";

const CardGroup = () => {
  return (
    <div className="w-[100%-300px] h-[190px] ml-[25px] pr-[25px] mt-[16px] flex gap-x-[32px] overflow-x-auto scrollbar scrollbar-thumb-red scrollbar-h-[6px] scrollbar-track-redLight scrollbar-rounded-[20px]">
      <Card
        img="/images/moneyBagGreen.png"
        color="green"
        textUp="Loan Disbursed"
        textMiddle="Updated 1 min ago"
        textBottom="5,562,405"
      />
      <Card
        img="/images/moneyBagOrange.png"
        color="orange"
        textUp="Total Repayment"
        textMiddle="Updated 1 min ago"
        textBottom="1,562,405"
      />
      <Card
        img="/images/moneyBagRed.png"
        color="red"
        textUp="Total Outstanding"
        textMiddle="Updated 1 min ago"
        textBottom="4,562,405"
      />
      <AddWidget />
      <AddWidget />
    </div>
  );
};

export default CardGroup;
