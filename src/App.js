//don't forget : 
//You should highlight which section the user is currently on in the navbar using state
//cross-origin issues - why use this and why not in real project??

import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Clients from './Components/Clients';
import Actions from './Components/Actions';
import Analytics from './Components/Analytics';
import Home from './Components/Home';






class App extends Component {
  constructor() {
    super()
    this.state = { 
      clients : [],
      response: ''
    }
  }
  
  componentDidMount = async () => {
    let clients = await this.getAllClients();
    this.setState({ clients: clients })
  }
  
  async getAllClients() {
    let clients = await axios.get('/clients');
    return(clients.data);
  }
  
  async addClientToDB(newClient){
    const response = await axios.post('/client', newClient);
    return (response.data);
  }
  
  async updateClientInDB(update,clientID){
    const response = await axios.put(`/client/${clientID}`, update);
    return (response.data);
  }
  
  // via modal window
  updateClientDetails = (newClient) => { 
    let name = newClient.name +' '+ newClient.surname;
    // spread
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
    this.updateClientInDB(update, newClients[index]._id);
    newClients[index]={...newClients[index], name:name , country : newClient.country } ;
    alert('Client was updated');
    this.setState({ clients : newClients })
  }
  
  //via action window
  updateClientAction = (newClient) => { 
    let newClients = this.state.clients.map((client) => 
    {
      return {...client};
    });
    let index = (newClients.findIndex((client) => client._id===newClient._id));
    newClients[index] = newClient;
    let update = {
      name: newClient.name,
      country: newClient.country,
      owner:newClient.owner,
      emailType:newClient.emailType,
      sold:newClient.sold
    }
    this.updateClientInDB(update, newClient._id);
    alert('Client was updated');
    this.setState({ clients : newClients })
  }
  
  addNewClient = async (newClient) => {
    let clientFromDB = await this.addClientToDB(newClient);
    // spread
    let newClients = this.state.clients.map((client) => {return {...client}} )
    newClients.push(clientFromDB);
    alert('Client was added');
    this.setState({ clients : newClients })
  }
  
  render() {
    return (
      <Router>
      <div className="App">   
      
      <nav className="navbar-sm navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-header nav navbar-nav navbar-left">
      <li><Link className="nav-item navbar-brand" to="/">Home</Link></li>
      <li><Link className="nav-item navbar-brand" to="/Clients">Clients</Link></li>
      <li><Link className="nav-item navbar-brand" to="/Actions">Actions</Link></li>
      <li><Link className="nav-item navbar-brand" to="/Analytics">Analytics</Link></li>
      </ul>
      </nav>

      <Route path="/" exact render={() => <Home />} />
      <Route path="/Clients" exact render={() => <Clients clients={this.state.clients} updateClientDetails={this.updateClientDetails}/>} />
      <Route path="/Actions" exact render={() => <Actions clients={this.state.clients} updateAction={this.updateClientAction} addNewClient={this.addNewClient} />} />
      <Route path="/Analytics" exact render={() => <Analytics clients={this.state.clients} />} />
      {/* <Route path="/directory/:fentities" exact render={({ match }) => <Fentities match={match} state={this.state} />}/> */}
      </div>
      </Router>
    );
  }
}

export default App;
