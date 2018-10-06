import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';

class Analytics extends Component {
    render() {
        return (<div>
            <div><Badges clients={this.props.clients}/></div>
            <div><Charts clients={this.props.clients}/></div>
            </div>)
        }
    }
export default Analytics