import React, { Component } from 'react';
import UpdateClient from './UpdateClient';
import AddClient from './AddClient';

class Actions extends Component {
    
    addNewClient = (data)=>{
        let firstContact = new Date().toISOString();
        //manipulate the data before sending to server
        let client = {
            name: data.firstName+' '+data.surName,
            email:data.email,
            firstContact:firstContact,
            emailType:"",
            sold:false,
            owner:data.owner,
            country:data.country}
            // pass data to server
            console.log(client);
            this.props.addNewClient(client)
        }
        
        updateClient = (data) =>{
            console.log(data);
            this.props.updateAction(data);
        }
        
        render() {
            return (
                <div>
                <UpdateClient clients={this.props.clients} updateClient = {this.updateClient}/>
                <AddClient addNewClient = {this.addNewClient} />
                </div>
            )
        }
        
    }
    export default Actions;