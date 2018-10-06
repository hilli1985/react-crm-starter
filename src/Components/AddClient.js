import React, { Component } from 'react'; 

class AddClient extends Component { 
    constructor() {
        super()
        this.state = { 
            firstName:'',      
            surName: '',
            country : '',
            owner:'',
            email:''
        }
    }
    handleChange = (event)=> {
        this.setState({[event.target.getAttribute("prop")]: event.target.value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        if (!this.validateEmail(this.state.email)){
            alert ('Please eneter a legal email \n see example below');
            return;
        }
        this.props.addNewClient(this.state);    
    }

    validateEmail = (email)=> {
        var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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
            <br/>
            Email: <input  type="email" prop="email" value={this.state.email} onChange={this.handleChange}  
            pattern="[a-zA-Z0-9!#$%'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*" required  
            title="Legal email only" placeholder="keep@this.format"/>
            <br/>
            <input className="submit-modal" type="submit"  onClick={this.handleSubmit}  value="Add New Client"/>
            </form>
            </div>
        )
    }
}

export default AddClient;
