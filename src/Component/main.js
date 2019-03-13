import React, { Component } from "react";
import Head from "./Header";
import { BaseUrl } from "./baseUrl";
import { Card, Button } from "react-bootstrap";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const array = [];
    fetch(BaseUrl + "Product")
      .then((response) => response.json())
      .then((response) => {
        const cards = response.map((card) => {
          return (
            <Card style={{ width: "18rem" }} key={Card.id}>
              <Card.Img
                style={{ height: "150px" }}
                variant="top"
                src={card.imageUrl}
              />
              <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {card.price}
                </Card.Subtitle>
                <Card.Text>{card.content}</Card.Text>
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
    console.log(this.state.data);
    return (
      <React.Fragment>
        <Head />
        <div className="cards">{this.state.data}</div>
      </React.Fragment>
    );
  }
}

export default Main;
