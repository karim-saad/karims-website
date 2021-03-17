import "./App.css";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="justify-content-center">
      <Row className="justify-content-center">
        <h1>Hello!</h1>
        <p>Thanks for visiting this page</p>
        <p>
          Unfortunately, this website is still undergoing construction, so
          please check back soon!
        </p>
        <p>
          In the meantime, feel free to contact Karim at{" "}
          <a href="mailto:karimsaad47@gmail.com">karimsaad47@gmail.com</a>{" "}
        </p>
      </Row>
    </Container>
  );
}

export default App;
