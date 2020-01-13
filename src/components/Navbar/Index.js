import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Navigation extends Component {
    state = {
        icon : '<i className="material-icons">account_circle</i> '
    }
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand href="#">Infosyster</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home">Unit-IOT</Nav.Link> 
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                            {/* <i className="material-icons">account_circle</i>  */}
                            <NavDropdown title="Admin" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/">Logout</NavDropdown.Item>
                                
                               
                               
                            </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </React.Fragment>
        )
    }
}

export default Navigation