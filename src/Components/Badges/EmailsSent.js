import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEnvelope);

class EmailsSent extends Component {
  render() {
    return (
      <div className="badge-box">
        <div className="sm-wrap">
          <div id="icon-2" className="outer-circle">
            <FontAwesomeIcon className="icon" icon="envelope" />
          </div>
        </div>
        <div className="sm-wrap">
          <div className="badge-headline">{this.props.emailSentNum}</div>
          <div className="badge-text">Emails Sent</div>
        </div>
      </div>
    );
  }
}

export default EmailsSent;
