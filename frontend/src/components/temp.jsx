import { Player } from "@lottiefiles/react-lottie-player";
import { Container, Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <Container>
      <h1 className="text-center mt-3">Welcome to Autoparts Outlet</h1>
      <Row>
        <Col><h2 className="mt-5">Autoparts Outlet: Fast, Reliable, and Affordable Delivery of Quality Autoparts</h2></Col>
        <Col>
          <Player
            src="https://lottie.host/38313f6c-a129-43de-b259-3680142b7b1e/GSIlreFLUu.json"
            style={{
              height: "500px",
              width: "500px",
            }}
            loop
            autoplay
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
