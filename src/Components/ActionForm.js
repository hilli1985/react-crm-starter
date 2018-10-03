import React, { Component } from 'react';
import UpdateClient from './UpdateClient';
import AddClient from './AddClient';

class ActionsForm extends Component {
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
    render() {
        return (
        <div>
            <UpdateClient/>
            <AddClient/>
      
         </div>
        )
    }

}
export default ActionsForm