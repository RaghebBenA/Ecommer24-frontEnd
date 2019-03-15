import React, { Component } from "react";
import Head from "./Header";
import { BaseUrl } from "./baseUrl";
import {
  Card,
  Button,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch(BaseUrl + "Product")
      .then((response) => response.json())
      .then((response) => {
        const cards = response.map((card) => {
          return (
            <Card  style={{ width: "18rem" }} key={Card.id}>
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src={card.image}
              />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Subtitle className="mb-2">{card.price}</Card.Subtitle>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        });
        this.setState({
          data: cards
        });
      });
  }
  render() {
    const Card = () => {
      return (
        <Container>
          <Row>
            <Col md={3}>
              <Table responsive variant="dark" hover bordered >
                <thead>
                  <tr>
                    <th>Gategory</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td>Modern Cars</td>
                  </tr>
                  <tr>
                    <td>Old Cars</td>
                  </tr>
                  <tr>
                    <td>Sport Cars</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={{ offset: 1 }}>
              <div className="cards">{this.state.data}</div>
            </Col>
          </Row>
        </Container>
      );
    };

    const Homepage = () => {
      return (
        <div className="container">
          <Home />
        </div>
      );
    };

    return (
      <React.Fragment>
        <Head />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/product" component={Card} />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
