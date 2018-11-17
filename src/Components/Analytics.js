import React, { Component } from "react";
import Badges from "./Badges";
import Charts from "./Charts";
import util from "../axiosUtil";

class Analytics extends Component {
  constructor() {
    super();
    this.state = {
      clients: []
    };
  }

  componentDidMount = async () => {
    let clients = await util.getAllClients();
    //console.log("client:" + JSON.stringify(clients));
    this.setState({ clients: clients });
  };

  render() {
    if (this.state.clients.length === 0) {
      return <div />;
    }
    return (
      <div>
          <Badges clients={this.state.clients} />
          <Charts clients={this.state.clients} />
      </div>
    );
  }
}

export default Analytics;
