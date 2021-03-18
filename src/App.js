import "./App.css";
import { Container, Row } from "react-bootstrap";
import MainNavbar from "./components/MainNavbar";

function App() {
  return (
    <Container fluid className="p-0">
      <MainNavbar />
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
}

export default App;
