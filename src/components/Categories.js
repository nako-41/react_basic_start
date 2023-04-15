import React, { Component } from "react";
import {ListGroup,ListGroupItem} from "reactstrap";


export default class Categories extends Component {
  render() {
    return (
      <div>
        <h2>categories List</h2>
        <ListGroup>
          <ListGroupItem color="success">Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem color="info">Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem color="warning">Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
