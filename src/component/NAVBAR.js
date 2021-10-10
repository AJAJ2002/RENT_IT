import React from "react";
import "./NAVBAR.css";
import *as ReactBootstrap from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import SearchIcon from '@material-ui/icons/Search'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import LOGIN from './LOGIN';
import  { useState } from 'react';
import LoginShow from 'react';
import SIGNUP from "./SIGNUP";


export default function NAVBAR() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(false);
  return (
    <>

      <ReactBootstrap.Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">RENT-IT</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
        <ReactBootstrap.Navbar.Collapse id="navbarScroll">
          <ReactBootstrap.Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            
            <ReactBootstrap.Nav.Link as={Link} to="/buy">BUY</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link as={Link} to="/rent">RENT</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link as={Link} to="/sell">SELL</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
          
          <div className="search">
          
          <ReactBootstrap.Nav.Link as={Link} to="/search" className="searchBar">
            <ReactBootstrap.InputGroup className="mb-2"> 
            <Dropdown   className="all" >
                <Dropdown.Toggle  variant="success" id="dropdown-basic">
                  ALL
                </Dropdown.Toggle> 
                <Dropdown.Menu>
                  <Dropdown.Item to="/home">Action</Dropdown.Item>
                  <Dropdown.Item to="/home">Another action</Dropdown.Item>
                  <Dropdown.Item to="/home">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> 
              <ReactBootstrap.FormControl id="inlineFormInputGroup" placeholder="Search" />
              <ReactBootstrap.InputGroup.Text><SearchIcon /></ReactBootstrap.InputGroup.Text>
            </ReactBootstrap.InputGroup>
          </ReactBootstrap.Nav.Link>
          </div>
          <div className="log ml-auto">
          <ReactBootstrap.Nav.Link as={Link} to="/login" ><Button variant="light" size="sm" onClick={handleShow}  >Login</Button>
          
          <LOGIN
            show={show} 
            onHide={() => LoginShow(false)}
          />
          </ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link as={Link} to="/signup"><Button variant="dark" size="sm" onClick={handleShow}  >Signup</Button>
          <SIGNUP
            show={show} 
            onHide={() => LoginShow(false)}
          />
          </ReactBootstrap.Nav.Link>
          </div>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
 
    </>
  );
}
