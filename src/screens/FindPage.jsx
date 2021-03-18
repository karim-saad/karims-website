import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const FindPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <h2 className="text-center">
          You can find me on other platforms here!
        </h2>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <p>GitHub</p>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </Col>
      </Row>
    </Container>
  );
};

export default FindPage;
