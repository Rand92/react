import React, { Component } from 'react'

import { Modal, Button} from 'react-bootstrap'
 class SelectedBeast extends Component {
    render() {
        return (
            <Modal size="lg" show={this.props.viewModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <h3> {this.props.title}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body> <img src= {this.props.imageUrl} alt="horned beast"/>
        <br/>
        <h5> Description :</h5>
        <p> {this.props.description}</p> 
        
        <p> Keyword: {this.props.keyword} </p>
        
        <p> Horns: {this.props.horns} </p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
        )
    }
}

export default SelectedBeast
