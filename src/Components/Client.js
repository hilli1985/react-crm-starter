import React, { Component } from 'react';
import '../Styles/Client.css';

class Client extends Component {
    constructor() {
        super()
        this.state = { 
            
            
        }
    }

    handleClick = () =>{
        let clientModal = {
            id :  this.props.data._id,
            name : this.props.data.name.split(" ")[0],
            surname :  this.props.data.name.split(" ")[1],
            country :  this.props.data.country
        }
        this.props.handleClick(clientModal);
    }
    render (){
        let clientDetails = this.props.data;
        let id = clientDetails._id;
        let name = clientDetails.name.split(" ")[0];
        let surname = clientDetails.name.split(" ")[1];
        let country = clientDetails.country;
        let firstContact = clientDetails.firstContact.split("T")[0];
        let emailType = clientDetails.emailType;
        let sold = (clientDetails.sold ? 'V': '-');
        let owner = clientDetails.owner;
        return (
        <div onClick={this.handleClick}>
            <div key={id} id={id} className="wrapper">
                <div className="box ">{name}</div>
                <div className="box ">{surname}</div>
                <div className="box ">{country}</div>
                <div className="box ">{firstContact}</div>
                <div className="box ">{emailType}</div>
                <div className="box ">{sold}</div>
                <div className="box ">{owner}</div>
            </div>
            <hr className="hr"/>
        </div>)
        }
    }
    
    export default Client 