import React, { Component } from "react";
import UpdateClient from "./UpdateClient";
import AddClient from "./AddClient";

class Actions extends Component {
  render() {
    return (
      <div>
        <UpdateClient />
        <hr />
        <AddClient />
      </div>
    );
  }
}

export default Actions;
