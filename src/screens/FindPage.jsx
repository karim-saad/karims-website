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
          <a href="mailto:karimsaad47@gmail.com">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </a>
        </Col>
        <Col>
          <a href="https://github.com/karim-saad">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/in/karimsaad47/">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default FindPage;
