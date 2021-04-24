import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends Component{
    render(){
        return (
            <>
                <Navbar bg ="dark" variant ="dark">
                    <Navbar.Brand href = "/Main">Home</Navbar.Brand>
                    <Nav className = "mr-auto">
                        <Nav.Link href= "/Drafts">Drafts</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default NavBar;