import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAppSelector } from "../../app/hooks";
import { mode } from "../../appSlices/generalSlice";

const BarChart = () => {
  const darkMode = useAppSelector(mode);
  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "#fff",
        },
      },
      y: {
        stacked: true,
        ticks: {
          callback: function (value: string | number) {
            if (value !== 0) {
              return `${value}k`;
            } else {
              return 0;
            }
          },
        },
        grid: {
          color: "#fff",
        },
      },
    },
  };

  const labels = [
    "Default",
    "Ayepe",
    "Branch Test",
    "Lagos Test",
    "Oshogbo Test",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Loan",
        data: [80, 80, 80, 80, 80],
        backgroundColor: "#66A1FF",
        barThickness: 50,
        borderRadius: 8,
      },
      {
        label: "Repayment",
        data: [58, 38, 22, 30, 45],
        backgroundColor: "#F5F9FF",
        barThickness: 50,
        borderRadius: 8,
      },
    ],
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="w-full h-full px-[25px]">
      <div
        className={`h-fit w-full ${
          darkMode === "true" ? "bg-bgSemiBlack" : "bg-textWhite"
        } rounded-[16px] p-[23px] mt-[49px]`}
      >
        <div className="flex w-full items-center gap-x-[121px] mb-[43px]">
          <div
            className={`text-[0.9375rem] md:text-[1.5rem] ${
              darkMode === "true" ? "text-textWhite" : "text-textBlackH"
            } font-[600]`}
          >
            Loan Overview
          </div>{" "}
          <div className="flex gap-x-[30px] items-center"></div>
        </div>
        <div className="flex flex-col md:flex-row w-full md:justify-between">
          <div className="w-full md:w-[70%]">
            <Bar options={options} data={data} />
          </div>
          <div className="w-full  mt-[25px] md:mt-0 md:w-fit md:ml-[39px] flex flex-row md:flex-col justify-between md:justify-normal gap-y-[18px]">
            <div className="w-[80px] md:w-[142px] h-[44px] md:h-[86px] p-[2px_0px_4.626px_0px] md:p-[13px_0px_11px_0px] rounded-[8px] bg-blueLight shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] flex flex-col  items-center justify-center">
              <p className="text-[0.5rem] md:text-[1rem] text-textBlack, font-[600]">
                Today
              </p>
              <p className="text-[0.75rem] md:text-[1.5rem] text-textBlackH font-[400]">
                0.00
              </p>
              <div className="flex items-center">
                <img
                  src="/images/fall.png"
                  alt=""
                  className="h-[10px] md:h-[16px] w-[10px] md:w-[16px]"
                />{" "}
                <span className="text-[0.375rem] md:text-[0.875rem] text-red font-[400]">
                  34%
                </span>
              </div>
            </div>
            <div className="w-[80px] md:w-[142px] h-[44px] md:h-[86px] p-[2px_0px_4.626px_0px] md:p-[13px_0px_11px_0px] rounded-[8px] bg-[#FFE5EC] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] flex flex-col  items-center justify-center">
              <p className="text-[0.5rem] md:text-[1rem] text-textBlack, font-[600]">
                This Week
              </p>
              <p className="text-[0.75rem] md:text-[1.5rem] text-textBlackH font-[400]">
                0.00
              </p>
              <div className="flex items-center">
                <img
                  src="/images/fall.png"
                  alt=""
                  className="h-[10px] md:h-[16px] w-[10px] md:w-[16px]"
                />{" "}
                <span className="text-[0.375rem] md:text-[0.875rem] text-red font-[400]">
                  34%
                </span>
              </div>
            </div>
            <div className="w-[80px] md:w-[142px] h-[44px] md:h-[86px] p-[2px_0px_4.626px_0px] md:p-[13px_0px_11px_0px] rounded-[8px] bg-[#FFFAE5] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] flex flex-col  items-center justify-center">
              <p className="text-[0.5rem] md:text-[1rem] text-textBlack, font-[600]">
                This Month
              </p>
              <p className="text-[0.75rem] md:text-[1.5rem] text-textBlackH font-[400]">
                0.00
              </p>
              <div className="flex items-center">
                <img
                  src="/images/rise.png"
                  alt=""
                  className="h-[10px] md:h-[16px] w-[10px] md:w-[16px]"
                />
                <span className="text-[0.375rem] md:text-[0.875rem] text-green font-[400]">
                  34%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
