import React, { Component } from 'react'; 

class UpdateClient extends Component { 
    constructor() {
        super()
        this.state = { 
            clients:[],     
            client : '',
            owner:'Owner',
            emailType:'Email Type',
            sold:'',
            clientsList:'',
            currentClient:{}        
        }
    }
    
    componentDidMount =  () => {
        let clients =  this.props.clients
         this.setState({clients : clients})
    }
    
    handleChange = (event)=> {
        this.setState({[event.target.getAttribute("prop")]: event.target.value});
    }

    transferClicked = (event) => {
        event.preventDefault();
        if (this.state.owner==="Owner"){
            alert ('Nothing to update');
            return;
        }
        if (this.state.owner===this.state.currentClient.owner){
            alert ('Nothing to update');
            return;
        }
        this.props.updateClient({
            ...this.state.currentClient,       
            owner : this.state.owner
        });  
        let newCurrentClient = {...this.state.currentClient}
        newCurrentClient.owner = this.state.owner;
        this.setState(
            {currentClient:newCurrentClient }
        );   
    }
    
    sendClicked = (event) =>{
        event.preventDefault();
        if (this.state.emailType==="Email Type"){
            alert ('Nothing to update');
            return;
        }
        if (this.state.emailType===this.state.currentClient.emailType){
            alert ('Nothing to update');
            return;
        }
        this.props.updateClient({
            ...this.state.currentClient,
            emailType : this.state.emailType,
        }); 
        let newCurrentClient = {...this.state.currentClient}
        newCurrentClient.emailType = this.state.emailType;
        this.setState(
            {currentClient:newCurrentClient }
        );    
    }
    
    declareClicked = (event) =>{
        event.preventDefault();
        if (!this.state.client){
            alert ('Nothing to change');
            return;
        }
        if (this.state.currentClient.sold){
            alert ('Nothing to change');
            return;
        }
        this.props.updateClient({
            ...this.state.currentClient,
            sold : true   
        }); 
        let newCurrentClient = {...this.state.currentClient}
        newCurrentClient.sold = true;
        this.setState(
            {currentClient:newCurrentClient }
        )   
    }
    
    getClient = async (event) => {
        let clientsList = this.getClientsList();
        let client = event.target.value;
        let clientDetails = await this.props.clients.filter(c => client===c.name);
        if(!clientDetails[0]){
            this.setState({
                client: client,
                clientsList : clientsList,
            });
            return;
        }
        this.setState({
            client: client,
            clientsList : clientsList,
            owner:clientDetails[0].owner,
            emailType:clientDetails[0].emailType,
            currentClient:clientDetails[0]
        });
    }
    
    getClientsList = () => {
        return (<datalist id="clients">
        {this.props.clients.map( (c) => <option id={c._id} key={c._id} value={c.name}>{c.name}</option>)}
        </datalist>)
    }
    
    getOwnersList = () => {
        let owner =this.props.clients.map ((c) => c.owner);
        let unique = owner.filter((c,index) => owner.indexOf(c)===index );
        unique.unshift("Owner");
        return (
            <select value={this.state.owner} prop="owner" onChange={this.handleChange}>
            {unique.map ((o) => <option>{o}</option>)}
            </select>)
        }
        getEmailTypeList = () => {
            let emailTypes = ['Email Type','A','B','C','D'];
            return (
                <select value={this.state.emailType} prop="emailType" onChange={this.handleChange}>
                {emailTypes.map ((o) => <option>{o}</option>)}
                </select>
            )
        }
        render(){
            return (
                <div>
                <div>UPDATE
                <form>  
                Client: <input type="text" prop="client" value={this.state.client} onChange={this.getClient} 
                placeholder="Client Name" list="clients"/>
                {this.state.clientsList}
                <br/>Transfer ownership to
                {this.getOwnersList()}
                <input className="" type="submit"  onClick={this.transferClicked}  value="TRANSFER"/>
                <br/>
                {this.getEmailTypeList()}
                <input className="" type="submit" onClick={this.sendClicked}  value="SEND"/>
                <br/>DECLER Sale! <input className="" type="submit"  onClick={this.declareClicked}  value="DECLER"/>
                </form>
                <hr/>
                </div>
                </div>)
            }
        }
        
        export default UpdateClient ;
        