import React, { Component } from 'react'; 

class UpdateClient extends Component { 
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
    <div>
        <div>UPDATE
            <form>  
                Client: <input type="text" prop="client" value={this.state.name} onChange={this.handleChange} placeholder='Client Name' pattern="[A-Za-z]" title="Only letter allowed"/>
                <br/>Transfer ownership to
                <select className="owner-ship" prop="owner"  value={this.state.category} onChange={this.handleSelect} >
                    <option>Owner</option>
                </select>
                <input className="" type="submit"  onClick={this.handleSubmit}  value="TRANSFER"/>
                <br/><select className="email-type" value={this.state.category} onChange={this.handleSelect} >
                    <option>Email Type</option>
                </select>
                <input className="" type="submit"  onClick={this.handleSubmit}  value="SEND"/>
                <br/>DECLER Sale! <input className="" type="submit"  onClick={this.handleSubmit}  value="DECLER"/>
            </form>
            <hr/>
        </div>
    </div>)
    }
}

export default UpdateClient ;
        