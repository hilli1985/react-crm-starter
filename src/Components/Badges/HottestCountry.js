import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'
import { library} from '@fortawesome/fontawesome-svg-core'
library.add(faGlobeAmericas)

class HottestCountry extends Component {
    render() {
        let hottestCountry = this.props.hottestCountry;
        return (
            <div className="">
            <div id="icon-4" className="outer-circle"><FontAwesomeIcon className='icon'  icon="globe-americas" /></div>
            <div className="badge-headline">{hottestCountry}</div>
            <div className="badge-text">Hottest Country</div>
            </div>)
        }
    }
    export default HottestCountry
    
    
    