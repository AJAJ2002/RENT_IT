import React from "react";
import "./SELL.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";

function SELL() {
  return (
    <div className="container">
      <section className="sell">
        <h1>Sell Your House</h1>
        <Form className="form">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Uplaod your propert image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="type">
            <Form.Label>Property Type</Form.Label>
            <Form.Select>
              <option>Choose the option</option>
              <option value="1">House</option>
              <option value="2">Land</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Additional Details</Form.Label>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>

          <Button variant="primary" type="submit" className="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default SELL;