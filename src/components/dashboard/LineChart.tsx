import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

const LineChart = () => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        ticks: {
          callback: function (value: string | number) {
            return `${value}k`;
          },
        },
        grid: {
          color: "rgba(198, 204, 210, 1)",
        },
      },

      x: {
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    },
  };

  const labels = [
    ["Jul", "2022"],
    ["Aug", "2022"],
    ["Sept", "2022"],
    ["Oct", "2022"],
    ["Nov", "2022"],
    ["Dec", "2022"],
    ["Jan", "2023"],
    ["Feb", "2023"],
    ["Mar", "2023"],
    ["Apr", "2023"],
    ["May", "2023"],
    ["Jun", "2023"],
  ];

  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Expected",
        data: [48, 38, 52, 50, 54, 30, 56, 42, 54, 30, 42, 50],
        borderColor: "#ED0036",
        backgroundColor: (context) => {
          const bgColor = [
            "rgba(255, 229, 235, 0.61)",
            "rgba(255, 229, 235, 0.00)",
          ];

          if (!context.chart.chartArea) {
            return;
          }
          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(1, bgColor[1]);

          return gradientBg;
        },
        borderWidth: 3,
        pointHitRadius: 6,
        pointBackgroundColor: "#ED0036",
        fill: true,
      },
      {
        label: "Actual",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "#00B246",
        backgroundColor: "#00B246",
        borderWidth: 3,
        pointHitRadius: 6,
        pointBackgroundColor: "#00B246",
        fill: true,
      },
    ],
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  return (
    <div className="w-full h-full px-[25px]">
      <div className="h-fit w-full bg-textWhite rounded-[16px] p-[23px] mt-[49px]">
        <div className="flex w-full items-center gap-x-[121px] mb-[43px]">
          <div className="text-[24px] text-textBlackH font-[600]">
            Collection Statistics
          </div>{" "}
          <div className="flex gap-x-[30px] items-center">
            <div className="flex items-center">
              <img
                src="/images/redDot.png"
                alt=""
                className="mr-[16px] h-[16px] w-[16px]"
              />
              <span className="text-[20px] text-textBlack font-[400]">
                Expected
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="/images/greenDot.png"
                alt=""
                className="mr-[16px] h-[16px] w-[16px]"
              />
              <span className="text-[20px] text-textBlack font-[400]">
                Actual
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[82%]">
            <Line options={options} data={data} />
          </div>
          <div className="w-[18%] ml-[39px] flex flex-col gap-y-[18px]">
            <div className="w-[142px] min-h-[86px] p-[13px_0px_11px_0px] rounded-[8px] bg-blueLight shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] flex flex-col  items-center">
              <p className="text-[16px] text-textBlack, font-[600]">Today</p>
              <p className="text-[24px] text-textBlackH font-[400]">0.00</p>
              <div className="flex items-center">
                <img
                  src="/images/fall.png"
                  alt=""
                  className="h-[16px] w-[16px]"
                />{" "}
                <span className="text-[14px] text-red font-[400]">34%</span>
              </div>
            </div>
            <div className="w-[142px] min-h-[86px] p-[13px_0px_11px_0px] rounded-[8px] bg-[#FFE5EC] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] flex flex-col  items-center">
              <p className="text-[16px] text-textBlack, font-[600]">
                This Week
              </p>
              <p className="text-[24px] text-textBlackH font-[400]">0.00</p>
              <div className="flex items-center">
                <img
                  src="/images/fall.png"
                  alt=""
                  className="h-[16px] w-[16px]"
                />{" "}
                <span className="text-[14px] text-red font-[400]">34%</span>
              </div>
            </div>
            <div className="w-[142px] min-h-[86px] p-[13px_0px_11px_0px] rounded-[8px] bg-[#FFFAE5] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)] flex flex-col  items-center">
              <p className="text-[16px] text-textBlack, font-[600]">
                This Month
              </p>
              <p className="text-[24px] text-textBlackH font-[400]">0.00</p>
              <div className="flex items-center">
                <img
                  src="/images/rise.png"
                  alt=""
                  className="h-[16px] w-[16px]"
                />{" "}
                <span className="text-[14px] text-green font-[400]">34%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
