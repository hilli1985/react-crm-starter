import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { library} from '@fortawesome/fontawesome-svg-core'
library.add(faUserCircle)


class OutstandingClients extends Component {
    render() {
        let outstandingClientsNum = this.props.outstandingClientsNum;
        return (
            <div className="">
            <div id="icon-3" className="outer-circle"><FontAwesomeIcon className='icon'  icon="user-circle" /></div>
            <div className="badge-headline">{outstandingClientsNum}</div>
            <div className="badge-text">Outstanding Client</div>
            </div>
        )
    }
}
export default OutstandingClients

