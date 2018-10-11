import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, ResponsiveContainer, Legend} from 'recharts';

class Chart1 extends Component {
    render() {
        let topEmployees = this.props.topEmployees;
        //console.log(topEmployees);
        if(!topEmployees){
            return (<div></div>);
        }
        const data = topEmployees.map((e,index) =>({
            Text: e.name.split(' ')[0], 
            Sales :e.sales,
            RespondentPercentage:e.sales,
            Rank:index+1})
        );
                return (<div><div className="chart-headline">Top Employees</div>
                    <ResponsiveContainer width='100%' height={250}>
                    <BarChart width={400} height={250} data={data}
                    margin={{top: 20, right: 0, left: 0, bottom: 25}} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="Sales" domain={[0, 'dataMax']}/>
                    <YAxis type="category" dataKey="Text" fontFamily="sans-serif" tickSize/>
                    <Tooltip />
                    <Bar 
                    dataKey="Sales" 
                    barSize ={20}
                    fontFamily="sans-serif">
                    {
                        data.map((entry, index) => (
                            <Cell fill='#003f5c' />
                        ))
                    }
                    </Bar>
                    </BarChart></ResponsiveContainer></div>)
                }
            }
            export default Chart1