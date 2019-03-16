import React, { Component } from "react";
import {Card , Button} from "react-bootstrap"


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      product: props.data
    };
    this.handelClickOne = this.handelClickOne.bind(this)
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handelClickOne(){
   this.setState({product: this.state.product.filter((product) => product.id < 10)})
  }
  render() {
    const Cards = () =>{
     const Mapping = this.state.product.map((card) => {
        return (
          <Card style={{ width: "18rem" }} key={Card.id} className="Card">
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
      })
      return(
        <div className="cards">
        {Mapping}
        </div>
      )
    }
    return(
      <React.Fragment>
      <Cards />
      </React.Fragment>
    )
  }
}
export default Product;
