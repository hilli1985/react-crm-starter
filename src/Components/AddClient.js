import React, { Component } from 'react'; 

class AddClient extends Component { 
    constructor() {
        super()
        this.state = { 
            firstName:'',      
            surName: '',
            country : '',
            owner:''
        }
    }
    handleChange = (event)=> {
        this.setState({[event.target.getAttribute("prop")]: event.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addNewClient(this.state);    
    } 

    render(){
        return (
            <div>ADD CLIENT
            <form>  
            First Name: <input type="text" prop="firstName" value={this.state.firstName} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
            <br/>
            SurName: <input type="text" prop="surName" value={this.state.surName} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
            <br/>
            Country: <input type="text" prop="country" value={this.state.country} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
            <br/>
            Owner: <input type="text" prop="owner" value={this.state.owner} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
            <br/><input className="submit-modal" type="submit"  onClick={this.handleSubmit}  value="Add New Client"/>
            </form>
            </div>
        )
    }
}

export default AddClient;
