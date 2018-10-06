import React, { Component } from 'react';
import '../Styles/ClientModal.css';


class ClientModal extends Component {
     constructor() {
        super()
        this.state = { 
            id:'',      
            name : '',
            surname : '',
            country :''
        }
    }

    componentDidMount = async () => {
        let clientModal = await this.props.clientModal;
        this.setState ({
            id : clientModal.id,
            name : clientModal.name,
            surname : clientModal.surname,
            country : clientModal.country
        })
        //console.log (clientModal);
    } 

    handleChange = (event)=> {
        this.setState({[event.target.getAttribute("prop")]: event.target.value});
    }

    closeModal = () => {
        this.props.closeModal();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newClient = {
            id : this.state.id,
            name : this.state.name,
            surname : this.state.surname,
            country : this.state.country
        }
        this.props.changeClientProps(newClient);
    }


    render () {
        return (
        <form id={this.state.id} className='client-modal-body'>
            <div className='close-modal' onClick={this.closeModal}><span>X</span></div>
            <div className="div-input"> Name: <input className='input-modal' type="text" prop="name" value={this.state.name} onChange={this.handleChange} placeholder={this.state.name} pattern="[A-Za-z]" title="Only letter allowed"/></div>
            <div className="div-input"> Surname: <input className='input-modal' type="text" prop="surname" value={this.state.surname} onChange={this.handleChange} placeholder={this.state.surname} pattern="[A-Za-z]" title="Only letters allowed" /></div>
            <div className="div-input"> Country: <input className='input-modal' type="text" prop="country" value={this.state.country} onChange={this.handleChange} placeholder={this.state.country} pattern="[A-Za-z]" title="Only letters allowed" /></div>
            <input className="submit-modal" type="submit"  onClick={this.handleSubmit}  value="Update"/>
        </form>)
    }
}

export default ClientModal;