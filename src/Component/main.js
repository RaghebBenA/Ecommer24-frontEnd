import React, { Component } from "react";
import Head from "./Header";
import { BaseUrl } from "./baseUrl";
import { Card, Button } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch(BaseUrl + "Product")
      .then((response) => response.json())
      .then((response) => {
        const cards = response.map((card) => {
          return (
            <Card style={{ width: "18rem" }} key={Card.id}>
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
      return <div className="cards">{this.state.data}</div>;
    };
    const Homepage = () => {
      return (
        <div className="container">
          <Home />
        </div>
      );
    };
    console.log(this.state.data);
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
