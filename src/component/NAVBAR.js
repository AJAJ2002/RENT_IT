import React from "react";
import "./NAVBAR.css";
import *as ReactBootstrap from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


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
              <ReactBootstrap.Nav.Link to="/action1">Home</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link to="/action2">Link</ReactBootstrap.Nav.Link>
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
              <ReactBootstrap.Nav.Link to="/" disabled>
                Link
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
        
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </div>
    </>
  );
}
