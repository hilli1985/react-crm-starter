import React, { Component } from 'react'; 

class AddClient extends Component { 
    constructor() {
        super()
        this.state = { 
            id:'',      
            name : '',
            surname : '',
            country :'',
            owner:[]
        }
    }
     render(){
    return (
            <div>ADD CLIENT
            <form>  
                First Name: <input type="text" prop="firstName" value={this.state.name} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
                <br/>
                SurName: <input type="text" prop="surName" value={this.state.name} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
                <br/>
                Country: <input type="text" prop="country" value={this.state.name} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
                <br/>
                Owner: <input type="text" prop="owner" value={this.state.name} onChange={this.handleChange} pattern="[A-Za-z]" title="Only letter allowed"/>
                <br/><input className="" type="submit"  onClick={this.handleSubmit}  value="DECLER"/>
            </form>
        </div>
    )
    }
}

export default AddClient;
