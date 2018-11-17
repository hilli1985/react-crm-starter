import React, { Component } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

class Chart4 extends Component {
  render() {
    const data = [
      { name: "Last Month", value: 52 },
      { name: "6-12 Months", value: 120 },
      { name: "> 12 Months", value: 283 }
    ];
    const COLORS = [`#795548`, `#34495e`, `#95a5a6`];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          fontSize = "15"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 455).toFixed(0)}`}
        </text>
      );
    };
    return (
      <div className="chart">
        <div className="chart-headline">
          Client Distribution
        </div>
        <ResponsiveContainer width="90%" height={160}>
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie
              dataKey="value"
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={75}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} key={entry.name} />
              ))}
            </Pie>
            <Legend
              verticalAlign="top"
              layout={"vertical"}
              verticalAlign="left"
              margin={{top: 20, right: 0, left: 0, bottom: 5}}
              wrapperStyle={{ left: 10, top: 20 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart4;
