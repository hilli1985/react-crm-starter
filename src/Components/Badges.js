import React, { Component } from 'react';
import '../Styles/Analytics.css';
import NewClients from './Badges/NewClients'
import EmailsSent from './Badges/EmailsSent'
import OutstandingClients from './Badges/OutstandingClients'
import HottestCountry from './Badges/HottestCountry'

class Badges extends Component {
    
getNewClients (){
    let newClientsNum = this.props.clients.filter((client) => ((client.firstContact.split('T')[0].split('-')[1]==='09')
    &&(client.firstContact.split('T')[0].split('-')[0]==='2018'))
    );
    return (newClientsNum.length);
}

getEmailSent() {
    let emailSent = this.props.clients.filter((client) => (client.emailType));
    return emailSent.length;
}

getOutstandingClients() {
    let outstandingClients = this.props.clients.filter((client) => (!client.sold));
    return outstandingClients.length;
}

getHottestCountry() {
    let sold = this.props.clients.filter((client) => (client.sold));// get all sold
    let country = sold.map((client) => (client.country));
    let unique = country.filter((c,index) => country.indexOf(c)===index ); // find all the country options
    let sortedByCountry = unique.map(country => (sold.filter(s => (country===s.country))));
    let lengths = sortedByCountry.map (s => (s.length));
    let hottest = sortedByCountry.filter(s => (Math.max(...lengths)===s.length));
    if (hottest.length>0){
        console.log(hottest[0][0].country);
        return(hottest[0][0].country);
    }

}
render() {
    let newClientsNum = this.getNewClients();
    let emailSentNum = this.getEmailSent();
    let outstandingClientsNum = this.getOutstandingClients();
    let hottestCountry = this.getHottestCountry();
    return (
        <div class="parent-grid">
        <div class="box"><NewClients newClientsNum={newClientsNum}/></div>
        <div class="box"><EmailsSent emailSentNum={emailSentNum}/></div>
        <div class="box"> <OutstandingClients outstandingClientsNum={outstandingClientsNum}/></div>
        <div class="box"><HottestCountry hottestCountry={hottestCountry}/></div>
        </div>)
    }
    
}
export default Badges