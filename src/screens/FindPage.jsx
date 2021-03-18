import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FindPage = () => {
  return (
    <Container fluid className="find-page">
      <Row className="justify-content-center">
        <p className="text-center responsive-header">
          You can find me on other platforms too!
        </p>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </Col>
        <Col>
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </Col>
      </Row>
    </Container>
  );
};

export default FindPage;
