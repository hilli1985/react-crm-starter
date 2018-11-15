import React, { Component } from 'react';
import Client from './Client';
import SearchBar from './SearchBar';
import ClientModal from './ClientModal';
import '../Styles/Client.css';
import util from '../axiosUtil';

class Clients extends Component {
    constructor() {
        super()
        this.state = { 
            hideModal : true,
            clientModal : {},
            query:'',
            category:'select',
            clients:[],
            position : 0, 
            jump : 20,
            fields : {
                'Name' : 'name', 
                'Surname' : 'surname',
                'Country' : 'country',
                'First Contact' : 'firstContact',
                'Email' : 'emailType',
                'Sold' : 'sold',
                'Owner' : 'owner' }
            }
        }
        
        // get all clients from the DB by get request
        componentDidMount = async() => {
            let clients = await util.getAllClients();
            this.setState({clients:clients});
        }
        
        getClients = () => {
            if(!this.state.clients){
                return;
            } 
            let filteredClient = this.filterBy(); //filter the sliced  
            return (
                <div>
                {filteredClient.map(c => {
                    return (
                        <Client key={c._id} data={c} handleClick={this.clientClicked}/>          
                    )
                })}
                </div>
            )      
        }
        
        changeJump = (jump) => {
            this.setState ({ position : 0, jump : parseInt(jump)})
        }

        getHeadLine = () => {
            if (!this.state.fields){
                return;
            }
            return (
                <div className="wrapper">
                {Object.entries(this.state.fields).map(f => {
                    return (
                        <div key={f[0]} className="box headline-box">{f[0]}</div>      
                    )
                })}
                </div>
            )      
        }

        clientClicked = (clientModal) => {
            this.setState({clientModal : clientModal, hideModal:!this.state.hideModal});
        }

        closeModal = () => {
            this.setState({hideModal:true});
        }
        
        changeBoundary = (factor) => {
            let clients = this.state.clients;
            let jump = this.state.jump * factor;
            let newPosition = 0;
            if (factor === 1){
                newPosition = (this.state.position+jump >= clients.length ? this.state.position : this.state.position+jump);
            }
            else if (factor === -1) {
                newPosition = (this.state.position+jump <= 0 ? 0 : this.state.position+jump);
            }
            this.setState({position:newPosition})
        }
        
        getFilterParams = (query, category) => {
            this.setState({query:query,category:category});
        }
        
        filterBy = ()=>{
            let clients = this.state.clients.slice(this.state.position,this.state.position + this.state.jump);
            let query = this.state.query;
            let category = this.state.category;
            return clients.filter(
                (client) => 
                {
                    if ((category === 'select')||(category === 'Select')) {
                        return client['name'].toLowerCase().includes('');
                    }
                    else if (category === 'emailType') {
                        let char = ((!client[category]) ? '' : client[category].toLowerCase()); 
                        return char===query.toLowerCase();
                    }
                    else if ((category === 'sold')){
                        let sign = ((query==='v')||(query==='V')||(query==='yes')); //v or V is true 
                        return client[category]===sign;
                    }
                    query = this.state.query ? this.state.query.toLowerCase() : this.state.query; 
                    return client[category].toLowerCase().includes(query)
                });
            }
        

        // via modal window
        updateClientDetails = (newClient) => { 
            let name = newClient.name +' '+ newClient.surname;
            // complicated spread
            let newClients = this.state.clients.map((client) => 
                {return {...client}});
            let index = (newClients.findIndex((client) => client._id===newClient.id));
            let update = {
                name: name,
                country: newClient.country,
                owner:newClients[index].owner,
                emailType:newClients[index].emailType,
                sold:newClients[index].sold
            }
            util.updateClientInDB(update, newClients[index]._id);
            newClients[index]={...newClients[index], name:name , country : newClient.country } ;
            alert('Client was updated');
            this.setState({ clients : newClients })
        }
            
        render() {
            let boundary = this.state.position;
            let jump = this.state.jump;
            return (
                <div>
                    {!this.state.hideModal && <ClientModal clientModal={this.state.clientModal} 
                    updateClientDetails = {this.updateClientDetails} 
                    closeModal={this.closeModal}/>}
                    <SearchBar 
                    changeJump = {this.changeJump}
                    getFilterParams = {this.getFilterParams}
                    lowBoundary={boundary} 
                    highBoundary={boundary+jump} 
                    changeBoundary = {this.changeBoundary}/>
                    {this.getHeadLine()}
                    {this.getClients()}
                </div>
            )
            
        }
            
}
export default Clients