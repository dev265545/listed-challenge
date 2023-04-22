import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week 1",
    Guest: 4000,
    User: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    Guest: 3000,
    User: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    Guest: 2000,
    User: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    Guest: 2780,
    User: 3908,
    amt: 2000,
  },

];
const RenderLineChart = () => {
  return (
    <LineChart width={1000} height={200} data={data}>
      <CartesianGrid strokeDasharray="0 0 " />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      
      <Line
        type="monotone"
        dataKey="User"
        stroke="#E9A0A0"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="Guest"
        stroke="#9BDD7C"
      />
    </LineChart>
  );
};

export default RenderLineChart;
