import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';


class Chart1 extends Component {
    render() {
        const data = [
            {
              "AnswerRef": "one",
              "Text": "5 out of 50 throws",
              "Score": 0,
              "RespondentPercentage": 12,
              "Rank": 1
            },
            {
              "AnswerRef": "two",
              "Text": "25 out of 50 throws",
              "Score": 0,
              "RespondentPercentage": 32,
              "Rank": 2
            },
            {
              "AnswerRef": "three",
              "Text": "30 out of 50 throws",
              "Score": 1,
              "RespondentPercentage": 41,
              "Rank": 3
            }];
        return (
            <div>
            <br/><br/>
            <div className="badge-text">Top Employees</div>
            <LineChart className="chart-1" width={400} height={400} >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
            </div>)
        }
    }
    export default Chart1