import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faChartLine);

class NewClients extends Component {
  render() {
    return (
      <div className="badge-box">
        <div className="sm-wrap">
          <div id="icon-1" className="outer-circle">
            <FontAwesomeIcon className="icon" icon="chart-line" />
          </div>
        </div>
        <div className="sm-wrap">
          <div className="badge-headline">{this.props.newClientsNum}</div>
          <div className="badge-text">New {this.props.monthStr} Clients</div>
        </div>
      </div>
    );
  }
}

export default NewClients;
