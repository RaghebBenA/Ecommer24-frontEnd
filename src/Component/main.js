import React, { Component } from "react";
import { BaseUrl } from "./baseUrl";
import { Route, Redirect, Switch } from "react-router-dom";
import Product from "./Card"
import Home from "./Home";
import MainHeader from "./header/HeaderComponent"
import componentsStyle from "../assets/jss/material-kit-react/views/components.jsx";
import withStyles from "@material-ui/core/styles/withStyles";



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
      <MainHeader />
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/product" component={Card} />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default  withStyles(componentsStyle)(Main);
