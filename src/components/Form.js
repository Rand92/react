import React, { Component } from 'react'
import { Navbar, NavDropdown ,Container,Nav} from 'react-bootstrap';
 class Forms extends Component {
   constructor(props){
     super(props);
     this.state={
      horns:"",
     }
   }
   handelSelect =(e)=>{
     let horns: NavDropdown.Item;
this.setState=({ 
  horns:horns;
})
   }
    render() {
        return (
            <div>
          
                <form >
             <Navbar variant="dark" bg="dark" expand="lg" >
  <Container fluid >
    <Navbar.Brand href="#home" >View The Beasts Filtered By :</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav >
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="The Number Of Horns"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Two</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">One Hundred</NavDropdown.Item>
 
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
                </form>
            </div>
        )
    }
}

export default Forms
