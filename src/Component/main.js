import React, { Component } from "react";
import Head from "./Header";
import { BaseUrl } from "./baseUrl";
import { Route, Redirect, Switch } from "react-router-dom";
import Product from "./Card"
import Home from "./Home";



class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    let arr = []
    fetch(BaseUrl + "Product")
      .then((response) => response.json())
      .then((response) => {
         arr = [...response]
        this.setState({
          data: arr
        });
      });
  }

  render() {
   
    const Card = () => {
      return (
       <Product data={this.state.data} />
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
