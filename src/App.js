//don't forget : 
//You should highlight which section the user is currently on in the navbar using state

import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
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
    let clients = await axios.get("/clients");
    return(clients.data);
  }
  
  updateClientDetails = (newClient) => { 
    let name = newClient.name +' '+ newClient.surname;
    let newClients = this.state.clients.map((client) => 
    {
      return {...client};
    });
    let index = (newClients.findIndex((client) => client._id===newClient.id));
    newClients[index]={...newClients[index], name:name , country : newClient.country } ;
    this.setState({ clients : newClients })
  }
  
  updateClientAction = (newClient) => { 
    let newClients = this.state.clients.map((client) => 
    {
      return {...client};
    });
    let index = (newClients.findIndex((client) => client._id===newClient._id));
    newClients[index] = newClient;
    this.setState({ clients : newClients })
  }

  addNewClient = (newClient) => {
    let newClients = this.state.clients.map((client) => 
    {
      return {...client};
    });
    newClients.push(newClient);
    this.setState({ clients : newClients })
  }

  render() {
    return (
      <Router>
      <div className="App">   
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">>
      <ul className="navbar-header nav navbar-nav">
      <li><Link className="navbar-brand" to="/">Home</Link></li>
      <li><Link className="navbar-brand" to="/Clients">Clients</Link></li>
      <li><Link className="navbar-brand" to="/Actions">Actions</Link></li>
      <li><Link className="navbar-brand" to="/Analytics">Analytics</Link></li>
      </ul>
      </nav>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/Clients" exact render={() => <Clients clients={this.state.clients} updateClientDetails={this.updateClientDetails}/>} />
      <Route path="/Actions" exact render={() => <Actions clients={this.state.clients} updateAction={this.updateClientAction} addNewClient={this.addNewClient} />} />
      <Route path="/Analytics" exact render={() => <Analytics clients={Object.keys(this.state.clients)} />} />
      {/* <Route path="/directory/:fentities" exact render={({ match }) => <Fentities match={match} state={this.state} />}/> */}
      </div>
      </Router>
    );
  }
}

export default App;
