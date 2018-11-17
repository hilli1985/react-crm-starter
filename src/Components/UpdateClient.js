import React, { Component } from "react";
import util from "../axiosUtil";

class UpdateClient extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      client: "", //clientName
      owner: "Owner",
      emailType: "Email Type",
      sold: "",
      clientsList: "",
      currentClient: {}
    };
  }

  componentDidMount = async () => {
    let clients = await util.getAllClients();
    this.setState({ clients: clients });
  };

  handleChange = event => {
    this.setState({ [event.target.getAttribute("prop")]: event.target.value });
  };

  updateClientAction = newClient => {
    let newClients = this.state.clients.map(client => {
      return { ...client };
    });
    let index = newClients.findIndex(client => client._id === newClient._id);
    newClients[index] = newClient;
    let update = {
      name: newClient.name,
      country: newClient.country,
      owner: newClient.owner,
      emailType: newClient.emailType,
      sold: newClient.sold
    };
    util.updateClientInDB(update, newClient._id);
    alert("Client was updated");
  };

  //btn-1
  transferClicked = event => {
    event.preventDefault();
    if (!this.state.client) {
      alert("Nothing to change");
      return;
    }
    if (this.state.owner === "Owner") {
      alert("Nothing to update");
      return;
    }
    if (this.state.owner === this.state.currentClient.owner) {
      alert("Nothing to update");
      return;
    }
    let newCurrentClient = { ...this.state.currentClient };
    newCurrentClient.owner = this.state.owner;
    this.updateClientAction(newCurrentClient);
  };

  //btn-2
  sendClicked = event => {
    event.preventDefault();
    if (!this.state.client) {
      alert("Nothing to change");
      return;
    }
    if (this.state.emailType === "Email Type") {
      alert("Nothing to update");
      return;
    }
    if (this.state.emailType === this.state.currentClient.emailType) {
      alert("Nothing to update");
      return;
    }
    let newCurrentClient = { ...this.state.currentClient };
    newCurrentClient.emailType = this.state.emailType;
    this.updateClientAction(newCurrentClient);
  };

  //btn-3
  declareClicked = event => {
    event.preventDefault();
    if (!this.state.client) {
      alert("Nothing to change");
      return;
    }
    if (this.state.currentClient.sold) {
      alert("Nothing to change");
      return;
    }
    let newCurrentClient = { ...this.state.currentClient };
    newCurrentClient.sold = true;
    this.updateClientAction(newCurrentClient);
  };

  getClient = async event => {
    let clientsList = this.getClientsList();
    let client = event.target.value;
    let clientDetails = await this.state.clients.filter(c => client === c.name);
    if (!clientDetails[0]) {
      this.setState({
        client: client,
        clientsList: clientsList
      });
      return;
    }
    this.setState({
      client: client,
      clientsList: clientsList,
      owner: clientDetails[0].owner,
      emailType: clientDetails[0].emailType,
      currentClient: clientDetails[0]
    });
  };

  getClientsList = () => {
    return (
      <datalist id="clients">
        {this.state.clients.map(c => (
          <option id={c._id} key={c._id} value={c.name}>
            {c.name}
          </option>
        ))}
      </datalist>
    );
  };

  getOwnersList = () => {
    let owner = this.state.clients.map(c => c.owner);
    let unique = owner.filter((c, index) => owner.indexOf(c) === index);
    unique.unshift("Owner");
    return (
      <select
        className="form-control-sm col-sm-1 form-control"
        value={this.state.owner}
        prop="owner"
        onChange={this.handleChange}
      >
        {unique.map(o => (
          <option>{o}</option>
        ))}
      </select>
    );
  };

  getEmailTypeList = () => {
    let emailTypes = ["Email Type", "A", "B", "C", "D"];
    return (
      <select
        className="form-control-sm col-sm-1 form-control"
        value={this.state.emailType}
        prop="emailType"
        onChange={this.handleChange}
      >
        {emailTypes.map(o => (
          <option>{o}</option>
        ))}
      </select>
    );
  };

  render() {
    return (
      <div className="action-form">
        <div className="action-headline">UPDATE</div>
        <form>
          <div class="form-row">
            <label class="col-sm-0 col-form-label">Client:</label>
            <input
              className="form-control-sm col-sm-2 form-control"
              type="text"
              prop="client"
              value={this.state.client}
              onChange={this.getClient}
              placeholder="Client Name"
              list="clients"
            />
            {this.state.clientsList}
          </div>
          <div class="form-row">
            <label class="col-sm-0 col-form-label">Transfer ownership to</label>
            {this.getOwnersList()}
            <input
              className="form-control-sm btn-yellow"
              type="submit"
              onClick={this.transferClicked}
              value="Transfer"
            />
          </div>
          <div class="form-row">
            <label class="col-sm-0 col-form-label">Send Email:</label>
            {this.getEmailTypeList()}
            <input
              className="form-control-sm btn-yellow"
              type="submit"
              onClick={this.sendClicked}
              value="Send"
            />
          </div>
          <div class="form-row">
            {/* <label class="col-sm-0 col-form-label"> Declare Sale!</label> */}
            <input
              className="form-control-sm btn-yellow"
              type="submit"
              onClick={this.declareClicked}
              value="Declare Sale!"
            />
          </div>
        </form>
        <hr />
      </div>
    );
  }
}

export default UpdateClient;
