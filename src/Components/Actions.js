import React, { Component } from 'react';
import UpdateClient from './UpdateClient';
import AddClient from './AddClient';

class Actions extends Component {
    
    addNewClient = (data)=>{
        console.log(data);
        let client = {
            name: data.firstName+' '+data.surName,
            email:"",
            firstContact:"2018-11-26T22:00:00.000Z",
            emailType:"",
            sold:false,
            owner:data.owner}
            // // pass data to server
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