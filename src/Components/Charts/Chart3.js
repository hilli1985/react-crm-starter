import React, { Component } from 'react';
import {Line, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend,LineChart, ResponsiveContainer} from 'recharts';


class Chart3 extends Component {
    render() {
        const data = this.props.salesSince30;
        const dataEdit = data.map((e) =>({
            time:e[0],
            sales :e[1]
        }));
        return (
            <ResponsiveContainer width='100%' height={250}> 
            <LineChart width={730} height={250} data={dataEdit}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#ff6e54" />
            </LineChart>
            </ResponsiveContainer>
            )
        }
    }
export default Chart3