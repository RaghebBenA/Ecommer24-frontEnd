import React from "react";
import {
  Carousel,
  Image,
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";
import Audi from "../assets/ford-63930_640.jpg";
import CarTwo from "../assets/car-1149997_640.jpg";
import CarThree from "../assets/car-2596344_640.jpg";

const Home = () => {
  return (
    <React.Fragment>
    <Container>
      <Row>
        <Col md={{ offset: 3 }}>
          <Card style={{ width: "30rem" }}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={Audi} alt="First slide" />
                <Carousel.Caption>
                  <h1>Sport and speed Cars</h1>
                  <p>You will find the fast and the furious one here </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={CarTwo} alt="Third slide" />
                <Carousel.Caption>
                  <h1>Fell comfort</h1>
                  <p>
                    Class cars and comfort One's you find it here in our store
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={CarThree}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h1>The old lady's</h1>
                  <p>if you Like the old Cars you find what you like here</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card>
        </Col>
      </Row>
    </Container>
    </React.Fragment>
  );
};
export default Home;
