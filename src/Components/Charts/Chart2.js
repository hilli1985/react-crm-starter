import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

class Chart2 extends Component {
  constructor() {
    super();
    this.state = {
      select: "country"
    };
  }

  handleChange = event => {
    if (!event) {
      return;
    }
    let select = event.target.value;
    this.setState({ select: event.target.value });
  };

  getfilterByList = () => {
    let filterBy = {
      Country: "country",
      Email: "emailType",
      "Month (all time)": "firstContact",
      Owner: "owner"
    };
    return (
      <select
        value={this.state.emailType}
        prop="select"
        onChange={this.handleChange}
      >
        {Object.entries(filterBy).map(f => (
          <option value={f[1]}>{f[0]}</option>
        ))}
      </select>
    );
  };

  render() {
    let dataBySelect = this.props.dataBySelect;
    console.log("select" + this.state.select);
    console.log(dataBySelect[this.state.select]);
    if (Object.keys(dataBySelect).length === 0) {
      return <div />;
    }

    const data = dataBySelect[this.state.select].map((e, index) => ({
      Text: e[0].split(" ")[0],
      Sales: e[1],
      RespondentPercentage: e[1],
      Rank: index + 1
    }));
    const barSizeBySelect = {
      firstContact: 20,
      country: 30,
      emailType: 40,
      owner: 40
    };
    const barSize = barSizeBySelect[this.state.select];

    return (
      <div className="chart">
        <div className="chart-headline">
          Sales by <span>{this.getfilterByList()}</span>
        </div>
        <ResponsiveContainer width="95%" height={170}>
          <BarChart
            width={800}
            height={250}
            data={data}
            margin={{ top: 20, right: 0, left: 50, bottom: 25 }}
            layout="horizontal"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="category"
              dataKey="Text"
              fontFamily="sans-serif"
              tickSize
            />
            <YAxis type="number" dataKey="Sales" domain={[0, "dataMax"]} />
            <Tooltip />
            <Bar dataKey="Sales" barSize={barSize} fontFamily="sans-serif">
              {data.map((entry, index) => (
                <Cell fill="#955196" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart2;
