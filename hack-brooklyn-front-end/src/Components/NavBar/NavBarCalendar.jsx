import React, {Component, useState} from 'react';
import {Navbar, Nav, Button, Modal} from 'react-bootstrap';



function NavBarCalendar(){
    const [show, setShow] = () => useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
             <Navbar bg ="dark" variant ="dark">
                <Navbar.Brand href = "/">Home</Navbar.Brand>
                <Nav className = "mr-auto">
                    <Nav.Link href= "/Drafts">Drafts</Nav.Link>
                    <Nav.Link eventKey={2} href ="#none" onClick ={handleShow}>Create</Nav.Link>
                </Nav> 
                    
            </Navbar>
            <Modal show ={show} onHide ={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>To DO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Enter your tasks</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
           
        </>
    )
    
}

export default NavBarCalendar;