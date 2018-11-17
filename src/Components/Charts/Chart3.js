import React, { Component } from "react";
import {
  Line,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  ResponsiveContainer
} from "recharts";

class Chart3 extends Component {
  constructor() {
    super();
    this.state = {
      months: [
        "dummy",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
  }
  render() {
    const data = this.props.salesSince30;
    const dataEdit = data.map(e => ({
      time: `${this.state.months[e[0].split("-")[1]]}-${e[0].split("-")[2]}`,
      sales: e[1]
    }));
    return (
      <div className="chart">
        <div className="chart-headline">Sales Since Last Month</div>
        <ResponsiveContainer width="95%" height={160}>
          <LineChart
            width={730}
            height={250}
            data={dataEdit}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              fill="none"
              dataKey="sales"
              stroke="#ff6e54"
              strokeWidth={4}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart3;
