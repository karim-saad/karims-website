import { Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="p-0">
      <Row className="justify-content-center my-1">
        <h1>Hello!</h1>
      </Row>
      <Row className="justify-content-center">
        <p className="my-1">Thanks for visiting this page!</p>
      </Row>
      <Row className="justify-content-center">
        <p className="my-1">
          Unfortunately, this website is still undergoing construction, so
          please check back soon!
        </p>
      </Row>
      <Row className="justify-content-center">
        <p className="my-1">
          In the meantime, feel free to contact Karim at{" "}
          <a href="mailto:karimsaad47@gmail.com">karimsaad47@gmail.com</a>{" "}
        </p>
      </Row>
    </Container>
  );
};

export default HomePage;
