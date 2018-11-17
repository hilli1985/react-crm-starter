import React, { Component } from "react";
import "../Styles/Analytics.css";
import NewClients from "./Badges/NewClients";
import EmailsSent from "./Badges/EmailsSent";
import OutstandingClients from "./Badges/OutstandingClients";
import HottestCountry from "./Badges/HottestCountry";

class Badges extends Component {
  constructor() {
    super();
    this.state = {
      months: [
        "dummy",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  }

  getNewClients() {
    let date = new Date().toISOString();
    let year = date.split("T")[0].split("-")[0];
    let month = date.split("T")[0].split("-")[1];
    let newClientsNum = this.props.clients.filter(
      client =>
        client.firstContact.split("T")[0].split("-")[1] === month &&
        client.firstContact.split("T")[0].split("-")[0] === year
    );
    let monthStr = this.state.months[parseInt(month)];
    //console.log(newClientsNum);
    return { newClientsNum: newClientsNum.length, monthStr: monthStr };
  }

  getEmailSent() {
    let emailSent = this.props.clients.filter(client => client.emailType);
    return emailSent.length;
  }

  getOutstandingClients() {
    let outstandingClients = this.props.clients.filter(client => !client.sold);
    return outstandingClients.length;
  }

  getHottestCountry() {
    let sold = this.props.clients.filter(client => client.sold); // get all sold
    let country = sold.map(client => client.country);
    let unique = country.filter((c, index) => country.indexOf(c) === index); // find all the country options
    let sortedByCountry = unique.map(country =>
      sold.filter(s => country === s.country)
    );
    let lengths = sortedByCountry.map(s => s.length);
    let hottest = sortedByCountry.filter(
      s => Math.max(...lengths) === s.length
    );
    if (hottest.length > 0) {
      console.log(hottest[0][0].country);
      return hottest[0][0].country;
    }
  }

  render() {
    let { newClientsNum, monthStr } = this.getNewClients();
    let emailSentNum = this.getEmailSent();
    let outstandingClientsNum = this.getOutstandingClients();
    let hottestCountry = this.getHottestCountry();
    return (
      <div class="parent-grid">
        <NewClients newClientsNum={newClientsNum} monthStr={monthStr} />
        <EmailsSent emailSentNum={emailSentNum} />
        <OutstandingClients outstandingClientsNum={outstandingClientsNum} />
        <HottestCountry hottestCountry={hottestCountry} />
      </div>
    );
  }
}

export default Badges;
