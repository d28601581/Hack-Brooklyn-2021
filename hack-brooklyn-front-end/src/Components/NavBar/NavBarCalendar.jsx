import React, {Component} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';

class NavBar extends Component{
    render(){
        return (
            <>
                <Navbar bg ="dark" variant ="dark">
                    <Navbar.Brand href = "/Main">Home</Navbar.Brand>
                    <Nav className = "mr-auto">
                        <Nav.Link href= "/Drafts">Drafts</Nav.Link>
                        <Button variant="outline-info">Create</Button>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default NavBar;