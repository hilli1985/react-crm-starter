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
            
            <div className="action-form">
            <div className="action-headline">ADD CLIENT</div>
            <form>  
            <div class="form-row">
                <label  class="col-sm-1 col-form-label">First name:</label>
                <input className="col-sm-2 form-control" type="text" prop="firstName" value={this.state.firstName} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
            </div>
            <div class="form-row">
                <label  class="col-sm-1 col-form-label">Surname:</label>
                <input className="col-sm-2 form-control" type="text" prop="surName" value={this.state.surName} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
            </div>
            <div class="form-row">
                <label  class="col-sm-1 col-form-label">Country:</label>
                <input className="col-sm-2 form-control" type="text" prop="country" value={this.state.country} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
            </div>
            <div class="form-row">
                <label  class="col-sm-1 col-form-label">Owner:</label>
                <input className="col-sm-2 form-control" type="text"  prop="owner" value={this.state.owner} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
            </div>
            <div class="form-row">
                <label for="staticEmail" class="col-sm-1 col-form-label">Email:</label>
                <input  className="col-sm-2 form-control" type="email" prop="email" value={this.state.email} onChange={this.handleChange}  
            pattern="[a-zA-Z0-9!#$%'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*" required title="Legal email only" placeholder="keep@this.format"/>
            </div>
            <input className="add-btn-submit" type="submit"  onClick={this.handleSubmit}  value="Add New Client"/>
            </form>
            </div>
            )
        }
    }
    
    export default AddClient;
    