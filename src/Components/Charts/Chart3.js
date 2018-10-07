import React, { Component } from 'react';
import {Line, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend,LineChart} from 'recharts';


class Chart3 extends Component {
    render() {
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290}
        ]
        return (<div>
            <div>
            <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#ff6e54" />
            </LineChart>
            </div></div>)
        }
    }
export default Chart3