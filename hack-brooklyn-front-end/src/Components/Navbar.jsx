import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends Component{
    render(){
        return (
            <>
                <Navbar bg ="dark" variant ="dark">
                    <Navbar.Brand href = "#home">Home</Navbar.Brand>
                    <Nav className = "mr-auto">
                        <Nav.Link href= "#Dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        )
    }
}

export default NavBar;