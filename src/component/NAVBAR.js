import React from "react";
import "./NAVBAR.css";
import *as ReactBootstrap from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom";



export default function NAVBAR() {
  return (
    <>
      <div className='container'>
        <ReactBootstrap.Navbar bg="light" expand="lg">
          <ReactBootstrap.Navbar.Brand to="/">RENT-IT</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
          <ReactBootstrap.Navbar.Collapse id="navbarScroll">
            <ReactBootstrap.Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <ReactBootstrap.Nav.Link as={Link} to="/home">Home</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link as={Link} to="/link">Link</ReactBootstrap.Nav.Link>
              <ReactBootstrap.NavDropdown title="Link" id="navbarScrollingDropdown">
                <ReactBootstrap.NavDropdown.Item to="/action3">Action</ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Item to="/action4">
                  Another action
                </ReactBootstrap.NavDropdown.Item>
                <ReactBootstrap.NavDropdown.Divider />
                <ReactBootstrap.NavDropdown.Item to="/action5">
                  Something else here
                </ReactBootstrap.NavDropdown.Item>
              </ReactBootstrap.NavDropdown>
              <ReactBootstrap.Nav.Link as={Link} to="/" disabled>
                Link
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            <div className="mx-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            </div>
            <ReactBootstrap.Nav.Link as={Link} to="/login" >Login</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link as={Link} to="/signup">Signup</ReactBootstrap.Nav.Link>
            
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </div>
    </>
  );
}
