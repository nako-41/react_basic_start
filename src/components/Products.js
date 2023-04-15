import React,{Component} from "react";
import {ListGroup,ListGroupItem} from "reactstrap";

export default class Products extends Component{
    render(){
        return(
            <>
            <h2>Products List</h2>
            <div>

  <ListGroup>
    <ListGroupItem
      action
      active
      tag="button"
    >
      Cras justo odio
    </ListGroupItem>
    <ListGroupItem
      action
      tag="button"
    >
      Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem
      action
      tag="button"
    >
      Morbi leo risus
    </ListGroupItem>
    <ListGroupItem 
      action
      tag="button"
      color="primary"
    >
      Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem
      action
      tag="button"
    >
      Vestibulum at eros
    </ListGroupItem>
  </ListGroup>
</div>
            </>
        )
    }
}
