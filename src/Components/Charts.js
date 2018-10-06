import React, { Component } from 'react';
import '../Styles/Analytics.css';
import Chart1 from './Charts/Chart1'
import Chart2 from './Charts/Chart2'
import Chart3 from './Charts/Chart3'
import Chart4 from './Charts/Chart4'

class Charts extends Component {
    render() {
        return (
            <div className="parent-grid-2">
            <Chart1 className="chart-1"/>
        </div>)
        }
    }
export default Charts