import LottieAnimation from "../components/LottieAnimation";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";



const HomeScreen = () => {
  return (
    <Container>
      <h1 className="text-center mt-3">Welcome to Autoparts Outlet</h1>
      <Row>
        <Col><h2 className="mt-5">Autoparts Outlet: Fast, Reliable, and Affordable Delivery of Quality Autoparts</h2>
        <div>
          <Image src="/images/mechanic.jpg" alt="mechanic working on car" width="300px" height="300px"/>
        </div>
        </Col>
        <Col>
          <LottieAnimation
            src="https://lottie.host/38313f6c-a129-43de-b259-3680142b7b1e/GSIlreFLUu.json"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
