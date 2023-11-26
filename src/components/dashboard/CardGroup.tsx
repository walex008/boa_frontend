import Card, { AddWidget } from "./Card";

const CardGroup = () => {
  return (
    <div className="w-full md:h-[190px] px-[25px] mt-[16px] grid grid-cols-2 md:flex gap-y-[24px] md:gap-y-0 gap-x-[16px] md:gap-x-[32px] flex-wrap md:flex-nowrap md:overflow-x-auto md:overflow-y-hidden scrollbar scrollbar-thumb-red scrollbar-h-[6px] scrollbar-track-redLight scrollbar-rounded-[20px]">
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

    </div>
  );
};

export default CardGroup;
