import React from 'react'
import "./HOME.css";
import { Carousel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import *as ReactBootstrap from "react-bootstrap";
import { Link } from "react-router-dom";


function HOME() {
    return (
      <>
         
         {/* caurosal */}

        <div classname="container">
          <Carousel className="slides" variant="dark">
            <Carousel.Item>
              <img className="image" src="./1.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src="./2.jpg" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src="./3.jpg" alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="image" src="./4.jpg" alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
        </div>


         {/* crads */}

        <div className="text">
          <span>
            Whether you’re buying, selling or renting,
            <br />
            we can help you move forward.
          </span>
        </div>

        <div className="cards">

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="buy.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Buy a House</h5>
                <p className="card-text">
                Find your place with an immersive photo <br /> experience and
                  the most listing, including <br /> Things you wont find
                  anywhere else
                </p>
                <Button variant="outline-primary">
                  <ReactBootstrap.Nav.Link as={Link} to="/buy">
                    Search Homes
                  </ReactBootstrap.Nav.Link>
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="rent.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Rent a House</h5>
                <p className="card-text">We were creating a seamless online experience <br /> From
                  shopping on largest rental <br /> Netwok, to apply, to pay
                  rent.</p>
                  <Button variant="outline-primary"><ReactBootstrap.Nav.Link as={Link} to="/rent">
                    Find Rentals
                  </ReactBootstrap.Nav.Link></Button>{" "}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="sell.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sell a House</h5>
                <p className="card-text">
                Wether you get a cash offer through Rent-It <br /> Or choose
                  to sell traditionally, we <br /> can help you navigate a
                  sucessfull sale.
                </p>
                <Button variant="outline-primary"><ReactBootstrap.Nav.Link as={Link} to="/sell">
                    Sell Your House
                  </ReactBootstrap.Nav.Link></Button>{" "}
              </div>
            </div>
          </div>
        </div>
        </div>

        
        
        {/* footer */}
        <div className="footer">
        <div className="container">
            <nav className="footer-nav">
                <div className="footer-nav-list is-active">
                   <ul><h4 className="heading">
                        RentIt
                    </h4>
                    <div className="footer-nav-content">
                    <ul><ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">BUY</ReactBootstrap.Navbar.Brand></ul>
                    <ul><ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">RENT</ReactBootstrap.Navbar.Brand></ul>
                    <ul><ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">SELL</ReactBootstrap.Navbar.Brand></ul>
                    </div>
                    </ul> 
                </div>
                 
                <div className="footer-nav-list is-active">
                    <h4 className="heading">
                        RentIt
                    </h4>
                    <div className="footer-nav-content">
                    <ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">BUY</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">RENT</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">SELL</ReactBootstrap.Navbar.Brand>
                    </div>
                </div>
                <div className="footer-nav-list is-active">
                    <h4 className="heading">
                        RentIt
                    </h4>
                    <div className="footer-nav-content">
                    <ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">BUY</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">RENT</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Navbar.Brand  as={Link} to="/rentit">SELL</ReactBootstrap.Navbar.Brand>
                    </div>
                </div>

            </nav>

        </div> 
        </div>
      </>
    );
}

export default HOME
