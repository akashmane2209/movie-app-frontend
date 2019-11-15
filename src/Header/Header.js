import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";
export default class Header extends Component {
  state = {
    searchQuery: ""
  };
  handleClick = () => {
    console.log(this.state.searchQuery);
  };

  handleTextChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#">Movies Now</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.searchQuery}
              onChange={this.handleTextChange}
              id="searchQuery"
            />
            <Button variant="outline-light" onClick={this.handleClick}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
