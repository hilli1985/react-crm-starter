import React, { Component } from "react";
import "../Styles/Client.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCheck);

class Client extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    let clientModal = {
      id: this.props.data._id,
      name: this.props.data.name.split(" ")[0],
      surname: this.props.data.name.split(" ")[1],
      country: this.props.data.country
    };
    this.props.handleClick(clientModal);
  };

  render() {
    let clientDetails = this.props.data;
    let id = clientDetails._id;
    let name = clientDetails.name.split(" ")[0];
    let surname = clientDetails.name.split(" ")[1];
    if (clientDetails.name.split(" ").length > 2) {
      surname = `${clientDetails.name.split(" ")[1]} ${
        clientDetails.name.split(" ")[2]
      }`;
    }
    let country = clientDetails.country;
    let firstContact = clientDetails.firstContact.split("T")[0];
    firstContact = `${firstContact.split("-")[2]}-${
      firstContact.split("-")[1]
    }-${firstContact.split("-")[0]} `;
    let emailType = clientDetails.emailType;
    let sold = clientDetails.sold ? (
      <span>
        <FontAwesomeIcon icon="check" />
      </span>
    ) : (
      "-"
    );
    let owner = clientDetails.owner;
    return (
      <div onClick={this.handleClick}>
        <div key={id} id={id} className="wrapper">
          <div className="box">{name}</div>
          <div className="box">{surname}</div>
          <div className="box">{country}</div>
          <div className="box">{firstContact}</div>
          <div className="box">{emailType}</div>
          <div className="box">{sold}</div>
          <div className="box">{owner}</div>
        </div>
        <hr className="hr" />
      </div>
    );
  }
}

export default Client;
