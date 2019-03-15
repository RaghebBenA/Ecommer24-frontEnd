import React from "react";
import { Card, Carousel, Image ,Container,Row } from "react-bootstrap";
import Audi from "../asset/ford-63930_640.jpg";
import CarTwo from "../asset/car-1149997_640.jpg";
import CarThree from "../asset/car-2596344_640.jpg";

const Home = () => {
  return (
    <Container>
    <h1>Ecommerce24</h1>
    <Row>
    <Card className="bg-dark text-white">
      <Carousel>
        <Carousel.Item>
          <Image className="d-block w-100" src={Audi} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={CarTwo} alt="Third slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={CarThree} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Card.ImgOverlay>
        <Card.Title>E-commerce24</Card.Title>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </Row>
    </Container>
  );
};
export default Home;
