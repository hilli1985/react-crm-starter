import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Clients from './Components/Clients';
import Action from './Components/ActionForm';
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

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    
    //use setTimeout to simulate an API call
    setTimeout(() => {
      let data = require('./data.json');
      this.setState({clients : data });
    }, 100);
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

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
      <Route path="/Actions" exact render={() => <Action clients={Object.keys(this.state.clients)} />} />
      <Route path="/Analytics" exact render={() => <Analytics clients={Object.keys(this.state.clients)} />} />
      {/* <Route path="/directory/:fentities" exact render={({ match }) => <Fentities match={match} state={this.state} />}/> */}
      </div>
      </Router>
    );
  }
}

export default App;
