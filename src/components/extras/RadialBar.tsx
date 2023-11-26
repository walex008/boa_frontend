import { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Male",
    client: 40,
    pv: 30000,
    fill: "#FFD656",
  },
  {
    name: "Female",
    client: 60,
    pv: 100000,
    fill: "#02B247",
  },
];

const style = {
  top: "50%",
  right: "25px",
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default class RadialBarComp extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={500}
          innerRadius="30%"
          outerRadius="70%"
          data={data}
          startAngle={0}
          endAngle={270}
          style={{
            position: "absolute",
            left: "-50px",
            top: "35px",
            width:"100%",
          }}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="client"
          />
          <Legend
            iconSize={20}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
