import React, { Component } from 'react';
import Client from './Client';
import SearchBar from './SearchBar';
import ClientModal from './ClientModal';
import '../Styles/Client.css';


class Clients extends Component {
    constructor() {
        super()
        this.state = { 
            hideModal : true,
            clientModal : {},
            query:'',
            category:'name',
            clients:[],
            position : 0, 
            jump : 20,
            //fields : ['Name', 'Surname', 'Country', 'First Contact', 'Email', 'Sold', 'Owner']
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
        
        componentDidMount = async() => {
            let clients = await this.props.clients;
            let newClients = clients.slice(this.state.position,this.state.position+this.state.jump)
            this.setState({clients : newClients})
        }
        
        getClients = () => {
            let clients = this.props.clients;
            let filteredClient = this.filterBy(clients);
            let position = this.state.position;
            let jump = this.state.jump;
            if(!filteredClient){
                return;
            }
            return (
                <div>
                {filteredClient.slice(position,position+jump).map(c => {
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
            let fields = this.state.fields;
            if (!fields){
                return;
            }
            return (
                <div className="wrapper">
                {Object.entries(fields).map(f => {
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
            let clients = this.props.clients;
            let jump = this.state.jump * factor;
            let newPosition = 0;
            if (factor>0){
                newPosition = (this.state.position+jump>=clients.length ? this.state.position : this.state.position+jump);
            }
            else { 
                newPosition = (this.state.position+jump<=0 ? 0 : this.state.position+jump);
            }
            this.setState({position:newPosition})
        }
        
        getFilterParams = (query, category) => {
            this.setState({query:query,category:category});
        }
        
        filterBy = (clients)=>{
            let query = this.state.query;
            let category = this.state.category;
            return clients.filter(
                (client) => 
                {
                    if (category === 'emailType') {
                        let char = ((!client[category]) ? '' : client[category].toLowerCase()); 
                        return char===query.toLowerCase();
                    }
                    else if ((category === 'sold')){
                        let sign = (((query==='v')||(query==='V')) ? true : false); 
                        return client[category]===sign;
                    }
                    return client[category].toLowerCase().includes(query)
                });
            }
        
        changeClientProps = (newClient) => {
            this.props.updateClientDetails(newClient);    
        }
            
        render() {
            let boundary = this.state.position;
            let jump = this.state.jump;
            return (
                <div>
                {!this.state.hideModal && <ClientModal clientModal={this.state.clientModal} changeClientProps={this.changeClientProps} closeModal={this.closeModal}/>}
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