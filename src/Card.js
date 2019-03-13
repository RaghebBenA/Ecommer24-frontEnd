import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  const cards = props.cardi.map((card) => {
    return (
      <Card style={{ width: "18rem" }} key={Card.id}>
        <Card.Img variant="top" src={card.imageUrl} />
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
  return <div>{cards}</div>;
};
export default Product;
