import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label, Legend } from 'recharts'

class Chart4 extends Component {
    render() {
        const data = [{name: 'Last Month', value: 22}, {name: '6-12 Months', value: 131},
        {name: '> 12 Months', value: 302}];
        const COLORS = [`#795548`, `#34495e`, `#95a5a6` ];
        
        const RADIAN = Math.PI / 180;                    
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x  = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy  + radius * Math.sin(-midAngle * RADIAN);
            
            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };
        return (
            <div className="pie-chart-override">
            <div className="pie-chart-headline chart-headline">Client Distribution</div>
            <ResponsiveContainer width='100%' height={300}> 
            <PieChart  
            onMouseEnter={this.onPieEnter}>
            <Pie
            dataKey="value" 
            data={data} 
            labelLine={true}
            label={true}
            outerRadius={80} 
            fill="#8884d8"
            >
            {
                data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} 
                key={entry.name}/>)
            }
            </Pie>
            <Legend verticalAlign="top" layout={'vertical'} verticalAlign="left" 
            // margin={{top: 20, right: 30, left: 20, bottom: 5}}
            wrapperStyle={{ right: 80, top:20 }}/>
            </PieChart>
            </ResponsiveContainer>
            </div>
            
           )
            
        }}
        export default Chart4;